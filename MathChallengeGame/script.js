
let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById('question').innerText = `What is ${num1} + ${num2}?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('result').innerText = '✅ Correct!';
    } else {
        document.getElementById('result').innerText = `❌ Wrong! The correct answer was ${correctAnswer}`;
    }
    document.getElementById('score').innerText = score;
    setTimeout(generateQuestion, 1000);
}

generateQuestion();
