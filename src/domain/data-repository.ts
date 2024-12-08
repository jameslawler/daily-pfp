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

export const getGameQuestions = (): GameQuestion[] =>
  data.map((item) => ({
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
