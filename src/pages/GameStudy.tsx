import GameHeader from "../components/GameHeader";
import { GameData } from "../domain/data";
import { getStudyData } from "../domain/data-repository";

const studyData = getStudyData();
const numberOfWords = studyData.reduce(
  (acc, studyCategory) => acc + studyCategory.data.length,
  0
);

const getFullWord = (item: GameData) => {
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
            This game has <span className="font-bold">{numberOfWords}</span>{" "}
            possible words in the database and each day a random list of 100
            words is chosen to test your knowledge.
          </div>
          <div>
            Study the full list below so you can improve your daily score.
          </div>
          <div className="flex flex-col gap-4">
            {studyData.map((studyCategory) => (
              <div>
                <span className="text-xl font-bold mb-4">
                  {studyCategory.category}
                </span>
                <div className="flex flex-col gap-2">
                  {studyCategory.data.map((item) => (
                    <div className="flex flex-row p-2 justify-center items-center">
                      <div
                        className={`w-10 h-10 mr-2 ${item.color} rounded-md`}
                      ></div>
                      <span className="flex-1 text-xl">
                        {getFullWord(item)}
                      </span>
                      <div className="text-sm">
                        <a
                          href={`https://pt.wiktionary.org/wiki/${item.word}`}
                          target="_blank"
                        >
                          See Dictionary
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStudy;
