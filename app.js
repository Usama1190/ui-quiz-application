const main_con = {
    app_theme: document.getElementById('app_theme'),
    login_signup_form: document.getElementById('login_signup_form'),
    home_content_wrapper: document.getElementById('home_content_wrapper'),
    home_section: document.getElementById('home_section'),
    ls_btns_wrapper: document.getElementById('ls_btns_wrapper'),
    app_navbar: document.getElementById('app_navbar'),
    footer: document.getElementById('footer'),
    dashboard_section: document.getElementById('dashboard_section'),
    logout_wrapper: document.getElementById('logout_wrapper'),
}

const main_con_btns = {
    goto_signup_form: document.getElementById('goto_signup_form'),
    goto_login_form: document.getElementById('goto_login_form'),
    startexam_btn: document.getElementById('startexam_btn'),
    getresult_btn: document.getElementById('getresult_btn'),
    user_logout_btn: document.getElementById('user_logout_btn'),
}

const main_con_form = {
    user_email: document.getElementById('user_email'),
    user_password: document.getElementById('user_password'),
    remember_forget_wrapper: document.getElementById('remember_forget_wrapper'),
    forgot_password: document.getElementById('forgot_password'),
    user_confirmpass_wrapper: document.getElementById('user_confirmpass_wrapper'),
    user_confirmpass: document.getElementById('user_confirmpass'),
    signup_btn: document.getElementById('signup_btn'),
    login_btn: document.getElementById('login_btn'),
    another_way_signup_login: document.getElementById('another_way_signup_login'),
    another_way_signup_login_anchor_text: document.getElementById('another_way_signup_login_anchor_text'),
    close_sign_or_login: document.getElementById('close_sign_or_login'),
    warning: document.getElementById('warning'),
}

let theme_sun = true

const student_dashboard = {
    dashboard_header_content: document.getElementById('dashboard_header_content'),
    add_course_form_wrapper: document.getElementById('add_course_form_wrapper'),
    close_add_course_wrapper: document.getElementById('close_add_course_wrapper'),
    courses_wrapper: document.getElementById('courses_wrapper'),
    key_wrapper: document.getElementById('key_wrapper'),
    quizguide_wrapper: document.getElementById('quizguide_wrapper'),
    quizdashboard_wrapper: document.getElementById('quizdashboard_wrapper'),
    quiz_result_wrapper: document.getElementById('quiz_result_wrapper'),
}

const student_dashboard_btns = {
    add_course_btn: document.getElementById('add_course_btn'),
    close_add_course_btn: document.getElementById('close_add_course_btn'),
    join_typescript_btn: document.getElementById('join_typescript_btn'),
    key_submit_btn: document.getElementById('key_submit_btn'),
    start_quiz_btn: document.getElementById('start_quiz_btn'),
}

const add_course_form = {
    course_title: document.getElementById('course_title'),
    number_of_subjects: document.getElementById('number_of_subjects'),
    create_course_btn: document.getElementById('create_course_btn'),
}


const about_quiz = {
    questions_wrapper: document.getElementById('questions_wrapper'),
    user_input_key: document.getElementById('user_input_key'),
    warning_for_key: document.getElementById('warning_for_key'),
}

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

let count = 0;
const key = 'js01';

let questionDiv = document.createElement('div');
questionDiv.classList.add('questions');
questionDiv.innerHTML = quizQuestions[count];
about_quiz.questions_wrapper.appendChild(questionDiv);

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







// ========================== Functionalities ===============================

const signup_content = () => {
    main_con_form.signup_btn.classList.remove('d_none');
    main_con_form.login_btn.classList.add('d_none');
    main_con_form.another_way_signup_login_anchor_text.innerText = 'Login';
    main_con_form.another_way_signup_login.innerHTML = `Already have an account please <a href='#login' onclick='login_content()'>Login</a>`;
    main_con_form.user_confirmpass_wrapper.classList.remove('d_none');
    main_con_form.remember_forget_wrapper.classList.add('d_none');
    common_login_signup();
}

const login_content = () => {
    main_con_form.signup_btn.classList.add('d_none');
    main_con_form.login_btn.classList.remove('d_none');
    main_con_form.another_way_signup_login_anchor_text.innerText = 'Sign up';
    main_con_form.another_way_signup_login.innerHTML = `Don't have an account please <a href='#signup' onclick='signup_content()'>Sign up</a>`;
    main_con_form.remember_forget_wrapper.classList.remove('d_none');
    main_con_form.user_confirmpass_wrapper.classList.add('d_none');
    common_login_signup();
}

const common_login_signup = () => {
    main_con.home_section.classList.add('d_none');
    main_con.login_signup_form.classList.remove('d_none');
    main_con.app_navbar.classList.add('d_none');
    main_con.footer.classList.add('d_none');
}

main_con_form.close_sign_or_login.addEventListener('click', () => {
    main_con.login_signup_form.classList.add('d_none');
    main_con.home_section.classList.remove('d_none');
    main_con.app_navbar.classList.remove('d_none');
    main_con.footer.classList.remove('d_none');
})

main_con_btns.goto_signup_form.addEventListener('click', signup_content);
main_con_btns.goto_login_form.addEventListener('click', login_content);
main_con_btns.startexam_btn.addEventListener('click', signup_content);
main_con_btns.getresult_btn.addEventListener('click', login_content);


main_con.app_theme.addEventListener('click', () => {
    if(theme_sun == false) {
        main_con.app_theme.classList.remove('fa-sun-o');
        main_con.app_theme.classList.add('fa-moon-o');
        document.body.classList.remove('light_theme');
        document.body.classList.add('dark_theme');
        theme_sun = true;
    }
    else if(theme_sun == true) {
        main_con.app_theme.classList.add('fa-sun-o');
        main_con.app_theme.classList.remove('fa-moon-o');
        document.body.classList.add('light_theme');
        document.body.classList.remove('dark_theme');
        theme_sun = false;
    }
});

/*
student_dashboard_btns.add_course_btn.addEventListener('click', () => {
    student_dashboard_btns.add_course_btn.classList.add('d_none');
    student_dashboard.add_course_form_wrapper.classList.remove('d_none');
    student_dashboard.courses_wrapper.classList.add('d_none');
});


student_dashboard_btns.close_add_course_btn.addEventListener('click', () => {
    student_dashboard_btns.add_course_btn.classList.remove('d_none');
    student_dashboard.add_course_form_wrapper.classList.add('d_none');
    student_dashboard.courses_wrapper.classList.remove('d_none');
});


add_course_form.create_course_btn.addEventListener('click', () => {
    // student_dashboard.courses_wrapper = document.createElement('div');
})
*/

student_dashboard_btns.join_typescript_btn.addEventListener('click', () => {
    student_dashboard.dashboard_header_content.classList.add('d_none');
    student_dashboard.courses_wrapper.classList.add('d_none');
    student_dashboard.key_wrapper.classList.remove('d_none');
});


student_dashboard_btns.key_submit_btn.addEventListener('click', () => {
    // if(about_quiz.user_input_key.value === key) {
        student_dashboard.key_wrapper.classList.add('d_none');
        student_dashboard.quizguide_wrapper.classList.remove('d_none');
    // }
    // else {
        about_quiz.warning_for_key.innerText = 'Invalid key!';
    // }
});


student_dashboard_btns.start_quiz_btn.addEventListener('click', () => {
    student_dashboard.quizguide_wrapper.classList.add('d_none');
    student_dashboard.quizdashboard_wrapper.classList.remove('d_none');
    main_con.app_navbar.classList.add('d_none');


    quizguide_wrapper.style.display = 'none';
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

    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;

    nextBtn.setAttribute('disabled', true);
    nextBtn.classList.add('opacity');

    if(currentOption === correctOptions[count2]) {
        score++;  
        // console.log(score);          
    }
    else {
        // console.log('wrong answer!');
    }
    count2++;


    if(count > 23) {
        student_dashboard.quizdashboard_wrapper.classList.add('d_none');
        student_dashboard.quiz_result_wrapper.classList.remove('d_none');
    }
    else {
        questionDiv.innerHTML = quizQuestions[++count];
        about_quiz.questions_wrapper.appendChild(questionDiv);

        option1Show.innerHTML = options[count].a;
        option2Show.innerHTML = options[count].b;
        option3Show.innerHTML = options[count].c;
        option4Show.innerHTML = options[count].d;
    }
});







/*
let course_wrapper = document.getElementById('course_wrapper');

let addCourses = document.getElementById('addCourses');
addCourses.style.visibility = 'visible';

addCourses.addEventListener('click', (e) => {
    e.preventDefault();

    let courseTitle = prompt('Enter course title');

    let addCoursesDiv = document.createElement('div');

    let addCoursesDivH2 = document.createElement('h2');
    let addCoursesDivH2Text = document.createTextNode(courseTitle);

    addCoursesDivH2.appendChild(addCoursesDivH2Text);
    addCoursesDiv.appendChild(addCoursesDivH2);
    course_wrapper.appendChild(addCoursesDiv);

    let addCoursesBtn = document.createElement('button');
    let addCoursesBtnText = document.createTextNode('Join');

    addCoursesBtn.appendChild(addCoursesBtnText);
    addCoursesBtn.classList.add('btn1');
    addCoursesDiv.appendChild(addCoursesBtn);

    addCoursesDiv.classList.add('course');
    addCoursesDiv.classList.add('opacity');

});

let activateCourse = document.getElementById('activateCourse');
activateCourse.style.visibility = 'visible';
*/


let currentOption;


for (let i = 0; i < optionsPic.length; i++) {
    optionsPic[i].addEventListener("click", function() {

        nextBtn.removeAttribute('disabled', true);
        nextBtn.classList.remove('opacity');

        currentOption = optionsPic[i].innerHTML;

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

percentageDiv.innerHTML = percentage + '%';


backToHome.addEventListener('click', (e) => {
    e.preventDefault();

    heading2.style.display = 'none';

    quizresultdashboard_wrapper.style.display = 'none';
    signupForm.classList.remove('hidden');
})

// console.log(count, '<= count', questionDiv, '<= questionDiv', nextBtn, '<= nextBtn', "Before click next!");
