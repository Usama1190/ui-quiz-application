import { auth, signOut, onAuthStateChanged } from "../firebase/app.js";


const login_btn = document.getElementById('user_logout');

const user_logout = () => {
    event.preventDefault();


    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


login_btn.addEventListener('click', user_logout);

onAuthStateChanged(auth, (user) => {
    if(!user) {
        window.location.href = '../index2.html';
    }
})