import { Direction } from "./game";
import { GenderQuestion } from "./gender-game";

export const genderAnswerMap: { [key: string]: Direction } = {
  male: "right",
  female: "left",
  none: "down",
};

export const genderQuestions: GenderQuestion[] = [
  {
    word: "livro",
    answer: "male",
  },
  {
    word: "mala",
    answer: "female",
  },
  {
    word: "cantea",
    answer: "female",
  },
  {
    word: "papel",
    answer: "male",
  },
  {
    word: "sala",
    answer: "female",
  },
];
