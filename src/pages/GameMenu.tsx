import { Link } from "react-router";
import GameHeader from "../components/GameHeader";

function GameMenu() {
  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div>Choose a Game</div>
        <div>
          <Link to="play">Play</Link>
        </div>
        <div>
          <Link to="study">Study</Link>
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
