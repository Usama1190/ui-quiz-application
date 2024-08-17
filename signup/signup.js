import { auth, createUserWithEmailAndPassword } from "../firebase/app";


const input_fields = document.querySelectorAll('form input');

const { email, password } = input_fields;

console.log(input_fields);

const signup = document.getElementById('signup');


const user_signup = () => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}


signup.addEventListener('click', user_signup);

onAuthStateChanged(auth, (user) => {
    if(user) {
        window.location.href = '../dashboard/index.html';
    }
})