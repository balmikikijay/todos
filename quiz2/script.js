const api = [
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Computer Style System",
    c: "Creative Styling Syntax",
    d: "Colorful Style Sheets",
    correct: "a"
  },
  {
    question: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Tool Markup Language",
    correct: "c"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "static",
    correct: "c"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'app.js'?",
    a: "<script src='app.js'>",
    b: "<script href='app.js'>",
    c: "<script link='app.js'>",
    d: "<script name='app.js'>",
    correct: "a"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    a: "Boolean",
    b: "Undefined",
    c: "Float",
    d: "Number",
    correct: "c"
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Method",
    c: "Document Order Model",
    d: "Digital Object Method",
    correct: "a"
  },
  {
    question: "Which method is used to select an element by ID?",
    a: "document.selectById()",
    b: "document.getElementById()",
    c: "document.queryId()",
    d: "document.getById()",
    correct: "b"
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    a: "null",
    b: "undefined",
    c: "object",
    d: "string",
    correct: "c"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "//",
    b: "/* */",
    c: "#",
    d: "<!-- -->",
    correct: "a"
  },
  {
    question: "What is the output of `Boolean(0)`?",
    a: "true",
    b: "false",
    c: "0",
    d: "undefined",
    correct: "b"
  }
];


const question = document.getElementById('question')
const quiz = document.getElementById('quiz')
const quizheader = document.querySelector('.quiz-header')
const answerEl = document.querySelectorAll('.answer')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz= 0;
let score = 0;


function swapQuestion (){
    const currentQuizData = api[currentQuiz]
    question.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
} 

function deselectAnswer (){
    answerEl.forEach(answer => answer.checked = false)
}

function selctedanswer (){
    let newanswer ;
    answerEl.forEach(ans=>{
      if(ans.checked){
        newanswer = answerEl.id
      }
    })
    return newanswer

}

submit.addEventListener('click',()=>{
    const newanswer = selctedanswer()

     if(newanswer){
      if(newanswer === api[currentQuiz].correct){
        score++
      }
     }  
     currentQuiz++
     if(currentQuiz<api.length){
      swapQuestion()
     }else{
      quiz.innerHTML = ` ${score} / ${currentQuiz}`
     }
})