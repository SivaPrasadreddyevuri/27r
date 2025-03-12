// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwBBzrSnl1KUBLrI3R44wplakxK83zp8",
  authDomain: "r-js-96bce.firebaseapp.com",
  projectId: "r-js-96bce",
  storageBucket: "r-js-96bce.firebasestorage.app",
  messagingSenderId: "651768745906",
  appId: "1:651768745906:web:e65b7ef55d38ee44195eab",
  measurementId: "G-YZNTNY08FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialising  firbase authentication 
const auth=getAuth(app)
export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}