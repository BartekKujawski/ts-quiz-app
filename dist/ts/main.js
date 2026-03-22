import { quizQuestions } from './questions.js';
let currentQuestionIndex = 0;
let score = 0;
let maxScore = 0;
for (let i = 0; i < quizQuestions.length; i++) {
    switch (quizQuestions[i].difficulty) {
        case 'easy':
            maxScore += 1;
            break;
        case 'medium':
            maxScore += 2;
            break;
        case 'hard':
            maxScore += 3;
            break;
    }
}
const questionText = document.querySelector('.question-text');
const answersBtns = document.querySelectorAll('.options-list .option .option-btn');
const progressBar = document.querySelector('.quiz-progress');
const nextQuestionBtn = document.querySelector('.next-question-btn');
const currentQuestionSpan = document.querySelector('.current-question');
const maxQuestionsSpan = document.querySelector('.max-questions');
const modalBgDiv = document.querySelector('.dialog-opened-bg');
const dialogModal = document.querySelector('.dialog-modal');
const finalScoreSpan = document.querySelector('.final-score-num');
const restartBtn = document.querySelector('.restart-btn');
export const getScore = () => {
    return score;
};
export const getCurrentQuestionIndex = () => {
    return currentQuestionIndex;
};
export const getCurrentQuestion = () => {
    return quizQuestions[currentQuestionIndex];
};
export const nextQuestion = () => {
    currentQuestionIndex++;
};
export const resetQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
};
export const checkAnswer = (selectedIndex, target) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
        return false;
    }
    const isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
        switch (currentQuestion.difficulty) {
            case 'easy':
                score += 1;
                break;
            case 'medium':
                score += 2;
                break;
            case 'hard':
                score += 3;
                break;
        }
        target.classList.add('correct');
    }
    else {
        target.classList.add('wrong');
    }
    answersBtns.forEach((answer) => {
        answer.disabled = true;
        if (parseInt(answer.dataset.option) ===
            currentQuestion.correctAnswerIndex) {
            answer.classList.add('correct');
        }
    });
    return isCorrect;
};
const handleAnswer = (e) => {
    const target = e.target;
    const optionValue = target.dataset.option;
    if (optionValue === undefined) {
        return;
    }
    checkAnswer(parseInt(optionValue), target);
};
const handleReuslt = () => {
    dialogModal.open = true;
    modalBgDiv.classList.add('active');
};
const renderQuestion = () => {
    const question = getCurrentQuestion();
    if (!question) {
        return;
    }
    dialogModal.open = false;
    modalBgDiv.classList.remove('active');
    progressBar.value = currentQuestionIndex + 1;
    currentQuestionSpan.innerText = `${currentQuestionIndex + 1}`;
    maxQuestionsSpan.innerText = `${quizQuestions.length}`;
    questionText.innerText = question.text;
    answersBtns.forEach((answer) => {
        const answerIndex = parseInt(answer.dataset.option);
        answer.innerText = question.options[answerIndex] ?? '';
    });
};
nextQuestionBtn.addEventListener('click', () => {
    nextQuestion();
    renderQuestion();
    answersBtns.forEach((answer) => {
        answer.disabled = false;
        answer.classList.remove('correct');
        answer.classList.remove('wrong');
    });
    finalScoreSpan.innerText = `${score}/${maxScore}`;
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextQuestionBtn.innerText = 'Finish';
    }
    else if (currentQuestionIndex === quizQuestions.length) {
        handleReuslt();
    }
});
answersBtns.forEach((answer) => {
    answer.addEventListener('click', handleAnswer);
});
restartBtn.addEventListener('click', () => {
    resetQuiz();
    renderQuestion();
});
renderQuestion();
//# sourceMappingURL=main.js.map