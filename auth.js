// js/auth.js

function login() {
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');

  if (!emailInput || !passInput) {
    alert('Login form not found.');
    return;
  }

  const email = emailInput.value.trim();
  const password = passInput.value; // don't trim passwords

  if (!email || !password) {
    alert('Please enter email and password.');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('userId', user.uid);
      logAction('Student Login', email);
      alert('Login successful!');
      window.location.href = 'career-selection.html';
    })
    .catch(error => {
      console.error('Login error:', error);
      alert(`Login failed: ${error.code.replace('auth/', '')}`);
    });
}

function logout() {
  auth.signOut().then(() => {
    localStorage.removeItem('userId');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
  });
}

// Show user email if logged in
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('userEmail').textContent = user.email;
  }
});

auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = 'login.html';
  }
});
