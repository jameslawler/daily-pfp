import GameHeader from "../components/GameHeader";

function GameStats() {
  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div>Stats</div>
      </div>
    </div>
  );
}

export default GameStats;
