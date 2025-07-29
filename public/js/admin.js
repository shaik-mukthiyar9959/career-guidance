// admin.js

auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("adminEmail").textContent = user.email;
    loadColleges();
  } else {
    window.location.href = "admin-login.html";
  }
});

function adminLogout() {
  auth.signOut().then(() => {
    alert("Logged out!");
    window.location.href = "admin-login.html";
  });
}

function addCollege() {
  const name = document.getElementById('collegeName').value.trim();
  const career = document.getElementById('career').value.trim();
  const location = document.getElementById('location').value.trim();
  const fees = document.getElementById('fees').value.trim();
  const eligibility = document.getElementById('eligibility').value.trim();

  if (!name || !career || !location || !fees || !eligibility) {
    alert("Please fill all fields.");
    return;
  }

  db.collection("colleges").add({
    name,
    career,
    location,
    fees,
    eligibility,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert("College added!");
    loadColleges();
  }).catch((error) => {
    console.error("Error adding college:", error);
    alert("Failed to add college.");
  });
}

function loadColleges() {
  const list = document.getElementById("collegeList");
  list.innerHTML = "Loading...";

  db.collection("colleges").orderBy("createdAt", "desc").get()
    .then(snapshot => {
      list.innerHTML = "";
      if (snapshot.empty) {
        list.textContent = "No colleges added yet.";
        return;
      }

      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.className = "college-item";
        div.innerHTML = `
          <strong>${data.name}</strong> (${data.location})<br>
          Career: ${data.career} | Fees: ${data.fees}<br>
          Eligibility: ${data.eligibility}
          <hr>
        `;
        list.appendChild(div);
      });
    }).catch(error => {
      console.error("Error loading colleges:", error);
      list.textContent = "Error loading data.";
    });
}
