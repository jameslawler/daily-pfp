import { useEffect, useState } from "react";

import { genderQuestions } from "./domain/data";
import { GenderGame } from "./domain/gender-game";
import useGame from "./hooks/use-game";

import Back from "../public/back.svg";
import Furniture from "../public/furniture.svg";
import Help from "../public/help.svg";
import Stats from "../public/stats.svg";

const genderGame = new GenderGame(genderQuestions);

function App() {
  const {
    startGame,
    answerQuestion,
    currentQuestion,
    // questionIndex,
    // gameState,
    // numberOfQuestions,
  } = useGame(genderGame.game);

  const [seconds] = useState(14);

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
      <div className="flex flex-col h-1/2 bg-gray-200">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row h-10">
            <div className="cursor-pointer hover:bg-gray-100">
              <img src={Back} className="w-10 h-10" />
            </div>
            <div className="flex flex-1 justify-center items-center">
              <span className="text-xl font-bold">Gender Game</span>
            </div>
            <div className="cursor-pointer hover:bg-gray-100">
              <img src={Stats} className="w-10 h-10" />
            </div>
            <div className="cursor-pointer hover:bg-gray-100">
              <img src={Help} className="w-10 h-10" />
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="bg-white rounded-full p-2">
              <img src={Furniture} className="w-10 h-10" />
            </div>
            <div className="mt-2">
              <span className="text-xl">
                {currentQuestion.questionCategory}
              </span>
            </div>
            <div className="mt-8">
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
        <div className="h-2 bg-gray-200">
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
