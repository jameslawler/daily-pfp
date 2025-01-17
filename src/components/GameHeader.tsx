import { Link, useNavigate } from "react-router";

import Back from "/back.svg";
import Help from "/help.svg";
import Stats from "/stats.svg";

interface Props {
  backUrl?: string;
}

function GameHeader({ backUrl }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-10 my-2">
      {backUrl && (
        <Link to={backUrl}>
          <img src={Back} className="w-10 h-10" />
        </Link>
      )}
      {!backUrl && (
        <div
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          <img src={Back} className="w-10 h-10" />
        </div>
      )}
      <div className="flex flex-1 justify-center items-center">
        <span className="text-xl font-bold"></span>
      </div>
      <div className="cursor-pointer hover:bg-gray-100">
        <Link to="/game/gender/stats">
          <img src={Stats} className="w-10 h-10" />
        </Link>
      </div>
      <div className="cursor-pointer hover:bg-gray-100">
        <Link to="/game/gender/help">
          <img src={Help} className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}

export default GameHeader;
