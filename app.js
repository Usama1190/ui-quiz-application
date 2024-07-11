const user = {
    email,
    password,
    name: 'xyz',
    rollno: 190
}

const admin = {
    email: 'usamaisrar1190@gmail.com',
    password: 'usama1190'
}

const firstAttempt = user.email === 'abc@gmail.com';

// sessionStorage.setItem('admin', JSON.stringify(admin));


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


let updateKey = document.getElementById('updateKey');   // button



signup.addEventListener('click', (e) => {
    e.preventDefault();
    
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;
    
    if(user.email.trim() === '' || user.password.length <= 3) {
        warning.innerHTML = 'input field is not valid';
    }
    else if(user.email === emailAlreadyExits.email) {
        warning.innerHTML = 'This email address already exits';
    }
    else if(user.email === admin.email && user.password === admin.password) {
        signupForm.classList.add('hidden');
        key_wrapper.style.display = 'block';

        let heading5 = document.getElementById('heading5');
        heading5.style.display = 'block';

        let adminKeyWrapper = document.getElementById('adminKeyWrapper');
        adminKeyWrapper.classList.remove('hidden');

        updateKey.addEventListener('click', (e) => {
            e.preventDefault();
            keyset = document.getElementById('editKey').value;
        });
    }
    else {
        // warning.innerHTML = 'This email address is not registered';
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
    user.rollno = document.getElementById('rollno').value;

    console.log(user.rollno);
    console.log(user.rollno.length);

    if(user.name.trim() === '' || user.rollno.length <= 3) {
        warning3.innerHTML = 'input field is not valid';
    }
    else {
        sessionStorage.setItem('user', JSON.stringify(user));

        userinfo_wrapper.style.display = 'none';
        heading1.style.display = 'none';
        quizinfo_wrapper.style.display = 'block';

        let namefirstletter = user.name[0].toUpperCase();
        let nameremainingletters = user.name.slice(1).toLowerCase();

        heading3.innerHTML = `Hi, ${namefirstletter + nameremainingletters}`;
    }
});

typescript.addEventListener('click', (e) => {
    e.preventDefault();

    quizinfo_wrapper.style.display = 'none';
    quizguide_wrapper.style.display = 'block';
})


const start = document.getElementById('start');
let questions_wrapper = document.getElementById('questions_wrapper');

let quizQuestions = [
    "1. What are the three main 'simple types' in TypeScript?",
    "2. What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
    "3. True or False: TypeScript can always correctly infer a variables type.",
    "4. You can disable implicit variable type assignment by enabling the compiler option:",
    "5. You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
    "6. ______ is similar to 'any', but a safer alternative when uncertain about the type.",
    "7. What is the inherited type for the variable example in `const example = ['Dylan']`?",
    "8. What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
    "9. True or False: TypeScript will always correctly infer the type of an array.",
    "10. True or False: a Tuple and an Array are the same thing when discussing types",
    "11. Which is a successful example of this tuple `[number, string]`?",
    "12. Type Aliases are mostly used with ______.",
    "13. True or False: Interfaces are similar to type aliases, but only for object types?",
    "14. ________ an interface will have the same properties as that interface.",
    "15. What are the two types of enums?",
    "16. Numeric enums first value is defaulted to what?",
    "17. True or False: 'keyof' can be used with index signatures to extract the index type.",
    "18. True or False: Generics can not be assigned default values.",
    "19. Definitely Typed is...",
    "20. What is the type of the parameter: `function ex(param1?: string){}`?",
    "21. _____ is a return type for when nothing is returned.",
    "22. Access modifiers control the ______ of properties and methods.",
    "23. True or False: public modifiers allow access to the class members from anywhere.",
    "24. True or False: protected modifiers only are allowed in the inherited class.",
    "25. When a class extends another class and replaces the members of its parent it is called what?"
];


let options = [{
    a: 'Boolean, Number, String',
    b: 'Object, Array, Symbol',
    c: 'Array, Object, Boolean',
    d: 'Object, String, Number'
},
{
    a: 'Explicit',
    b: 'Implicit'
},
{
    a: 'True',
    b: 'False'
},
{
    a: 'autoTypeAssignment = FALSE',
    b: 'implicit = FALSE',
    c: 'noAutoType',
    d: 'noImplicitAny'
},
{
    a: 'strictNullChecks',
    b: 'strictChecksRequired',
    c: 'noFalseyInits',
    d: 'noAutoType',
},
{
    a: 'unknown',
    b: 'similer',
    c: 'never'
},
{
    a: 'string[]',
    b: 'unknown[]',
    c: 'any[]',
    d: 'string',
},
{
    a: 'Makes it private and can only be used in the file its created',
    b: 'Makes you read it for bette clean code',
    c: 'Allows no changes and is there simply to be read from and not modified',
    d: 'Allows only adding but not deleting elements in the array',
},
{
    a: 'false',
    b: 'true'
},
{
    a: 'true',
    b: 'false'
},
{
    a: 'cosnt ourTuple = [101, "Coding God"]',
    b: 'cosnt ourTuple = [101, 101, "Coding God", "Coding God"]',
    c: 'cosnt ourTuple = ["Coding God", 101]',
    d: 'cosnt ourTuple = [101]',
},
{
    a: 'Number',
    b: 'Boolean',
    c: 'String'
},
{
    a: 'false',
    b: 'true'
},
{
    a: 'Idolizing',
    b: 'Duplicating',
    c: 'Improving',
    d: 'Extending',
},
{
    a: 'Number and Number Array',
    b: 'String and Number',
    c: 'Number and Boolean',
    d: 'String and Boolean',
},
{
    a: '0',
    b: '5',
    c: '1',
    d: '10',
},
{
    a: 'True',
    b: 'False'
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'a project whose goal is to make types dynamic',
    b: 'a project that provides a central repositary of TypeScript definitions for NPM packages which do not have types.',
    c: 'a superset of TypeScript',
    d: 'the official name of TypeScript',
},
{
    a: 'string | undefined',
    b: 'unknown',
    c: 'string',
    d: 'string | null',
},
{
    a: 'any[]',
    b: 'unknown',
    c: 'void',
    d: 'any',
},
{
    a: 'mocking',
    b: 'inhritance',
    c: 'visiblity',
    d: 'Type',
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'inheriting',
    b: 'overload',
    c: 'extending',
    d: 'override',
}];


let correctOptions = [
    'Boolean, Number, String', 'Explicit', 'False', 'noImplicitAny', 
    'strictNullChecks', 'unknown', 'string[]', 
    'Allows no changes and is there simply to be read from and not modified', 
    'false', 'false', 'cosnt ourTuple = [101, "Coding God"]', 'String', 'true', 
    'Extending', 'String and Number', '0', 'True', 'False', 
    'a project that provides a central repositary of TypeScript definitions for NPM packages which do not have types.',
    'string | undefined', 'void', 'Type', 'True', 'False', 'override'
];



let count = 0;

let questionDiv = document.createElement('div');
questionDiv.classList.add('questions');
questionDiv.innerHTML = quizQuestions[count];
questions_wrapper.appendChild(questionDiv);

let nextBtn = document.getElementById('next');

let option1 = document.getElementById('option1').attributes.value;
let option2 = document.getElementById('option2').attributes.value;
let option3 = document.getElementById('option3').attributes.value;
let option4 = document.getElementById('option4').attributes.value;



option1 = options[0].a;
option2 = options[0].b;
option3 = options[0].c;
option4 = options[0].d;


let option1Show = document.getElementById('option1Show');
let option2Show = document.getElementById('option2Show');
let option3Show = document.getElementById('option3Show');
let option4Show = document.getElementById('option4Show');


option1Show.innerHTML = options[0].a;
option2Show.innerHTML = options[0].b;
option3Show.innerHTML = options[0].c;
option4Show.innerHTML = options[0].d;


let marquee = document.getElementById('marquee');

let quizresultdashboard_wrapper = document.getElementById('quizresultdashboard_wrapper');

let score = 0;
let count2 = 0;
let correctAnswerShow = document.getElementById('correctAnswer');
let resultshow = document.getElementById('resultshow');
let percentageDiv = document.getElementById('percentage');
let percentage;

// Add active class to the current button (highlight it)
let options_wrapper = document.getElementById("options_wrapper");
let optionsPic = options_wrapper.getElementsByClassName("options");








start.addEventListener('click', (e) => {
    e.preventDefault();
    
    quizguide_wrapper.style.display = 'none';
    marquee.style.display = 'none';
    quizdashboard_wrapper.style.display = 'block';

    let minutes = 19;
    let seconds = 59;

    let x = setInterval(function() {
        seconds--;

        if(seconds === -1) {
            minutes--;
            seconds = 59;
        }

        if(minutes === 0 && seconds === 0) {
            quizdashboard_wrapper.style.display = 'none';
            quizresultdashboard_wrapper.style.display = 'block';
        }

        document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
    }, 1000);
});



nextBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if(count > 23) {
        quizdashboard_wrapper.style.display = 'none';
        quizresultdashboard_wrapper.style.display = 'block';
    }
    else {
        questionDiv.innerHTML = quizQuestions[++count];
        questions_wrapper.appendChild(questionDiv);

        option1Show.innerHTML = options[count].a;
        option2Show.innerHTML = options[count].b;
        option3Show.innerHTML = options[count].c;
        option4Show.innerHTML = options[count].d;
    }
});




for (let i = 0; i < optionsPic.length; i++) {
    optionsPic[i].addEventListener("click", function() {

        let currentOption = optionsPic[i].innerHTML;

        if(currentOption === correctOptions[count2]) {
            score++;            
        }
        else {
            console.log('error!');
        }
        count2++;
        correctAnswerShow.innerHTML = score;

        percentage = (score / 25) * 100;
        percentageDiv.innerHTML = percentage + '%';

        if(percentage > 70) {
            resultshow.innerHTML = `Congratulations ${user.name}, you passed`;
            resultshow.style.color = 'rgb(24, 56, 83)';
        }
        else {
            resultshow.innerHTML = 'Sorry you failed';
            resultshow.style.color = 'red';
        }
    });
}

let backToHome = document.getElementById('backToHome');

backToHome.addEventListener('click', (e) => {
    e.preventDefault();
    quizresultdashboard_wrapper.style.display = 'none';
    signupForm.classList.remove('hidden');
})

// console.log(count, '<= count', questionDiv, '<= questionDiv', nextBtn, '<= nextBtn', "Before click next!");
