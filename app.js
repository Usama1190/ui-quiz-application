const user = {
    email,
    password,
    name: 'xyz',
    rollno: 190
}

const admin = {
    email: 'usamaisrar1189@gmail.com',
    password: 'usama1189'
}

const firstAttempt = user.email === 'abc@gmail.com';

sessionStorage.setItem('admin', JSON.stringify(admin));


let emailAlreadyExits = JSON.parse(sessionStorage.getItem('user')) || firstAttempt;
let warning = document.getElementById('demo');
let signupForm = document.getElementById('signupForm');

let key_wrapper = document.getElementById('key_wrapper');
let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');

let keyset = 'js321';
let inputkey;

const signup = document.getElementById('signup');
const keysubmit = document.getElementById('keysubmit');
const enteruserdetails = document.getElementById('enteruserdetails');


let userinfo_wrapper = document.getElementById('userinfo_wrapper');


signup.addEventListener('click', (e) => {
    e.preventDefault();
    
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;
    
    if(user.email === emailAlreadyExits.email) {
        warning.innerHTML = 'This email address already exits';
    }
    else if(user.email === admin.email) {
        signupForm.classList.add('hidden');
        key_wrapper.style.display = 'block';
        heading2.style.display = 'block';
    }
    else {
        warning.innerHTML = 'This email address is not registered';
        sessionStorage.setItem('user', JSON.stringify(user));
        
        signupForm.classList.add('hidden');
        key_wrapper.style.display = 'block';
        heading2.style.display = 'block';
    }
});



let warning2 = document.getElementById('demo1');

keysubmit.addEventListener('click', (e) => {
    e.preventDefault();

    inputkey = document.getElementById('inputkey').value;

    if(inputkey === keyset) {
        heading1.style.display = 'block';
        heading2.style.display = 'none';
        key_wrapper.style.display = 'none';
        userinfo_wrapper.style.display = 'block';
    }
    else {
        warning2.innerHTML = 'Wrong key';
    }
});




enteruserdetails.addEventListener('click', (e) => {
    e.preventDefault();

    user.name = document.getElementById('name').value
    user.rollno = parseInt(document.getElementById('rollno').value);

    console.log(user.name, user.rollno);
})