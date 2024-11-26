import { Direction } from "./game";
import { GenderItem, GenderQuestion } from "./gender-game";

export const genderAnswerMap: { [key: string]: Direction } = {
  male: "right",
  female: "left",
  none: "down",
  both: "up",
};

export const genderQuestions: GenderQuestion[] = [
  {
    word: "nariz",
    category: "pessoas",
    answer: "male",
  },
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

export const genderItems: GenderItem[] = [
  {
    word: "nariz",
    category: "pessoas",
    isPlural: false,
    gender: "male",
  },
  {
    word: "livro",
    category: "office",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mala",
    category: "furniture",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cantea",
    category: "furniture",
    isPlural: false,
    gender: "female",
  },
  {
    word: "papel",
    category: "office",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sala",
    category: "locations",
    isPlural: false,
    gender: "female",
  },
];
