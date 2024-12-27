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

  const getLowScore = () =>
    statsLocalStorage.pastGames.reduce(
      (acc: number, pastGame: { score: number }) =>
        pastGame.score < acc ? pastGame.score : acc,
      0
    );

  return {
    lowScore: getLowScore(),
    topScore: statsLocalStorage.topScore,
    numberOfDaysStreak: getStreakDays(),
    numberOfDaysPlayed: statsLocalStorage.pastGames.length,
  };
};

export default useGameStats;
