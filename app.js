const user = {
    email,
    password
}



let signup = document.getElementById('signup');

signup.addEventListener('click', () => {
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;

    sessionStorage.setItem('user', user);
});