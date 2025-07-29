// js/firebase-config.js
// NOTE: We are using Firebase v8 namespaced SDK (matches script tags in HTML)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB102Y7z_TTkUie9e9ISBOKpK64YHKgvD4",
  authDomain: "career-guidance-8477b.firebaseapp.com",
  projectId: "career-guidance-8477b",
  storageBucket: "career-guidance-8477b.appspot.com",
  messagingSenderId: "103165906232",
  appId: "1:103165906232:web:2a341c0d6d2b6e8d2685cd",
  measurementId: "G-PMHBP4KLMZ"
};

// Initialize Firebase (safe even if called once per page)
firebase.initializeApp(firebaseConfig);

// Global handles used in other JS files
const auth = firebase.auth();
const db = firebase.firestore();
