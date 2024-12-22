import { data, GameData, Gender } from "./data";

type GameQuestionAnswer = {
  text: string;
  color: string;
  isCorrect: boolean;
};

export type GameQuestion = {
  questionCategory: string;
  questionText: string;
  answers: GameQuestionAnswer[];
};

const getColorByGender = (gender: Gender) => {
  switch (gender) {
    case "male":
      return "bg-blue-400";
    case "female":
      return "bg-red-400";
    case "both":
      return "bg-orange-400";
    case "none":
      return "bg-violet-400";
  }
};

const shuffleArray = (array: GameData[], seed: number): GameData[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  seed = seed || 1;

  const random = function () {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  while (0 !== currentIndex) {
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const WORDS_PER_GAME = 100;

export const getGameQuestions = (date: Date): GameQuestion[] => {
  const shuffleData = shuffleArray(data, date.getTime());

  return shuffleData
    .filter((_, index) => index < WORDS_PER_GAME)
    .map((item) => ({
      questionCategory: item.category,
      questionText: item.word,
      answers: [
        {
          text: "feminino",
          color: getColorByGender("female"),
          isCorrect: item.gender === "female",
        },
        {
          text: "masculino",
          color: getColorByGender("male"),
          isCorrect: item.gender === "male",
        },
        {
          text: "sem",
          color: getColorByGender("none"),
          isCorrect: item.gender === "none",
        },
        {
          text: "ambos",
          color: getColorByGender("both"),
          isCorrect: item.gender === "both",
        },
      ],
    }));
};

type StudyGameData = {
  word: string;
  category: string;
  isPlural: boolean;
  gender: Gender;
  color: string;
};

type GroupedData = {
  category: string;
  data: StudyGameData[];
};

const groupByCategory = (data: GameData[]) =>
  data
    .reduce((acc: GroupedData[], item) => {
      const { category } = item;

      const existingGroup = acc.find((i) => i.category === category);

      if (existingGroup) {
        existingGroup.data.push({
          ...item,
          color: getColorByGender(item.gender),
        });
      } else {
        acc.push({
          category,
          data: [
            {
              ...item,
              color: getColorByGender(item.gender),
            },
          ],
        });
      }

      return acc;
    }, [])
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((item) => ({
      ...item,
      data: item.data.sort((a, b) =>
        a.gender !== b.gender
          ? a.gender.localeCompare(b.gender)
          : a.word.localeCompare(b.word)
      ),
    }));

export const getStudyData = () => groupByCategory(data);
