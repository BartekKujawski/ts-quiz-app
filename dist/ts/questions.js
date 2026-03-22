export const quizQuestions = [
    {
        text: "What will be the output of `console.log(2 + '2');`?",
        options: ['4', '22', 'NaN', 'TypeError'],
        correctAnswerIndex: 1,
        difficulty: 'easy',
    },
    {
        text: "What will be the output of `console.log('5' - 1);`?",
        options: ['4', '51', 'NaN', 'TypeError'],
        correctAnswerIndex: 0,
        difficulty: 'easy',
    },
    {
        text: 'What will be the output of `console.log(typeof null);`?',
        options: ['null', 'undefined', 'object', 'string'],
        correctAnswerIndex: 2,
        difficulty: 'medium',
    },
    {
        text: 'What is the console output?\n`console.log(a);\nvar a = 10;`',
        options: ['10', 'undefined', 'ReferenceError', 'null'],
        correctAnswerIndex: 1,
        difficulty: 'medium',
    },
    {
        text: 'What is the console output?\n`let x = 1;\nif (true) {\n  let x = 2;\n}\nconsole.log(x);`',
        options: ['1', '2', 'undefined', 'ReferenceError'],
        correctAnswerIndex: 0,
        difficulty: 'easy',
    },
    {
        text: 'What will be the output of `console.log(0 == false);`?',
        options: ['true', 'false', 'TypeError', 'NaN'],
        correctAnswerIndex: 0,
        difficulty: 'easy',
    },
    {
        text: 'What is the result of `console.log(0.1 + 0.2 === 0.3);`?',
        options: ['true', 'false', 'undefined', 'SyntaxError'],
        correctAnswerIndex: 1,
        difficulty: 'hard',
    },
    {
        text: 'What is the length of the array?\n`let arr = [1, 2, 3];\narr[10] = 99;\nconsole.log(arr.length);`',
        options: ['3', '4', '10', '11'],
        correctAnswerIndex: 3,
        difficulty: 'medium',
    },
    {
        text: 'In what order will the numbers be logged?\n`setTimeout(() => console.log(1), 0);\nconsole.log(2);`',
        options: ['1, then 2', '2, then 1', 'Simultaneously', 'Error'],
        correctAnswerIndex: 1,
        difficulty: 'hard',
    },
    {
        text: "What will be the output of `console.log(['1', '7', '11'].map(parseInt));`?",
        options: [
            '[1, 7, 11]',
            '[1, NaN, 3]',
            '[1, undefined, 11]',
            'TypeError',
        ],
        correctAnswerIndex: 1,
        difficulty: 'hard',
    },
];
//# sourceMappingURL=questions.js.map