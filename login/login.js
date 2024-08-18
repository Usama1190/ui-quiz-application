import { auth, sendPasswordResetEmail  , signInWithEmailAndPassword, onAuthStateChanged } from "../firebase/app.js";

let formField = document.querySelectorAll('form input');

const [user_email, user_password] = formField;

let forgotPassword = document.getElementById('forgotPassword');

let warning = document.getElementById('warning');

let login_btn = document.getElementById('login');

const login = () => {
    event.preventDefault();

    login_btn.innerText = 'Loading...';

    signInWithEmailAndPassword(auth, user_email.value, user_password.value)
    .then((userCredential) => {
        // Signed in 
        login_btn.innerText = 'Login';

        const user = userCredential.user;
        console.log(user);
        
        // ...
        warning.innerText = '';
    })
    .catch((error) => {
        login_btn.innerText = 'Login';

        const errorCode = error.code;
        const errorMessage = error.message;

        warning.innerText = 'invalid input field';
    });

    
}

login_btn.addEventListener('click', login);



const forgotPass = () => {
    sendPasswordResetEmail(auth, loginEmail.value)
    .then(() => {
        warning.innerText = 'Password send check email';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        warning.innerText = 'Something went wrong!';
    });
};

forgotPassword.addEventListener('click', forgotPass);





onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/index.html';
    }
});