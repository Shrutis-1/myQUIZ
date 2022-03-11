const quizdb = [
    {
        question: "Q1: What is the full form of HTML",
        a: "hallo to my land",
        b: "hey text markup language",
        c: "hypertext markup language",
        d: "hyper markup language",
        ans: "ans3"
    },

    {
        question: "Q2: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },

    {
        question: "Q3: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if ",
        ans: "ans4"
    },

    {
        question: "Q4: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans3"
    }
];

const questions = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showscore');

var questionCount = 0;
var score = 0;

function loadQuestion() {

    const questionList = quizdb[questionCount];

    questions.innerText = questionList.question;

    option1.innerText =  questionList.a;
    option2.innerText =  questionList.b;
    option3.innerText =  questionList.c;
    option4.innerText =  questionList.d;

}

loadQuestion();

function getCheckedAnswer() {

    var Answer;

    answers.forEach((curAnsEle) =>{

        if(curAnsEle.checked){

            Answer = curAnsEle.id;
        }
    })

    return Answer;
};

function deSellectAll() {

    answers.forEach((curAnsEle) => curAnsEle.checked = false );

};

submit.addEventListener('click',() => {

    const checkAnswer = getCheckedAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizdb[questionCount].ans ){

        score++;

    };

    questionCount++; 
    
    deSellectAll();

    if(questionCount < quizdb.length){

        loadQuestion();

    }else{

        showScore.innerHTML = `

        <h3> your score ${score}/${quizdb.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scorearea');
    }
});

