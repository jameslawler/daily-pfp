import { useEffect, useState } from "react";

import { genderQuestions } from "../domain/data";
import { GenderGame } from "../domain/gender-game";

import useGame from "../hooks/use-game";
import GameHeader from "../components/GameHeader";

import Person from "/person.svg";

const genderGame = new GenderGame(genderQuestions);

function Game() {
  const {
    startGame,
    answerQuestion,
    currentQuestion,
    questionIndex,
    // gameState,
    // numberOfQuestions,
  } = useGame(genderGame.game);

  const [seconds] = useState(14);
  const [scoreEffect, setScoreEffect] = useState("");
  const [plusoneEffect, setPlusoneEffect] = useState("hidden");

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

  useEffect(() => {
    setScoreEffect("animate-score");
    setPlusoneEffect("animate-plusone");
  }, [currentQuestion]);

  return (
    <div className="container mx-auto h-dvh">
      <div className="flex flex-col h-1/2 bg-gray-200">
        <div className="flex flex-col flex-1">
          <GameHeader />
          <div className="flex flex-row h-12 items-center mx-4">
            <div className="flex flex-row flex-1 ">
              <span className="mr-2">Top Score:</span>
              <div className="font-bold">23</div>
            </div>
            <div className="flex flex-row flex-1 justify-end">
              <span className="mr-2">Score:</span>
              <div
                className={`${scoreEffect} font-bold`}
                onAnimationEnd={() => setScoreEffect("")}
              >
                {questionIndex + 1}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="bg-white rounded-full">
              <img src={Person} className="w-12 h-12" />
            </div>
            <div className="mt-1">
              <span className="text-xl">
                {currentQuestion.questionCategory}
              </span>
            </div>
            <div className="relative mt-8">
              <span className="text-5xl font-bold">
                {currentQuestion.questionText}
              </span>
              <span
                className={`${plusoneEffect} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-2xl text-green-500 font-bold`}
                onAnimationEnd={() => setPlusoneEffect("hidden")}
              >
                + 1
              </span>
            </div>
          </div>
          <div className="flex h-14 justify-center items-center">
            <span className="text-sm">
              Falta <span className="font-bold">{30 - seconds}</span> segundos
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
          <span className="text-2xl font-bold">
            {currentQuestion.answerLeftText}
          </span>
        </div>
        <div
          className="flex flex-col bg-blue-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("right")}
        >
          <span className="text-2xl font-bold">
            {currentQuestion.answerRightText}
          </span>
        </div>
        <div
          className="flex flex-col bg-orange-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("down")}
        >
          <span className="text-2xl font-bold">
            {currentQuestion.answerDownText}
          </span>
        </div>
        <div
          className="flex flex-col bg-violet-400 justify-center items-center cursor-pointer"
          onClick={() => answerQuestion("up")}
        >
          <span className="text-2xl font-bold">
            {currentQuestion.answerUpText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Game;
