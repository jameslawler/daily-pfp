import GameHeader from "../components/GameHeader";
import useGameStats from "../hooks/use-game-stats";

function GameStats() {
  const { lowScore, topScore, numberOfDaysStreak, numberOfDaysPlayed } =
    useGameStats();

  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col gap-2 px-4 mt-8">
          <div className="text-xl font-bold">Statistics</div>
          <div>Days Played: {numberOfDaysPlayed}</div>
          <div>Top Score: {topScore}</div>
          <div>Lowest Score: {lowScore}</div>
          <div>Streak: {numberOfDaysStreak} days</div>
          <div className="grid grid-cols-7 mt-4">
            {Array.from(Array(numberOfDaysStreak), (_e, index) => (
              <div
                key={index}
                className="bg-green-400 rounded-md w-10 h-10"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStats;
