import GameHeader from "../components/GameHeader";

function GameHelp() {
  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col px-4 mt-8">
          <div className="text-xl font-bold">How to play</div>
          <div className="mt-2">
            In Portuguese words can be feminine, masculine, neither, or both.
          </div>
          <div className="mt-2">
            In this game you need to choose the correct option for each word.
          </div>
          <div className="mt-2">
            The game will automatically end when you get one word wrong.
          </div>
          <div>Each day the game is different.</div>
          <div>Try to improve each day by beating your top score.</div>
          <div>Examples</div>
          <div>Feminine - a casa</div>
          <div>Masculine - o livro</div>
          <div>Neither - Paris</div>
          <div>Both - a taxista / o taxista</div>
        </div>
      </div>
    </div>
  );
}

export default GameHelp;
