import GameHeader from "../components/GameHeader";
import { genderItems } from "../domain/data";
import { GenderItem } from "../domain/gender-game";

const getFullWord = (item: GenderItem) => {
  switch (item.gender) {
    case "male":
      return item.isPlural ? `os ${item.word}` : `o ${item.word}`;
    case "female":
      return item.isPlural ? `as ${item.word}` : `a ${item.word}`;
    case "none":
      return item.word;
    case "both":
      return item.isPlural
        ? `os ${item.word} / as ${item.word}`
        : `o ${item.word} / a ${item.word}`;
  }
};

function GameStudy() {
  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col gap-4 px-4 mt-6">
          <div>
            This game has <span className="font-bold">{1650}</span> possible and
            each day a random list of 100 words is chosen to test your
            knowledge.
          </div>
          <div>Legend of colors</div>
          <div>
            <span className="text-xl font-bold mb-4">Category</span>
            <div className="flex flex-col gap-2">
              {genderItems.map((item) => (
                <div className="flex flex-row p-2 justify-center items-center">
                  <div className="w-10 h-10 mr-2 bg-blue-400 rounded-md"></div>
                  <span className="flex-1 text-xl">{getFullWord(item)}</span>
                  <div className="text-sm">
                    <a
                      href={`https://pt.wiktionary.org/wiki/${item.word}`}
                      target="_blank"
                    >
                      Dictionary
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStudy;
