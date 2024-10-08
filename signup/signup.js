import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase/app.js";


const user_signup_or_login = () => {
    event.preventDefault();

    console.log(main_con_form.user_password.value, 'user_password');
    console.log(main_con_form.user_confirmpass.value, 'user_confirmpass');



    if(main_con_form.user_password.value === main_con_form.user_confirmpass.value) {
        main_con_form.sign_or_login_btn.innerText = 'loading...';

        createUserWithEmailAndPassword(auth, user_email.value, user_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            main_con_form.sign_or_login_btn.innerText = 'Signup';
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        
            main_con_form.sign_or_login_btn.innerText = 'Signup';
            
            // ..
        });
    }
    else {
        main_con_form.warning.innerText = "Confirm password doesn't matched!";
    }
}


main_con_form.sign_or_login_btn.addEventListener('click', user_signup_or_login);




















// let input_fields = document.querySelectorAll('form input');

// const [ user_email, user_password ] = input_fields;

// console.log(input_fields);

// const signup_btn = document.getElementById('signup_btn');

// signup_btn.innerText = 'Signup';


// const user_signup = () => {
    // event.preventDefault();

    // alert('Sign up!');

    // signup_btn.innerText = 'loading...';

    // createUserWithEmailAndPassword(auth, user_email.value, user_password.value)
    // .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;

    //     signup_btn.innerText = 'Signup';
        
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    
    //     signup_btn.innerText = 'Signup';
        
    //     // ..
    // });
// }



// signup_btn.addEventListener('click', user_signup);

// onAuthStateChanged(auth, (user) => {
//     if(user) {
//         window.location.href = '../dashboard/index.html';
//     }
// });