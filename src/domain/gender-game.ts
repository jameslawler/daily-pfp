import { genderAnswerMap } from "./data";
import { Game, Question, QuestionBuilder } from "./game";

export type GenderQuestion = {
  word: string;
  category: string;
  answer: "male" | "female" | "none";
};

export class GenderGame {
  questions: Question[];
  game: Game;

  constructor(rawQuestions: GenderQuestion[]) {
    this.questions = [];

    for (const rawQuestion of rawQuestions) {
      const question = new QuestionBuilder()
        .setQuestionText(rawQuestion.word)
        .setQuestionCategory(rawQuestion.category)
        .setAnswerLeftText("feminino")
        .setAnswerRightText("masculino")
        .setAnswerDownText("sem")
        .setAnswerUpText("ambos")
        .setAnswerDirection(genderAnswerMap[rawQuestion.answer])
        .build();

      this.questions.push(question);
    }

    this.game = new Game(this.questions);
  }
}
