import { auth, signOut, onAuthStateChanged } from "../firebase/app.js";

// console.log(main_con_form, 'hello dashboard here!');


const user_logout = () => {
    event.preventDefault();

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


main_con_btns.user_logout_btn.addEventListener('click', user_logout);

onAuthStateChanged(auth, (user) => {
    if(!user) {
        main_con.home_section.classList.remove('d_none');
        main_con.app_navbar.classList.remove('d_none');
        main_con.dashboard_section.classList.add('d_none');
        main_con.footer.classList.remove('d_none');
        main_con.ls_btns_wrapper.classList.remove('d_none');
        main_con.logout_wrapper.classList.add('d_none');
        main_con.student_result_dashboard_wrapper.classList.add('d_none');
        main_con.dashboard_section.style.display = 'none';
    }
    else {
        main_con.app_navbar.classList.remove('d_none');
        main_con.home_section.classList.add('d_none');
        main_con.dashboard_section.classList.remove('d_none');
        main_con.footer.classList.remove('d_none');
        main_con.ls_btns_wrapper.classList.add('d_none');
        main_con.logout_wrapper.classList.remove('d_none');
    }
});