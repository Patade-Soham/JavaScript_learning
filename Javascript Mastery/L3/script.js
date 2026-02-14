// const quizData = [
//     {
//         question: "Which language is used to style web pages?",
//         options: ["HTML", "JQuery", "CSS", "XML"],
//         answer: "CSS"
//     },
//     {
//         question: "Which language is used for web app logic?",
//         options: ["Python", "JavaScript", "C++", "Java"],
//         answer: "JavaScript"
//     },
//     {
//         question: "Inside which HTML tag do we put JavaScript?",
//         options: ["<js>", "<script>", "<javascript>", "<code>"],
//         answer: "<script>"
//     },
//     {
//         question: "Which company developed JavaScript?",
//         options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
//         answer: "Netscape"
//     },
//     {
//         question: "What does CSS stand for?",
//         options: [
//             "Computer Style Sheets",
//             "Creative Style System",
//             "Cascading Style Sheets",
//             "Colorful Style Sheets"
//         ],
//         answer: "Cascading Style Sheets"
//     },
//     {
//         question: "Which method is used to select an element by ID in JavaScript?",
//         options: [
//             "getElementByClass()",
//             "getElementById()",
//             "querySelectorAll()",
//             "getElementsByTagName()"
//         ],
//         answer: "getElementById()"
//     },
//     {
//         question: "Which symbol is used for comments in JavaScript?",
//         options: ["//", "/* */", "#", "<!-- -->"],
//         answer: "//"
//     },
//     {
//         question: "Which HTML attribute is used to define inline styles?",
//         options: ["class", "font", "styles", "style"],
//         answer: "style"
//     }
// ];

// let a = document.getElementById('A');
// let b = document.getElementById('B');
// let c = document.getElementById('C');
// let d = document.getElementById('D');

// let opt1 = document.getElementById('opt1');
// let opt2 = document.getElementById('opt2');
// let opt3 = document.getElementById('opt3');
// let opt4 = document.getElementById('opt4');

// let question = document.getElementById('que');
// let question_no = 0;
// let wrongAnsArr=[]
// let score=0;
// function questionDetails(q) {

//     a.textContent = `${quizData[q].options[0]}`;
//     b.textContent = `${quizData[q].options[1]}`;
//     c.textContent = `${quizData[q].options[2]}`;
//     d.textContent = `${quizData[q].options[3]}`;
//     question.textContent = `${quizData[q].question}`;

// }
// function uncheck(){
//     document.getElementById('opt1').checked=false;
//     document.getElementById('opt2').checked=false;
//     document.getElementById('opt3').checked=false;
//     document.getElementById('opt4').checked=false;
// }
// // function checkResults(){
// //     // show score 
// //     document.getElementById('finalSheet').innerHTML=`Your score is ${score}` 
// //     // give btns to check answers to wrong question 
// //     let btnStr=`    <div class="checkResultsBtn">
// //         <button class="button">Check Results</button>
// //     </div>`
// //     let checkResultsBtn=document.createElement('div')
// //     checkResultsBtn.innerHTML=btnStr
// //     document.getElementById('finalSheet').appendChild(checkResultsBtn)
// //     //btn onclick show solution

// // }
// function checkResults(){
//     // show score 
//     document.getElementById('main').innerHTML=`Your score is ${score}` 
//     // give btns to check answers to wrong question 
//     let btnStr=`    <div class="checkResultsBtn">
//         <button class="button">Check Results</button>
//     </div>`
//     let checkResultsBtn=document.createElement('div')
//     checkResultsBtn.innerHTML=btnStr
//     document.getElementById('main').appendChild(checkResultsBtn)
//     //btn onclick show solution
//     document.getElementById('main').addEventListener('click',(event)=>{
//         if(event.target.closest('.button')){
//             for(let i =0;i<wrongAnsArr.length;i++){
//                 let node=document.createElement("div").innerHTML=wrongAnsArr[i]
//                 document.getElementById('main').appendChild(node)
//             }

//         }
//     })

// }
// function appendWrongAns(opt){
    
//     let wrongQue=`${document.getElementById('finalSheet').innerHTML}`
//     let correctAns=`<br><p>${quizData[question_no].answer}</p>`
//     let appendBlock=`<div class="solution">${wrongQue+correctAns}</div>`
//     wrongAnsArr.push(appendBlock);
    
// }
// questionDetails(question_no);

// const nextbtn = document.getElementById('btn');

// nextbtn.addEventListener('click', () => {
//     if (question_no === quizData.length - 1) {
//         alert("Quiz Completed!");
//         checkResults()
//         return;
//     } else {
//         if(opt1.checked) {
//             if(a.textContent === quizData[question_no].answer){
//                 score++;
//                 alert("Correct Answer!");
//             } else {
//                 alert("Incorrect Answer!");
//                 appendWrongAns(opt1)
//             }

//         } else if(opt2.checked) {
//             if(b.textContent === quizData[question_no].answer){
//                 score++;
//                 alert("Correct Answer!");
//             } else {
//                 alert("Incorrect Answer!");
//                 appendWrongAns(opt2)
//             }

//         } else if(opt3.checked) {
//             if(c.textContent === quizData[question_no].answer){
//                 score++;
//                 alert("Correct Answer!");
//             } else {
//                 alert("Incorrect Answer!");
//                 appendWrongAns(opt3)
//             }

//         } else if(opt4.checked) {
//             if(d.textContent === quizData[question_no].answer){
//                 score++;
//                 alert("Correct Answer!");
//             } else {
//                 alert("Incorrect Answer!");
//                 appendWrongAns(opt4)
//             }

//         } else {
//             alert("Please select an option!");
//         }

//     }     
//     question_no++;
//     questionDetails(question_no);
//     uncheck()
    
// });
//>>>>>>>>>>>>>>Final AND Refined Code<<<<<<<<<<<<<<<

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
let wrongAnsArr = [];
let score = 0;

function questionDetails(q) {

    a.textContent = `${quizData[q].options[0]}`;
    b.textContent = `${quizData[q].options[1]}`;
    c.textContent = `${quizData[q].options[2]}`;
    d.textContent = `${quizData[q].options[3]}`;

    question.textContent = `${quizData[q].question}`;

}

function uncheck(){

    document.getElementById('opt1').checked = false;
    document.getElementById('opt2').checked = false;
    document.getElementById('opt3').checked = false;
    document.getElementById('opt4').checked = false;

}

function checkResults(){

    document.getElementById('main').innerHTML = `Your score is ${score}`;

    let btnStr = `
        <div class="checkResultsBtn">
            <button class="button">Check Results</button>
        </div>
    `;

    let checkResultsBtn = document.createElement('div');
    checkResultsBtn.innerHTML = btnStr;

    document.getElementById('main').appendChild(checkResultsBtn);

    document.querySelector('.button').addEventListener('click', () => {
        document.getElementById('main').innerHTML=''

        for(let i = 0 ; i < wrongAnsArr.length ; i++){

            let node = document.createElement("div");
            node.innerHTML = wrongAnsArr[i];

            document.getElementById('main').appendChild(node);

        }

    });

}

function appendWrongAns(selectedText){

    let wrongQue = `${quizData[question_no].question}`;
    let correctAns = `<br><p>${quizData[question_no].answer}</p>`;

    let appendBlock = `
        <div class="solution">
            <p>${wrongQue}</p>
            <p id='sel'>Your Answer : ${selectedText}</p>
            <p id='correct'>Correct Answer : ${quizData[question_no].answer}</p>
        </div>
    `;

    wrongAnsArr.push(appendBlock);

}

questionDetails(question_no);

const nextbtn = document.getElementById('btn');

nextbtn.addEventListener('click', () => {

    if(question_no === quizData.length){

        return;

    }else{

        if(opt1.checked){

            if(a.textContent === quizData[question_no].answer){

                score++;

            }else{

                appendWrongAns(a.textContent);

            }

        }else if(opt2.checked){

            if(b.textContent === quizData[question_no].answer){

                score++;

            }else{

                appendWrongAns(b.textContent);

            }

        }else if(opt3.checked){

            if(c.textContent === quizData[question_no].answer){

                score++;

            }else{

                appendWrongAns(c.textContent);

            }

        }else if(opt4.checked){

            if(d.textContent === quizData[question_no].answer){

                score++;

            }else{

                appendWrongAns(d.textContent);

            }

        }else{

            return;

        }

    }

    if(question_no === quizData.length - 1){

        checkResults();
        return;

    }

    question_no++;

    questionDetails(question_no);

    uncheck();

});
