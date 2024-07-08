const user = {
    email,
    password
}

const admin = {
    email: 'usamaisrar1189@gmail.com',
    password: 'usama1189'
}

sessionStorage.setItem('admin', JSON.stringify(admin));

let emailAlreadyExits = JSON.parse(sessionStorage.getItem('user'));
let warning = document.getElementById('demo');
let userPenal = document.getElementById('userPenal');
let signupForm = document.getElementById('signupForm');

const signup = document.getElementById('signup');


signup.addEventListener('click', (e) => {
    e.preventDefault();
    
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;

    if(user.email === emailAlreadyExits.email) {
        warning.innerHTML = 'This email address already exits';
    }
    else if(user.email === admin.email) {
        signupForm.style.display = 'none';
        userPenal.style.display = 'block';
    }
    else {
        warning.innerHTML = 'This email address is not registered';
        sessionStorage.setItem('user', JSON.stringify(user));

        signupForm.style.display = 'none';
        userPenal.style.display = 'block';
        console.log(emailAlreadyExits);
    }
});
