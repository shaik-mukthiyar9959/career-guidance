// js/student.js

// Career Selection
function goToLocation() {
    const career = document.getElementById('career').value;
    if (career) {
      localStorage.setItem('career', career);
      window.location.href = 'location.html';
    } else {
      alert('Please select a career');
    }
  }
  
  // Location Selection
  function selectLocation(location) {
    localStorage.setItem('location', location);
    window.location.href = 'colleges.html';
  }
  
  // Load Colleges
  function loadColleges() {
    const career = localStorage.getItem('career');
    const location = localStorage.getItem('location');
    const collegeList = document.getElementById('collegeList');
  
    db.collection('colleges')
      .where('career', '==', career)
      .where('location', '==', location)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          collegeList.innerHTML = '<p>No colleges found for your selection.</p>';
          return;
        }
        snapshot.forEach(doc => {
          const college = doc.data();
          const div = document.createElement('div');
          div.className = 'college-card';
          div.innerHTML = `
            <h3>${college.name}</h3>
            <p>Fees: ${college.fees}</p>
            <p>Eligibility: ${college.eligibility}</p>
            <button onclick="selectCollege('${doc.id}')">Select</button>
          `;
          collegeList.appendChild(div);
        });
      });
  }
  
  function selectCollege(id) {
    localStorage.setItem('collegeId', id);
    window.location.href = 'college-register.html';
  }
  