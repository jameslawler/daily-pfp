import { Link, useNavigate } from "react-router";

import Back from "/back.svg";
import Help from "/help.svg";
import Stats from "/stats.svg";

function GameHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-10">
      <div
        className="cursor-pointer hover:bg-gray-100"
        onClick={() => navigate(-1)}
      >
        <img src={Back} className="w-10 h-10" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <span className="text-xl font-bold">Feminino ou Masculino</span>
      </div>
      <div className="cursor-pointer hover:bg-gray-100">
        <Link to="/daily-pfp/game/gender/stats">
          <img src={Stats} className="w-10 h-10" />
        </Link>
      </div>
      <div className="cursor-pointer hover:bg-gray-100">
        <Link to="/daily-pfp/game/gender/help">
          <img src={Help} className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}

export default GameHeader;
