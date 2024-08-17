// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyC7ZjF4ezJc5sUh0FyfLiDKUTJ-YrffAIY",
    authDomain: "quiz-app-9e838.firebaseapp.com",
    projectId: "quiz-app-9e838",
    storageBucket: "quiz-app-9e838.appspot.com",
    messagingSenderId: "547753696299",
    appId: "1:547753696299:web:26d1a05e87e36b2de85e6e",
    measurementId: "G-9JRLQD0WTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, createUserWithEmailAndPassword };