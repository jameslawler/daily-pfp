import GameHeader from "../components/GameHeader";

function GameHelp() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col px-4 mt-8">
          <div className="text-xl font-bold">How to play</div>
          <div className="mt-2">
            In Portuguese words can be feminine, masculine, neither, or both
            genders.
          </div>
          <div className="mt-2">
            In this game you need to choose the correct option for each word
            within the <span className="font-bold">30 seconds</span> time limit.
          </div>
          <div className="mt-2">
            The game will automatically end when you get one word wrong and Each
            day the game is different.
          </div>
          <div className="mt-2">
            Try to improve each day by beating your top score.
          </div>
          <div className="mt-8 font-bold">Examples</div>
          <div className="flex flex-col gap-4 w-full mt-2">
            <div className="flex flex-row gap-4">
              <div className="bg-red-400 w-32 p-2">feminino</div>
              <div className="flex-1 p-2">a casa</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-blue-400 w-32 p-2">masculino</div>
              <div className="flex-1 p-2">o livro</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-orange-400 w-32 p-2">sem</div>
              <div className="flex-1 p-2">Paris</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-violet-400 w-32 p-2">ambos</div>
              <div className="flex-1 p-2">a taxista / o taxista</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameHelp;
