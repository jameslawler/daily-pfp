import GameHeader from "../components/GameHeader";
import useGameStats from "../hooks/use-game-stats";

function GameStats() {
  const { topScore, numberOfDaysStreak } = useGameStats();

  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="px-4">
          <div>Top Score: {topScore}</div>
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
