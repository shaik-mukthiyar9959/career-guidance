// Called from career-selection.html
function goToLocation() {
  const selectedCareer = document.getElementById('career').value;
  if (!selectedCareer) {
    alert('Please select a career');
    return;
  }

  localStorage.setItem('career', selectedCareer);
  window.location.href = 'college.html'; // correct file
}

// Called from college.html
function loadColleges() {
  const career = localStorage.getItem('career');
  const list = document.getElementById('collegeList');

  db.collection('colleges').where('career', '==', career).get()
    .then(snapshot => {
      if (snapshot.empty) {
        list.innerHTML = '<p>No colleges found for this career.</p>';
        return;
      }

      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement('div');
        div.className = 'college-card';
        div.innerHTML = `
          <h3>${data.name}</h3>
          <p>Location: ${data.location}</p>
          <p>Fees: ${data.fees}</p>
          <p>Eligibility: ${data.eligibility}</p>
          <button onclick="selectCollege('${doc.id}')">Select</button>
        `;
        list.appendChild(div);
      });
    })
    .catch(error => {
      list.innerHTML = 'Error loading colleges. Please try again later.';
      console.error(error);
    });
}

function selectCollege(collegeId) {
  localStorage.setItem('collegeId', collegeId);
  window.location.href = 'register-college.html';
}
