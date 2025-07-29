# Career Guidance Web App

## 📌 Project Overview
A responsive web application that helps students find colleges based on career and location, register for courses, and complete an aptitude test. Admin can add and manage college details. Built with **HTML, CSS, JavaScript, and Firebase**.

---

## ✅ Features
- Student Signup & Login (Firebase Authentication)
- Career & Location Selection
- College Listing (Filtered from Firestore)
- College Registration
- Aptitude Test with Score
- Admin Dashboard (Add Colleges)
- Action Logging (Firestore)

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Firebase Authentication & Firestore
- **Hosting:** Firebase Hosting

---

## 📂 Project Structure
career-guidance/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ ├── firebase-config.js
│ ├── auth.js
│ ├── student.js
│ ├── admin.js
│ ├── aptitude.js
│ └── logger.js
├── pages/
│ ├── login.html
│ ├── signup.html
│ ├── career-selection.html
│ ├── location.html
│ ├── colleges.html
│ ├── college-register.html
│ ├── aptitude-test.html
│ ├── test-result.html
│ ├── admin-login.html
│ └── admin-dashboard.html
└── README.md

markdown
Copy
Edit

---

## 🚀 Firebase Setup

### **Step 1: Create Firebase Project**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add Project** → Enter name → Continue.
3. Enable **Firestore Database** and **Authentication** (Email/Password).

### **Step 2: Add Web App**
1. Click **Add App → Web**.
2. Copy the Firebase config snippet and paste it into:
js/firebase-config.js

markdown
Copy
Edit

### **Step 3: Enable Authentication**
- Go to **Authentication → Sign-in Method → Enable Email/Password**.

### **Step 4: Create Firestore Collections**
- `colleges` → For storing college info
- `students` → For student profiles
- `registrations` → For college registrations
- `logs` → For action logs

---

## ▶ How to Run Locally
1. Clone this repo:
git clone <your-repo-link>

yaml
Copy
Edit
2. Open `index.html` in your browser.
3. Or use **Live Server** in VS Code.

---

## ☁ Deploy on Firebase Hosting
1. Install Firebase CLI:
npm install -g firebase-tools

markdown
Copy
Edit
2. Login:
firebase login

markdown
Copy
Edit
3. Initialize Hosting:
firebase init hosting

markdown
Copy
Edit
- Select **public folder:** `career-guidance`
4. Deploy:
firebase deploy

yaml
Copy
Edit

---

## ✅ Logging System
All user and admin actions are logged in Firestore `logs` collection using `logger.js`.

---

## 🎯 Screenshots
(Add screenshots after running the app locally)

---

## 🏆 Author
**SHAIK MOHAMMAD MUKTHIYAR**  
**Contact:** mukthiyar9959@email.com  