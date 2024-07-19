const userArray = JSON.parse(sessionStorage.getItem('userArray')) || [{
    email: 'usamaisrar@gmail.com',
    name: 'usama',
}];


const btns = {
    signup: document.getElementById('signup'),
    keysubmit: document.getElementById('keysubmit'),
    enteruserdetails: document.getElementById('enteruserdetails'),
    backToHome: document.getElementById('backToHome'),
    selectedCourse: document.getElementById('selectedCourse')
};

let confirmPass;

const warn = {
    warning1: document.getElementById('warning'),
}

const app_wrappers = {
    signupForm: document.getElementById('signupForm'),

    quizinfo_wrapper: document.getElementById('quizinfo_wrapper'),
    key_wrapper: document.getElementById('key_wrapper'),
    userinfo_wrapper: document.getElementById('userinfo_wrapper'),
    quizguide_wrapper: document.getElementById('quizguide_wrapper'),
    quizdashboard_wrapper: document.getElementById('quizdashboard_wrapper'),
    quizresultdashboard_wrapper: document.getElementById('quizresultdashboard_wrapper'),
    quizinfo_wrapper: document.getElementById('quizinfo_wrapper'),

    // user dashboard
    userdashboard_wrapper: document.getElementById('userdashboard_wrapper'),
}




btns.signup.addEventListener('click', (e) => {
    e.preventDefault();

    const newUser = {
        email,
        password,
        name: 'xyz',
        rollno: 0
    }
    
    newUser.email = document.getElementById('email').value;
    newUser.password = document.getElementById('password').value;
    confirmPass = document.getElementById('confirmPass').value;

    let isValueExists = true;

    if(newUser.email.trim() === '') {
        warn.warning1.innerHTML = 'input field is not valid';
    }
    else if(newUser.password.length <= 4) {
        warn.warning1.innerHTML = 'password contains atleast 5 characters';
    }
    else if(newUser.password != confirmPass) {
        warn.warning1.innerHTML = "password didn't matched!";
    }
    else {
        warn.warning1.innerHTML = '';
        if(newUser.email === userArray[0].email) {
            console.log('Admin block are open!');
        }
        else {
            for (let i = 0; i < userArray.length; i++) {
                if(newUser.email === userArray[i].email) {
                    warn.warning1.innerHTML = 'This email already exists';
                    isValueExists = false;
                }
                else {
                    console.log(isValueExists);
                }
            }

            if(isValueExists) {
                userArray.push(newUser);
                sessionStorage.setItem('userArray', JSON.stringify(userArray));

                signupSuccess();
            }
            console.log(userArray);
        }
    }
});


function signupSuccess() {
    signupForm.style.display = 'none';
    quizinfo_wrapper.style.display = 'block';
}








// for (let i = 0; i < userArray.length; i++) {
//     if(newUser.email === userArray[0].email) {
//         console.log('Admin');
//     }
//     else if(newUser.email === userArray[i].email) {
//         console.log('email already exists');
//     }
//     else {
//         console.log('new user');
//     }
// }












































































let warning = document.getElementById('demo');
let signupForm = document.getElementById('signupForm');

let key_wrapper = document.getElementById('key_wrapper');
let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');

const quizguide_wrapper = document.getElementById('quizguide_wrapper');

let keyset = JSON.parse(sessionStorage.getItem('keyset')) || 'js321';
let inputkey;

let userinfo_wrapper = document.getElementById('userinfo_wrapper');
let quizinfo_wrapper = document.getElementById('quizinfo_wrapper');

let keyShow = document.getElementById('keyShow');
keyShow.innerHTML = `key : ${keyset}`;


let updateKey = document.getElementById('updateKey');   // button

let warning2 = document.getElementById('demo1');
let warning3 = document.getElementById('demo2');
let heading3 = document.getElementById('heading3');




// ============================================================================

// signup.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     newUser.email = document.getElementById('email').value;
//     newUser.password = document.getElementById('password').value;
    
//     if(newUser.email.trim() === '' || newUser.password.length <= 3) {
//         warning.innerHTML = 'input field is not valid';
//     }
//     else if(newUser.email === emailAlreadyExits.email) {
//         warning.innerHTML = 'This email address already exists';
//     }
//     else if(newUser.email === userArray[0].email && newUser.password === userArray[0].password) {
//         signupForm.classList.add('hidden');
//         key_wrapper.style.display = 'block';

//         // ===================== userlogo start ========================

//         let userlogo = document.getElementById('userlogo');
//         userlogo.style.display = 'block';

//         // ===================== userlogo end ========================


//         // ===================== adminlogo start =====================

//         let adminlogo = document.getElementById('adminlogo');
//         adminlogo.innerHTML = 'Admin';

//         // ===================== adminlogo end =====================


//         // ===================== heading5 start =====================

//         let heading5 = document.getElementById('heading5');
//         heading5.style.display = 'block';

//         // ===================== heading5 start =====================


//         let adminKeyWrapper = document.getElementById('adminKeyWrapper');
//         adminKeyWrapper.classList.remove('hidden');

//         document.body.classList.add('height');

//         updateKey.addEventListener('click', (e) => {
//             e.preventDefault();

//             keyset = document.getElementById('editKey').value;
//             alert(`Key updated successfully!, New key is ${keyset}`);
//             keyShow.innerHTML = `key : ${keyset}`;
//             sessionStorage.setItem('keyset', JSON.stringify(keyset));
//         });

//         // ================= addCourses start ====================

//         let course_wrapper = document.getElementById('course_wrapper');

//         let addCourses = document.getElementById('addCourses');
//         addCourses.style.visibility = 'visible';

//         addCourses.addEventListener('click', (e) => {
//             e.preventDefault();

//             let courseTitle = prompt('Enter course title');

//             let addCoursesDiv = document.createElement('div');

//             let addCoursesDivH2 = document.createElement('h2');
//             let addCoursesDivH2Text = document.createTextNode(courseTitle);

//             addCoursesDivH2.appendChild(addCoursesDivH2Text);
//             addCoursesDiv.appendChild(addCoursesDivH2);
//             course_wrapper.appendChild(addCoursesDiv);

//             let addCoursesBtn = document.createElement('button');
//             let addCoursesBtnText = document.createTextNode('Join');

//             addCoursesBtn.appendChild(addCoursesBtnText);
//             addCoursesBtn.classList.add('btn1');
//             addCoursesDiv.appendChild(addCoursesBtn);

//             addCoursesDiv.classList.add('course');
//             addCoursesDiv.classList.add('opacity');

//         });

//         let activateCourse = document.getElementById('activateCourse');
//         activateCourse.style.visibility = 'visible';

//         // ================= addCourses end ====================

//     }
//     else {
//         userArray.push(newUser);
//         sessionStorage.setItem('userArray', JSON.stringify(userArray));
        
//         signupForm.classList.add('hidden');
//         key_wrapper.style.display = 'block';
//         heading2.style.display = 'block';

//         let userlogo = document.getElementById('userlogo');
//         userlogo.style.display = 'block';
//     }
// });

// ============================================================================







// ============================================================================


// keysubmit.addEventListener('click', (e) => {
//     e.preventDefault();

//     inputkey = document.getElementById('inputkey').value;

//     if(inputkey === (JSON.parse(sessionStorage.getItem('keyset')) || keyset)) {
//         heading1.style.display = 'block';
//         // heading2.style.display = 'none';
//         heading2.style.display = 'none';
//         key_wrapper.style.display = 'none';
//         userinfo_wrapper.style.display = 'block';
//     }
//     else {
//         warning2.innerHTML = 'Wrong key';
//     }
// });


// ============================================================================







// ============================================================================


// enteruserdetails.addEventListener('click', (e) => {
//     e.preventDefault();

//     user.name = document.getElementById('name').value
//     user.rollno = document.getElementById('rollno').value;

//     // console.log(user.rollno);
//     // console.log(user.rollno.length);

//     if(user.name.trim() === '' || user.rollno.length <= 3) {
//         warning3.innerHTML = 'input field is not valid';
//     }
//     else {
//         sessionStorage.setItem('user', JSON.stringify(user));

//         userinfo_wrapper.style.display = 'none';
//         heading1.style.display = 'none';
//         heading3.style.display = 'block';
//         heading2.style.display = 'block';


//         quizinfo_wrapper.style.display = 'block';

//         let namefirstletter = user.name[0].toUpperCase();
//         let nameremainingletters = user.name.slice(1).toLowerCase();

//         heading3.innerHTML = `Hi, ${namefirstletter + nameremainingletters}`;
//     }
// });


// ===========================================================================








// ===========================================================================


// let course_wrapper = document.getElementById('course_wrapper');

// console.log(course_wrapper);

// javascript.addEventListener('click', (e) => {
//     e.preventDefault();

//     quizinfo_wrapper.style.display = 'none';
//     quizguide_wrapper.style.display = 'block';
// })


// =============================================================================








// ============================================================================

const start = document.getElementById('start');
let questions_wrapper = document.getElementById('questions_wrapper');

let quizQuestions = [
    "1. Inside which HTML element do we put the JavaScript?",
    "2. What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    "3. Where is the correct place to insert a JavaScript?",
    "4. What is the correct syntax for referring to an external script called 'xxx.js'?'",
    "5. The external JavaScript file must contain the &lt;script&gt; tag.",
    "6. How do you write 'Hello World' in an alert box?",
    "7. How do you create a function in JavaScript?",
    "8. How do you call a function named 'myFunction'?",
    "9. How to write an IF statement in JavaScript?",
    "10. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    "11. How does a WHILE loop start?",
    "12. How does a FOR loop start?",
    "13. How can you add a comment in a JavaScript?",
    "14. How to insert a comment that has more than one line?",
    "15. What is the correct way to write a JavaScript array?",
    "16. How do you round the number 7.25, to the nearest integer?",
    "17. How do you find the number with the highest value of x and y?",
    "18. What is the correct JavaScript syntax for opening a new window called 'w2' ?",
    "19. JavaScript is the same as Java.",
    "20. How can you detect the client's browser name?",
    "21. Which event occurs when the user clicks on an HTML element?",
    "22. How do you declare a JavaScript variable?",
    "23. Which operator is used to assign a value to a variable?",
    "24. What will the following code return: Boolean(10 > 9)",
    "25. Is JavaScript case-sensitive?"
];


let options = [{
    a: '&lt;scripting&gt;',
    b: '&lt;js&gt;',
    c: '&lt;script&gt;',
    d: '&lt;javascript&gt;'
},
{
    a: 'document.getElementByName("p").innerHTML = "Hello World!"',
    b: 'document.getElementById("p").innerHTML = "Hello World!"',
    c: 'document.getElement("p").innerHTML = "Hello World!"',
    d: '#demo.innerHTML = "Hello World!"'
},
{
    a: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct',
    b: 'The &lt;head&gt; section',
    c: 'The &lt;body&gt; section'
},
{
    a: '&lt;script href="xxx.js"&gt;',
    b: '&lt;script src="xxx.js"&gt;',
    c: '&lt;script name="xxx.js"&gt;'
},
{
    a: 'true',
    b: 'False'
},
{
    a: 'msgBox("Hello World");',
    b: 'msg("Hello World");',
    c: 'alertBox("Hello World");',
    d: 'alert("Hello World");'
},
{
    a: 'function myFunction()',
    b: 'function = myFunction()',
    c: 'function:myFunction()'
},
{
    a: 'myFunction()',
    b: 'call function myFunction()',
    c: 'call myFunction()'
},
{
    a: 'if i = 5 then',
    b: 'if i == 5 then',
    c: 'if i = 5',
    d: 'if(i == 5)'
},
{
    a: 'if i != 5 then',
    b: 'if <> 5',
    c: 'if(i != 5)',
    d: 'if (i <> 5)'
},
{
    a: 'while (i &lt;= 10; i++)',
    b: 'while (i &lt;= 10)',
    c: 'while i = 1 to 10'
},
{
    a: 'for(i = 0; i <= 5)',
    b: 'for i = 1 to 5',
    c: 'for(i <= 5; i++)',
    d: 'for(i = 0; i &lt;= 5; i++)'
},
{
    a: '`This is a comment',
    b: '&lt;!-- This is a comment --&gt;',
    c: '//This is a comment'
},
{
    a: '/* This comment has more than one line */',
    b: '&lt;!-- This comment has more than one line --&gt;',
    c: '// This comment has more than one line'
},
{
    a: 'var colors = [1:"red", 2:"green", 3: "blue"]',
    b: 'var colors = ["red","green","blue"]',
    c: 'var colors = "red","green","blue"',
    d: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
},
{
    a: 'round(7.25)',
    b: 'Math.round(7.25)',
    c: 'rnd(7.25)',
    d: 'Math.rnd(7.25)',
},
{
    a: 'top(x,y)',
    b: 'ceil(x,y)',
    c: 'Math.max(x,y)',
    d: 'Math.ceil(x,y)'
},
{
    a: 'w2 = window.new("http://www.w3schools.com")',
    b: 'w2 = window.open("http://www.w3schools.com")'
},
{
    a: 'False',
    b: 'Ture'
},
{
    a: 'browser.name',
    b: 'navigator.appName',
    c: 'client.navName'
},
{
    a: 'onchange',
    b: 'onclick',
    c: 'onmouseover',
    d: 'onmouseclick',
},
{
    a: 'v carName;',
    b: 'var carName;',
    c: 'variable carName;'
},
{
    a: '-',
    b: '=',
    c: 'x',
    d: '*'
},
{
    a: 'true',
    b: 'false',
    c: 'NaN'
},
{
    a: 'No',
    b: 'Yes'
}];


let correctOptions = [
    '&lt;script&gt;', 'document.getElementById("p").innerHTML = "Hello World!"', 
    'Both the &lt;head&gt; section and the &lt;body&gt; section are correct', 
    '&lt;script src="xxx.js"&gt;', 'False', 'alert("Hello World");', 
    'function myFunction()', 'myFunction()', 'if(i == 5)', 'if(i != 5)', 
    'while (i &lt;= 10)', 'for(i = 0; i &lt;= 5; i++)', '//This is a comment', 
    '/* This comment has more than one line */', 
    'var colors = ["red","green","blue"]', 'Math.round(7.25)', 'Math.max(x,y)', 
    'w2 = window.open("http://www.w3schools.com")', 'False', 'navigator.appName',
    'onclick', 'var carName;', '=', 'true', 'Yes'
];

// ==============================================================================



let count = 0;

let questionDiv = document.createElement('div');
questionDiv.classList.add('questions');
questionDiv.innerHTML = quizQuestions[count];
questions_wrapper.appendChild(questionDiv);

let nextBtn = document.getElementById('next');
nextBtn.setAttribute('disabled', true);
nextBtn.classList.add('opacity');

let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');


document.getElementById('option1').attributes.value = options[0].a;
document.getElementById('option2').attributes.value = options[0].b;
document.getElementById('option3').attributes.value = options[0].c;
document.getElementById('option4').attributes.value = options[0].d;

document.getElementById('option1Show').innerHTML = options[0].a;
document.getElementById('option2Show').innerHTML = options[0].b;
document.getElementById('option3Show').innerHTML = options[0].c;
document.getElementById('option4Show').innerHTML = options[0].d;


let marquee = document.getElementById('marquee');

let quizresultdashboard_wrapper = document.getElementById('quizresultdashboard_wrapper');

let score = 0;
let count2 = 0;
let correctAnswerShow = document.getElementById('correctAnswer');
let resultshow = document.getElementById('resultshow');
let percentageDiv = document.getElementById('percentage');
let percentage = 0;

// Add active class to the current button (highlight it)
let options_wrapper = document.getElementById("options_wrapper");
let optionsPic = options_wrapper.getElementsByClassName("options");
let quizdashboard_wrapper = document.getElementById('quizdashboard_wrapper');




// ===========================================================================


// start.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     quizguide_wrapper.style.display = 'none';
//     marquee.style.display = 'none';
//     quizdashboard_wrapper.style.display = 'block';

//     let minutes = 19;
//     let seconds = 59;

//     let x = setInterval(function() {
//         seconds--;

//         if(seconds === -1) {
//             minutes--;
//             seconds = 59;
//         }

//         if(minutes === 0 && seconds === 0) {
//             quizdashboard_wrapper.style.display = 'none';
//             quizresultdashboard_wrapper.style.display = 'block';
//         }

//         document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
//     }, 1000);
// });

// ===========================================================================







// ============================================================================

let currentOption;


// for (let i = 0; i < optionsPic.length; i++) {
//     optionsPic[i].addEventListener("click", function() {

//         nextBtn.removeAttribute('disabled', true);
//         nextBtn.classList.remove('opacity');

//         currentOption = optionsPic[i].innerHTML;

//         correctAnswerShow.innerHTML = score;

//         percentage = (score / 25) * 100;
//         percentageDiv.innerHTML = percentage + '%';

//         if(percentage > 70) {
//             resultshow.innerHTML = `Congratulations ${user.name}, you passed`;
//             resultshow.style.color = 'rgb(24, 56, 83)';
//         }
//         else {
//             resultshow.innerHTML = 'Sorry you failed';
//             resultshow.style.color = 'red';
//         }
//     });
// }

percentageDiv.innerHTML = percentage + '%';

// =============================================================================







// =============================================================================

// nextBtn.addEventListener('click', function(e) {
//     e.preventDefault();

//     option1.checked = false;
//     option2.checked = false;
//     option3.checked = false;
//     option4.checked = false;

//     nextBtn.setAttribute('disabled', true);
//     nextBtn.classList.add('opacity');

//     if(currentOption === correctOptions[count2]) {
//         score++;  
//         // console.log(score);          
//     }
//     else {
//         console.log('wrong answer!');
//     }
//     count2++;


//     if(count > 23) {
//         quizdashboard_wrapper.style.display = 'none';
//         quizresultdashboard_wrapper.style.display = 'block';
//         heading3.style.display = 'none';

//         marquee.style.display = 'block';
//     }
//     else {
//         questionDiv.innerHTML = quizQuestions[++count];
//         questions_wrapper.appendChild(questionDiv);

//         option1Show.innerHTML = options[count].a;
//         option2Show.innerHTML = options[count].b;
//         option3Show.innerHTML = options[count].c;
//         option4Show.innerHTML = options[count].d;
//     }
// });

// =============================================================================









// ============================================================================


// backToHome.addEventListener('click', (e) => {
//     e.preventDefault();

//     heading2.style.display = 'none';

//     quizresultdashboard_wrapper.style.display = 'none';
//     signupForm.classList.remove('hidden');
// })

// console.log(count, '<= count', questionDiv, '<= questionDiv', nextBtn, '<= nextBtn', "Before click next!");
