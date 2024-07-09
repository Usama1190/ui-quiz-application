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


const start = document.getElementById('start');
let quizdashboard_wrapper = document.getElementById('quizdashboard_wrapper');

let quizQuestions = [
    "What are the three main 'simple types' in TypeScript?",
    "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
    "True or False: TypeScript can always correctly infer a variables type.",
    "You can disable implicit variable type assignment by enabling the compiler option:",
    "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
    "______ is similar to 'any', but a safer alternative when uncertain about the type.",
    "What is the inherited type for the variable example in `const example = ['Dylan']`?",
    "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
    "True or False: TypeScript will always correctly infer the type of an array.",
    "True or False: a Tuple and an Array are the same thing when discussing types",
    "Which is a successful example of this tuple `[number, string]`?",
    "Type Aliases are mostly used with ______.",
    "True or False: Interfaces are similar to type aliases, but only for object types?",
    "________ an interface will have the same properties as that interface.",
    "What are the two types of enums?",
    "Numeric enums first value is defaulted to what?",
    "True or False: 'keyof' can be used with index signatures to extract the index type.",
    "True or False: Generics can not be assigned default values.",
    "Definitely Typed is...",
    "What is the type of the parameter: `function ex(param1?: string){}`?",
    "_____ is a return type for when nothing is returned.",
    "Access modifiers control the ______ of properties and methods.",
    "True or False: public modifiers allow access to the class members from anywhere.",
    "True or False: protected modifiers only are allowed in the inherited class.",
    "When a class extends another class and replaces the members of its parent it is called what?"
]

start.addEventListener('click', (e) => {
    e.preventDefault();

    quizguide_wrapper.style.display = 'none';
    quizdashboard_wrapper.style.display = 'block';

    for(let i = 0; i < quizQuestions.length; i++) {
        let question = document.createElement('div');
        question.classList.add('question');
        question.innerHTML = quizQuestions[i];
        quizdashboard_wrapper.appendChild(question);

        // let nextBtn = document.createElement('button');
        // let nextBtnText = document.createTextNode('Next');
        // nextBtn.appendChild(nextBtnText);
        // nextBtn.classList.add('btn');
        // quizdashboard_wrapper.appendChild(nextBtn);
    }
})