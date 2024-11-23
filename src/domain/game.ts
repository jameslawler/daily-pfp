export type Direction = "up" | "down" | "left" | "right";
export type GameState = "waiting" | "running" | "ended";

export class QuestionBuilder {
  question: Question;

  constructor() {
    this.question = new Question();
  }

  setQuestionCategory(questionCategory: string) {
    this.question.questionCategory = questionCategory;
    return this;
  }

  setQuestionText(questionText: string) {
    this.question.questionText = questionText;
    return this;
  }

  setAnswerUpText(answerUpText: string) {
    this.question.answerUpText = answerUpText;
    return this;
  }

  setAnswerDownText(answerDownText: string) {
    this.question.answerDownText = answerDownText;
    return this;
  }

  setAnswerLeftText(answerLeftText: string) {
    this.question.answerLeftText = answerLeftText;
    return this;
  }

  setAnswerRightText(answerRightText: string) {
    this.question.answerRightText = answerRightText;
    return this;
  }

  setAnswerDirection(answerDirection: Direction) {
    this.question.answerDirection = answerDirection;
    return this;
  }

  build() {
    return this.question;
  }
}

export class Question {
  questionText: string;
  questionCategory: string;
  answerUpText?: string;
  answerDownText?: string;
  answerLeftText?: string;
  answerRightText?: string;
  answerDirection?: Direction;

  constructor() {
    this.questionText = "";
    this.questionCategory = "";
  }

  hasAnswerDirection(direction: Direction) {
    switch (direction) {
      case "up":
        return !!this.answerUpText;
      case "down":
        return !!this.answerDownText;
      case "left":
        return !!this.answerLeftText;
      case "right":
        return !!this.answerRightText;
    }
  }
}

export class Game {
  questions: Question[];
  questionIndex: number;
  gameState: GameState;
  startTime?: number;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.questionIndex = 0;
    this.gameState = "waiting";
  }

  start() {
    this.startTime = Date.now();
    this.gameState = "running";
  }

  answer(direction: Direction) {
    const currentQuestion = this.questions[this.questionIndex];
    const isCorrect = currentQuestion.answerDirection === direction;

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

  loadFromStorage(localStorage: {
    lastGame: string;
    lastQuestionIndex: number;
    gameState: GameState;
  }) {
    if (!localStorage.lastQuestionIndex || !localStorage.gameState) {
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    if (localStorage.lastGame !== currentDate) {
      return;
    }

    this.questionIndex = localStorage.lastQuestionIndex;
    this.gameState = localStorage.gameState;
  }
}
