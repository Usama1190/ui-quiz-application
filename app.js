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

console.log(emailAlreadyExits);

let warning = document.getElementById('demo');

const signup = document.getElementById('signup');


signup.addEventListener('click', (e) => {
    e.preventDefault();
    
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;

    if(user.email === emailAlreadyExits.email) {
        warning.innerHTML = 'This email address already exits';
    }
    else if(user.email === admin.email) {}
    
    else {
        warning.innerHTML = 'This email address is not registered';
        sessionStorage.setItem('user', JSON.stringify(user));

        document.getElementById('signupForm').style.display = 'none';
        console.log(emailAlreadyExits);
    }
});
