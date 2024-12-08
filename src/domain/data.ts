export type Gender = "male" | "female" | "both" | "none";

export type GameData = {
  word: string;
  category: string;
  isPlural: boolean;
  gender: Gender;
};

export const data: GameData[] = [
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
