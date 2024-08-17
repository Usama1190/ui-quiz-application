import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../firebase/app";


const input_fields = document.querySelectorAll('form input');

const { user_email, user_password } = input_fields;

console.log(input_fields);

const login = document.getElementById('login');


const user_login = () => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, user_email.value, user_password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

}


signup.addEventListener('click', user_login);

onAuthStateChanged(auth, (user) => {
    if(!user) {
        window.location.href = '../login/index.html';
    }
})