import { GameQuestion } from "./data-repository";

export type GameState = "waiting" | "running" | "ended";

export class DailyGame {
  questions: GameQuestion[];
  questionIndex: number;
  gameState: GameState;

  constructor(questions: GameQuestion[]) {
    this.questions = questions;
    this.questionIndex = 0;
    this.gameState = "waiting";
  }

  start() {
    this.gameState = "running";
  }

  answer(answerIndex: number) {
    const currentQuestion = this.questions[this.questionIndex];
    const { isCorrect } = currentQuestion.answers[answerIndex];

    if (!isCorrect) {
      this.gameState = "ended";
      return;
    }

    if (this.questionIndex === this.questions.length - 1) {
      this.gameState = "ended";
      return;
    }

    this.questionIndex++;
  }

  currentQuestion() {
    return this.questions[this.questionIndex];
  }

  setExpired() {
    this.gameState = "ended";
  }

  isPerfectGame() {
    return (
      this.gameState === "ended" &&
      this.questionIndex === this.questions.length - 1
    );
  }

  loadFromStorage(localStorage: {
    lastGame: string;
    lastQuestionIndex: number;
    gameState: GameState;
  }) {
    const currentDate = new Date().toISOString().split("T")[0];

    if (localStorage.lastGame !== currentDate) {
      return;
    }

    this.questionIndex = localStorage.lastQuestionIndex;
    this.gameState = localStorage.gameState;
  }
}
