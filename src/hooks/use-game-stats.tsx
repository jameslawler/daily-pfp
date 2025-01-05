import { useLocalStorage } from "./use-local-storage";

const useGameStats = () => {
  const [statsLocalStorage] = useLocalStorage(
    "gender-game-stats",
    `{ "topScore": 0, "pastGames": [] }`
  );

  const getLongestStreakDays = () => {
    let currentStreak = 0;
    let longestStreak = 0;
    let lastDate = null;

    for (const pastGame of statsLocalStorage.pastGames) {
      if (lastDate === null) {
        currentStreak = 1;
        longestStreak = 1;
        lastDate = new Date(pastGame.date);

        continue;
      }

      lastDate.setDate(lastDate.getDate() + 1);

      if (lastDate.toISOString().split("T")[0] === pastGame.date) {
        currentStreak++;

        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      } else {
        currentStreak = 1;
      }

      lastDate = new Date(pastGame.date);
    }

    return longestStreak;
  };

  const getActivityLevel = (score: number) => {
    if (score < 20) {
      return 1;
    }

    if (score < 40) {
      return 2;
    }

    if (score < 60) {
      return 3;
    }

    return 4;
  };

  const getActivityData = (numberOfMonths: number) => {
    const startDate = new Date();

    startDate.setMonth(startDate.getMonth() - numberOfMonths);

    return [
      {
        date: startDate.toISOString().split("T")[0],
        count: 0,
        level: 0,
      },
      ...statsLocalStorage.pastGames
        .filter(
          (pastGame: { date: string }) =>
            new Date(pastGame.date).getTime() > startDate.getTime()
        )
        .map((pastGame: { date: string; score: number }) => ({
          date: pastGame.date,
          count: pastGame.score,
          level: getActivityLevel(pastGame.score),
        })),
    ];
  };

  return {
    topScore: statsLocalStorage.topScore,
    numberOfDaysLongestStreak: getLongestStreakDays(),
    numberOfDaysPlayed: statsLocalStorage.pastGames.length,
    desktopActivity: getActivityData(10),
    mobileActivity: getActivityData(5),
  };
};

export default useGameStats;
