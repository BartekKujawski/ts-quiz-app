export type Difficulty = 'easy' | 'medium' | 'hard';
export interface Question {
    text: string;
    options: string[];
    correctAnswerIndex: number;
    difficulty: Difficulty;
}
export declare const quizQuestions: Question[];
//# sourceMappingURL=questions.d.ts.map