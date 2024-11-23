import { Direction } from "./game";
import { GenderQuestion } from "./gender-game";

export const genderAnswerMap: { [key: string]: Direction } = {
  male: "right",
  female: "left",
  none: "down",
  both: "up",
};

export const genderQuestions: GenderQuestion[] = [
  {
    word: "livro",
    category: "office",
    answer: "male",
  },
  {
    word: "mala",
    category: "furniture",
    answer: "female",
  },
  {
    word: "cantea",
    category: "furniture",
    answer: "female",
  },
  {
    word: "papel",
    category: "office",
    answer: "male",
  },
  {
    word: "sala",
    category: "locations",
    answer: "female",
  },
];
