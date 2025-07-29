// Firebase v8 config (Do NOT upgrade to modular v9+ syntax)
const firebaseConfig = {
  apiKey: "AIzaSyB102Y7z_TTkUie9e9ISBOKpK64YHKgvD4",
  authDomain: "career-guidance-8477b.firebaseapp.com",
  projectId: "career-guidance-8477b",
  storageBucket: "career-guidance-8477b.appspot.com",
  messagingSenderId: "103165906232",
  appId: "1:103165906232:web:2a341c0d6d2b6e8d2685cd",
  measurementId: "G-PMHBP4KLMZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global instances
const auth = firebase.auth();
const db = firebase.firestore();
