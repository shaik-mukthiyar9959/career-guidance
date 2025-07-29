// Auth guard + show admin email
auth.onAuthStateChanged(user => {
  if (user) {
    const emailSpan = document.getElementById('adminEmail');
    if (emailSpan) emailSpan.textContent = user.email;
  } else if (window.location.pathname.includes('admin-dashboard.html')) {
    window.location.href = 'admin-login.html';
  }
});

// Admin logout
function adminLogout() {
  auth.signOut()
    .then(() => {
      alert('Admin logged out successfully!');
      window.location.href = 'admin-login.html';
    })
    .catch(err => console.error('Logout error:', err));
}

// Firestore reference
const dbRef = db.collection('colleges');

// Add college
function addCollege() {
  const name = document.getElementById('collegeName').value.trim();
  const career = document.getElementById('career').value.trim().toLowerCase();
  const location = document.getElementById('location').value.trim().toLowerCase();
  const fees = document.getElementById('fees').value.trim();
  const eligibility = document.getElementById('eligibility').value.trim();

  if (!name || !career || !location || !fees || !eligibility) {
    alert('Please fill all fields!');
    return;
  }

  dbRef.add({
    name,
    career,
    location,
    fees,
    eligibility,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert('College added successfully!');
    clearForm();
    loadColleges();
  })
  .catch(error => {
    console.error('Error adding college:', error);
    alert('Error: ' + error.message);
  });
}

function clearForm() {
  document.getElementById('collegeName').value = '';
  document.getElementById('career').value = '';
  document.getElementById('location').value = '';
  document.getElementById('fees').value = '';
  document.getElementById('eligibility').value = '';
}

// Load colleges
function loadColleges() {
  const list = document.getElementById('collegeList');
  list.innerHTML = '<p>Loading...</p>';

  dbRef.orderBy('createdAt', 'desc').get()
    .then(snapshot => {
      if (snapshot.empty) {
        list.innerHTML = '<p>No colleges added yet.</p>';
        return;
      }
      list.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement('div');
        div.className = 'college-card';
        div.innerHTML = `
          <p><strong>${data.name}</strong> (${data.location})</p>
          <p>Career: ${data.career}</p>
          <p>Fees: ${data.fees}</p>
          <p>Eligibility: ${data.eligibility}</p>
        `;
        list.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error loading colleges:', error);
      list.innerHTML = '<p>Error loading colleges.</p>';
    });
}

window.onload = loadColleges;
