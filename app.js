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

const quizguide_wrapper = document.getElementById('quizguide_wrapper');

let keyset = 'js321';
let inputkey;

const signup = document.getElementById('signup');
const keysubmit = document.getElementById('keysubmit');
const enteruserdetails = document.getElementById('enteruserdetails');
const typescript = document.getElementById('typescript');


let userinfo_wrapper = document.getElementById('userinfo_wrapper');
let quizinfo_wrapper = document.getElementById('quizinfo_wrapper');


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


let warning3 = document.getElementById('demo2');
let heading3 = document.getElementById('heading3');

enteruserdetails.addEventListener('click', (e) => {
    e.preventDefault();

    user.name = document.getElementById('name').value
    user.rollno = parseInt(document.getElementById('rollno').value);

    if(user.name.trim() === '') {
        warning3.innerHTML = 'Please enter your name';
    }
    else {
        sessionStorage.setItem('user', JSON.stringify(user));

        userinfo_wrapper.style.display = 'none';
        heading1.style.display = 'none';
        quizinfo_wrapper.style.display = 'block';

        let namefirstletter = user.name[0].toUpperCase();
        let nameremainingletters = user.name.slice(1).toLowerCase();

        console.log(namefirstletter);
        console.log(nameremainingletters);

        heading3.innerHTML = `Hi, ${namefirstletter + nameremainingletters}`;
    }
});

typescript.addEventListener('click', (e) => {
    e.preventDefault();

    quizinfo_wrapper.style.display = 'none';
    quizguide_wrapper.style.display = 'block';
})