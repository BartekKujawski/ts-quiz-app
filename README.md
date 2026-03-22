# Interactive Quiz TS

A web-based quiz application built using vanilla TypeScript, HTML, and CSS. The project demonstrates a solid understanding of frontend technology fundamentals, DOM manipulation, and application state management without the use of external frameworks.

## Features

- Dynamic loading of questions from a predefined database.
- Tracking user progress using the native `<progress>` element.
- Real-time answer validation.
- Displaying the final score in a modal window (`<dialog>`).
- Fully responsive user interface.
- Strict architectural separation between business logic and the view layer.

## Technologies

- HTML5
- CSS3
- TypeScript
- Node.js / NPM

## Project Structure

- `quiz.ts` - Responsible solely for business logic, state management (question index, score), and validation.
- `main.ts` - View layer, responsible for DOM manipulation, event listening (`addEventListener`), and UI rendering.
- `questions.ts` - Stores the data structure (questions, options, correct answer index).

## Running the project locally

1. Clone the repository:
   `git clone https://github.com/your-username/interactive-quiz-ts.git`

2. Navigate to the project directory:
   `cd interactive-quiz-ts`

3. Install dependencies:
   `npm install`

4. Run the compiler in watch mode (in the first terminal tab):
   `npm run watch`

5. Run the development server to support ES modules (in the second terminal tab):
   `npx live-server`
