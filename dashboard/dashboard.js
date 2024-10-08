import { auth, signOut, onAuthStateChanged } from "../firebase/app.js";

console.log(main_con_form, 'hello dashboard here!');



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
        main_con.home_section.classList.remove('d_none');
        main_con.app_navbar.classList.remove('d_none');
        main_con.dashboard_section.classList.add('d_none');
        main_con.footer.classList.remove('dislay_none');
        main_con.ls_btns_wrapper.classList.remove('d_none');
        main_con.logout_wrapper.classList.add('d_none');
    }
    else {
        main_con.app_navbar.classList.remove('d_none');
        main_con.home_section.classList.add('d_none');
        main_con.dashboard_section.classList.remove('d_none');
        main_con.footer.classList.remove('_none');
        main_con.ls_btns_wrapper.classList.add('d_none');
        main_con.logout_wrapper.classList.remove('d_none');
    }
});