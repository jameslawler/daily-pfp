import { Link } from "react-router";

function Home() {
  return (
    <div className="container mx-auto h-dvh">
      <div className="flex flex-col flex-1">
        <div>Choose a Game</div>
        <div>
          <Link to="game/gender">Fememinio ou Masculino</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
