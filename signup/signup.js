import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase/app.js";


const user_signup = () => {
    event.preventDefault();

    console.log('Signup Function is running!');
    student_dashboard.show_user_name.innerText = main_con_form.user_name.value;

    if(main_con_form.user_name.value != '' && main_con_form.user_password.value === main_con_form.user_confirmpass.value) {
        // main_con_form.signup_btn.innerText = 'loading...';
        main_con_form.loader_wrapper_form.classList.remove('d_none');
        main_con_form.loader_wrapper_form.style.zIndex = '1';
        main_con_form.form.style.opacity = '0.5';
        

        createUserWithEmailAndPassword(auth, user_email.value, user_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            // main_con_form.signup_btn.innerText = 'Signup';
            main_con_form.loader_wrapper_form.classList.add('d_none');
            main_con_form.loader_wrapper_form.style.zIndex = '-1';
            main_con_form.form.style.opacity = '1';
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            main_con_form.warning.innerText = "input fields is not valid!";
        
            // main_con_form.signup_btn.innerText = 'Signup';
            main_con_form.loader_wrapper_form.classList.add('d_none');
            main_con_form.loader_wrapper_form.style.zIndex = '-1';
            main_con_form.form.style.opacity = '1';
            
            // ..
        });
    }
    else {
        main_con_form.warning.innerText = "input fields is not valid!";
    }
}

// console.log(main_con_form.sign_or_login_btn.innerText);



main_con_form.signup_btn.addEventListener('click', user_signup);


onAuthStateChanged(auth, (user) => {
    if(user) {
        main_con.app_navbar.classList.remove('d_none');
        main_con.home_section.classList.add('d_none');
        main_con.login_signup_form.classList.add('d_none');
        main_con.dashboard_section.classList.remove('d_none');
        main_con.footer.classList.add('d_none');
        main_con.ls_btns_wrapper.classList.add('d_none');
        main_con.logout_wrapper.classList.remove('d_none');
    }
});










/*
let input_fields = document.querySelectorAll('form input');

const [ user_email, user_password ] = input_fields;

console.log(input_fields);

const signup_btn = document.getElementById('signup_btn');

signup_btn.innerText = 'Signup';


const user_signup = () => {
    event.preventDefault();

    alert('Sign up!');

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
});
*/