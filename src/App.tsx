import { genderQuestions } from "./domain/data";
import { GenderGame } from "./domain/gender-game";
import useGame from "./hooks/use-game";

import { useEffect, useState } from "react";

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

  const [seconds, setSeconds] = useState(14);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setSeconds((oldCount) => oldCount + 1);
    // }, 1000);

    // setTimeout(() => {
    //   clearInterval(interval);
    // }, 30000);

    // return () => clearInterval(interval);
    startGame();
  }, []);

  return (
    <div className="container mx-auto h-screen bg-green-200">
      {/* <div className="flex flex-row items-center justify-center h-full">
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
      </div> */}
      <div className="flex flex-col h-1/2 bg-gray-100">
        <div className="flex flex-col flex-1">
          <div className="h-14">header</div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div>
              <div>icon</div>
              <div>
                <span className="text-xl">
                  {currentQuestion.questionCategory}
                </span>
              </div>
            </div>
            <div>
              <span className="text-5xl font-bold">
                {currentQuestion.questionText}
              </span>
            </div>
          </div>
          <div className="flex h-14 justify-center items-center">
            <span className="text-sm">
              You have <span className="font-bold">{30 - seconds}</span> seconds
              remaining
            </span>
          </div>
        </div>
        <div className="h-2 bg-gray-100">
          <div
            className="h-2 bg-blue-600 transition-transform ease-linear duration-1000"
            style={{
              transform: `translateX(${
                Number((seconds / 30).toFixed(2)) * 100 - 100
              }%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-1/2 bg-white">
        <div
          className="flex flex-col bg-red-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("left")}
        >
          <span className="text-xl font-bold">
            {currentQuestion.answerLeftText}
          </span>
        </div>
        <div
          className="flex flex-col bg-blue-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("right")}
        >
          <span className="text-xl font-bold">
            {currentQuestion.answerRightText}
          </span>
        </div>
        <div
          className="flex flex-col bg-orange-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("down")}
        >
          <span className="text-xl font-bold">
            {currentQuestion.answerDownText}
          </span>
        </div>
        <div
          className="flex flex-col bg-violet-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("up")}
        >
          <span className="text-xl font-bold">
            {currentQuestion.answerUpText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
