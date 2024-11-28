const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        ${currentQuizData.options.map(option => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];

    if (userAnswer === currentQuizData.correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${currentQuizData.correctAnswer}`);
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        resetQuiz();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    loadQuestion();
}

// Load the first question when the page loads
window.onload = loadQuestion;
