import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase/app.js";


let input_fields = document.querySelectorAll('form input');

const { user_email, user_password } = input_fields;

console.log(input_fields);

const signup_btn = document.getElementById('signup_btn');

signup_btn.innerText = 'Signup';


const user_signup = () => {
    event.preventDefault();

    signup_btn.innerText = 'loading...';

    createUserWithEmailAndPassword(auth, user_email.value, user_password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        signup_btn.innerText = 'Signup';
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        signup_btn.innerText = 'Signup';
        
        // ..
    });
}


signup_btn.addEventListener('click', user_signup);

onAuthStateChanged(auth, (user) => {
    if(user) {
        window.location.href = '../dashboard/index.html';
    }
})