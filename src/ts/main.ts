import { quizQuestions } from './questions.js';

let currentQuestionIndex: number = 0;
let score: number = 0;
let maxScore = 0;
for (let i = 0; i < quizQuestions.length; i++) {
    switch (quizQuestions[i]!.difficulty) {
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

const questionText =
    document.querySelector<HTMLHeadingElement>('.question-text');
const answersBtns = document.querySelectorAll<HTMLButtonElement>(
    '.options-list .option .option-btn',
);
const progressBar =
    document.querySelector<HTMLProgressElement>('.quiz-progress');
const nextQuestionBtn =
    document.querySelector<HTMLButtonElement>('.next-question-btn');
const currentQuestionSpan =
    document.querySelector<HTMLSpanElement>('.current-question');
const maxQuestionsSpan =
    document.querySelector<HTMLSpanElement>('.max-questions');
const modalBgDiv = document.querySelector<HTMLDivElement>('.dialog-opened-bg');
const dialogModal = document.querySelector<HTMLDialogElement>('.dialog-modal');
const finalScoreSpan =
    document.querySelector<HTMLSpanElement>('.final-score-num');
const restartBtn = document.querySelector<HTMLButtonElement>('.restart-btn');

if (
    !questionText ||
    !progressBar ||
    !nextQuestionBtn ||
    !currentQuestionSpan ||
    !maxQuestionsSpan ||
    !modalBgDiv ||
    !dialogModal ||
    !finalScoreSpan ||
    !restartBtn
) {
    throw new Error('Nie znaleziono wymaganych elementów DOM.');
}

export const getScore = (): number => {
    return score;
};

export const getCurrentQuestionIndex = (): number => {
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

export const checkAnswer = (
    selectedIndex: number,
    target: HTMLButtonElement,
): boolean => {
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
    } else {
        target.classList.add('wrong');
    }

    answersBtns.forEach((answer) => {
        answer.disabled = true;
        if (
            parseInt(answer.dataset.option!) ===
            currentQuestion.correctAnswerIndex
        ) {
            answer.classList.add('correct');
        }
    });

    return isCorrect;
};

const handleAnswer = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    const optionValue = target.dataset.option;

    if (optionValue === undefined) {
        return;
    }

    checkAnswer(parseInt(optionValue), target);
};

const handleResult = () => {
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
        const answerIndex = parseInt(answer.dataset.option!);
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
    } else if (currentQuestionIndex === quizQuestions.length) {
        handleResult();
    }
});

answersBtns.forEach((answer) => {
    answer.addEventListener('click', handleAnswer);
});

restartBtn.addEventListener('click', () => {
    resetQuiz();
    renderQuestion();
    nextQuestionBtn.innerText = 'Next';
    answersBtns.forEach((answer) => {
        answer.disabled = false;
        answer.classList.remove('correct');
        answer.classList.remove('wrong');
    });
});

renderQuestion();
