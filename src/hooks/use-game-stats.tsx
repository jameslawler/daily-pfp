import { useLocalStorage } from "./use-local-storage";

const useGameStats = () => {
  const [statsLocalStorage] = useLocalStorage(
    "gender-game-stats",
    `{ "topScore": 0, "pastGames": [] }`
  );

  const getStreakDays = () => {
    const date = new Date();
    let numberOfDays = 0;

    while (
      statsLocalStorage.pastGames.find(
        (game: { date: string }) =>
          game.date === date.toISOString().split("T")[0]
      )
    ) {
      numberOfDays++;

      date.setDate(date.getDate() - 1);
    }

    return numberOfDays;
  };

  return {
    topScore: statsLocalStorage.topScore,
    numberOfDaysStreak: getStreakDays(),
  };
};

export default useGameStats;
