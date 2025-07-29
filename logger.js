function logAction(action, details) {
  const user = auth.currentUser ? auth.currentUser.email : 'Guest';
  db.collection('logs').add({
    user,
    action,
    details,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(err => console.error('Logging error:', err));
}
