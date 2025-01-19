import GameHeader from "../components/GameHeader";

function GameAttributions() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col px-4 mt-8">
          <div className="text-xl font-bold">Attributions</div>
          <div className="mt-8 font-bold">Emoji Icons</div>
          <div>
            All emojis designed by{" "}
            <a href="https://openmoji.org/">https://openmoji.org/</a> - the
            open-source emoji and icon project. License:{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/#">
              CC BY-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameAttributions;
