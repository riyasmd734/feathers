// Your quiz questions (edit them if you want)
const questions = [
    {
        question: "How many outlet in our hotel",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "how many floors in our hotel",
        options: ["8", "9", "10", "11"],
        answer: "10"
    },
    {
        question: "Which hall is big in our hotel",
        options: ["tulip", "carnition", "skyloft",],
        answer: "carnition"
    }
];

let index = 0;
let score = 0;

// Load question
function loadQuestion() {
    if (index >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[index];
    document.getElementById("question").innerText = q.question;
    
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    index++;
    loadQuestion();
}

function endQuiz() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("score-box").classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    index = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("score-box").classList.add("hidden");
    loadQuestion();
}

loadQuestion();
