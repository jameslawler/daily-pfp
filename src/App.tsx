import { genderQuestions } from "./domain/data";
import { GenderGame } from "./domain/gender-game";
import useGame from "./hooks/use-game";

import Male from "../public/mars.svg";
import Female from "../public/venus.svg";

const genderGame = new GenderGame(genderQuestions);

function App() {
  const {
    startGame,
    answerQuestion,
    currentQuestion,
    questionIndex,
    gameState,
    numberOfQuestions,
  } = useGame(genderGame.game);

  return (
    <div className="container mx-auto h-screen bg-green-200">
      <div className="flex flex-row items-center justify-center h-full">
        <div className="flex flex-col w-[500px] h-full">
          <div className="">
            <div>Score & Level</div>
            <div>Time Remaining {questionIndex}</div>
            {gameState === "waiting" && (
              <button onClick={() => startGame()}>Start</button>
            )}
            {gameState === "ended" && questionIndex < numberOfQuestions && (
              <div>Game Over</div>
            )}
            {gameState === "ended" &&
              questionIndex === numberOfQuestions - 1 && <div>Good Work!</div>}
          </div>
          <div className="flex items-center justify-center bg-red-50 h-32 w-full my-20 rounded-md">
            <span className="text-2xl">{currentQuestion.questionText}</span>
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <div className="flex flex-row gap-2 w-full">
              <div
                onClick={() => answerQuestion("left")}
                className="flex flex-row items-center justify-center bg-red-200 h-16 w-full rounded-md cursor-pointer"
              >
                <img src={Female} className="w-8 h-8 flex-1" />
                <span className="flex-1 font-bold">
                  {currentQuestion.answerLeftText}
                </span>
              </div>
              <div
                onClick={() => answerQuestion("right")}
                className="flex flex-row items-center justify-center bg-blue-200 h-16 w-full rounded-md cursor-pointer"
              >
                <img src={Male} className="w-8 h-8 flex-1" />
                <span className="flex-1 font-bold">
                  {currentQuestion.answerRightText}
                </span>
              </div>
            </div>
            <div
              onClick={() => answerQuestion("down")}
              className="flex flex-row items-center justify-center bg-gray-200 h-16 w-full rounded-md cursor-pointer"
            >
              <span className="font-bold">
                {currentQuestion.answerDownText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
