import { data, GameData, Gender } from "./data";

import Emergency from "/emergency.svg";
import Family from "/family.svg";
import Food from "/food.svg";
import HouseGarden from "/house.svg";
import Medical from "/medical.svg";
import Money from "/money.svg";
import Occupations from "/occupations.svg";
import Person from "/person.svg";
import PersonalCare from "/personal-care.svg";
import Relationships from "/relationships.svg";
import School from "/school.svg";
import Shopping from "/shopping.svg";
import Space from "/space.svg";

type GameQuestionAnswer = {
  text: string;
  subText: string;
  color: string;
  isCorrect: boolean;
};

type GameQuestionCategory = {
  text: string;
  icon: string;
};

export type GameQuestion = {
  questionCategory: GameQuestionCategory;
  questionText: string;
  questionTextEnglish?: string;
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

const getCategoryByCategoryId = (categoryId: string): GameQuestionCategory => {
  switch (categoryId) {
    case "human-body":
      return {
        text: "Human Body",
        icon: Person,
      };
    case "family":
      return {
        text: "Family",
        icon: Family,
      };
    case "relationships-life":
      return {
        text: "Relationships & Life",
        icon: Relationships,
      };
    case "personal-care":
      return {
        text: "Personal Care",
        icon: PersonalCare,
      };
    case "medical":
      return {
        text: "Medical",
        icon: Medical,
      };
    case "house-garden":
      return {
        text: "House & Garden",
        icon: HouseGarden,
      };
    case "emergency":
      return {
        text: "Emergency",
        icon: Emergency,
      };
    case "money":
      return {
        text: "Money",
        icon: Money,
      };
    case "shopping":
      return {
        text: "Shopping",
        icon: Shopping,
      };
    case "food-drink":
      return {
        text: "Food & Drink",
        icon: Food,
      };
    case "school-work":
      return {
        text: "School & Work",
        icon: School,
      };
    case "occupations":
      return {
        text: "Occupations",
        icon: Occupations,
      };
    case "earth-space":
      return {
        text: "Earth & Space",
        icon: Space,
      };
  }

  return {
    text: "Word",
    icon: Person,
  };
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
      questionCategory: getCategoryByCategoryId(item.category),
      questionText: item.word,
      questionTextEnglish: item.wordEnglish,
      answers: [
        {
          text: "feminino",
          subText: `${item.isPlural ? "as" : "a"} ${item.word}`,
          color: getColorByGender("female"),
          isCorrect: item.gender === "female",
        },
        {
          text: "masculino",
          subText: `${item.isPlural ? "os" : "o"} ${item.word}`,
          color: getColorByGender("male"),
          isCorrect: item.gender === "male",
        },
        {
          text: "sem",
          subText: item.word,
          color: getColorByGender("none"),
          isCorrect: item.gender === "none",
        },
        {
          text: "ambos",
          subText: `${item.isPlural ? "as" : "a"} ${item.word} / ${
            item.isPlural ? "os" : "o"
          } ${item.word}`,
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
  categoryText: string;
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
          categoryText: getCategoryByCategoryId(category).text,
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
