// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVNp8MAUD0s4y1WKOH-9A7RthqKa3Q8qg",
  authDomain: "email-pass-auth-2025-caa1e.firebaseapp.com",
  projectId: "email-pass-auth-2025-caa1e",
  storageBucket: "email-pass-auth-2025-caa1e.firebasestorage.app",
  messagingSenderId: "107343480960",
  appId: "1:107343480960:web:3457352d3fb41fff463e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;