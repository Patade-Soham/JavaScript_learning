const quizData = [
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which language is used for web app logic?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Inside which HTML tag do we put JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
        answer: "Netscape"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelectorAll()",
            "getElementsByTagName()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "font", "styles", "style"],
        answer: "style"
    }
];

let a = document.getElementById('A');
let b = document.getElementById('B');
let c = document.getElementById('C');
let d = document.getElementById('D');

let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

let question = document.getElementById('que');
let question_no = 0;

function questionDetails(q) {

    a.textContent = `${quizData[q].options[0]}`;
    b.textContent = `${quizData[q].options[1]}`;
    c.textContent = `${quizData[q].options[2]}`;
    d.textContent = `${quizData[q].options[3]}`;
    question.textContent = `${quizData[q].question}`;

}

questionDetails(question_no);

const nextbtn = document.getElementById('btn');

nextbtn.addEventListener('click', () => {
    if (question_no === quizData.length - 1) {
        alert("Quiz Completed!");
        return;
    } else {
        if(opt1.checked && a.textContent === quizData[question_no].answer) {
            alert("Correct Answer!");
        } else if(opt2.checked && b.textContent === quizData[question_no].answer) {    
            alert("Correct Answer!");
        } else if(opt3.checked && c.textContent === quizData[question_no].answer) {    
            alert("Correct Answer!");
        } else if(opt4.checked && d.textContent === quizData[question_no].answer) {    
            alert("Correct Answer!");
        } else {
            alert("Incorrect Answer!");
        }
    }     
    question_no++;
    questionDetails(question_no);
});
