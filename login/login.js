import { auth, sendPasswordResetEmail  , signInWithEmailAndPassword, onAuthStateChanged } from "../firebase/app.js";

// console.log(main_con_form.sign_or_login_btn.innerText, 'Login here');

const login = () => {
    event.preventDefault();

    console.log('Login Function is running!');

    // main_con_form.login_btn.innerText = 'Loading...';
    main_con_form.loader_wrapper_form.classList.remove('d_none');
    main_con_form.loader_wrapper_form.style.zIndex = '1';
    main_con_form.form.style.opacity = '0.5';

    signInWithEmailAndPassword(auth, user_email.value, user_password.value)
    .then((userCredential) => {
        // Signed in 
        // main_con_form.login_btn.innerText = 'Login';
        main_con_form.loader_wrapper_form.classList.add('d_none');
        main_con_form.loader_wrapper_form.style.zIndex = '-1';
        main_con_form.form.style.opacity = '1';

        const user = userCredential.user;
        // console.log(user);
        
        // ...
        main_con_form.warning.innerText = '';
    })
    .catch((error) => {
        // main_con_form.login_btn.innerText = 'Login';
        main_con_form.loader_wrapper_form.classList.add('d_none');
        main_con_form.loader_wrapper_form.style.zIndex = '-1';
        main_con_form.form.style.opacity = '1';

        const errorCode = error.code;
        const errorMessage = error.message;

        main_con_form.warning.innerText = 'invalid input field';
    });

    
}

main_con_form.login_btn.addEventListener('click', login);


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

main_con_form.forgot_password.addEventListener('click', forgotPass);





onAuthStateChanged(auth, (user) => {
    if (user) {
        main_con.app_navbar.classList.remove('d_none');
        main_con.home_section.classList.add('d_none');
        main_con.dashboard_section.style.display = 'block';
        main_con.footer.classList.add('d_none');
        main_con.ls_btns_wrapper.classList.add('d_none');
        main_con.logout_wrapper.classList.remove('d_none');
        main_con.login_signup_form.classList.add('d_none');
    }
});