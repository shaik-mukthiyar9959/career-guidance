function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Signup successful!");
      localStorage.setItem('userId', userCredential.user.uid);
      window.location.href = 'career-selection.html';
    })
    .catch(error => {
      alert(`Signup failed: ${error.message}`);
    });
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      localStorage.setItem('userId', userCredential.user.uid);
      alert("Login successful!");
      window.location.href = 'career-selection.html';
    })
    .catch(error => {
      alert(`Login failed: ${error.message}`);
    });
}

function logout() {
  auth.signOut().then(() => {
    localStorage.removeItem('userId');
    alert("Logged out successfully");
    window.location.href = 'login.html';
  });
}
