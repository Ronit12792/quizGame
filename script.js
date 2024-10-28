const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Great White Shark', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: 'Which element has the chemical symbol O?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Oxygen', correct: true },
            { text: 'Silver', correct: false },
            { text: 'Iron', correct: false }
        ]
    },
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Beijing', correct: false },
            { text: 'Seoul', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Bangkok', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.querySelector('#question').innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    // Highlight the selected answer
    const selectedButton = Array.from(answerButtons.children).find(button => button.innerText === answer.text);
    
    // Add correct or incorrect class to the selected button
    selectedButton.classList.add(correct ? 'correct' : 'incorrect');

    // If the answer is correct, increase the score
    if (correct) {
        score++;
    }

    // Disable all buttons after an answer is selected
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;  // Disable all buttons
    });
    
    nextButton.style.display = 'block';
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreDisplay.innerText = score;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

startGame();
