import { useEffect, useState } from "react";

import { genderQuestions } from "../domain/data";
import { GenderGame } from "../domain/gender-game";

import useGame from "../hooks/use-game";
import GameHeader from "../components/GameHeader";

import Person from "/person.svg";
import GameModal from "../components/GameModal";

const genderGame = new GenderGame(genderQuestions);

function Game() {
  const {
    startGame,
    answerQuestion,
    currentQuestion,
    questionIndex,
    gameState,
    seconds,
    isPerfectGame,
  } = useGame(genderGame.game);

  const [scoreEffect, setScoreEffect] = useState("");
  const [plusoneEffect, setPlusoneEffect] = useState("hidden");

  useEffect(() => {
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
              <span className="font-bold">{30 - seconds}</span> seconds
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
      {gameState === "ended" && !isPerfectGame && (
        <GameModal>
          <div className="flex flex-col gap-4 p-4">
            <span className="text-2xl font-bold text-center">
              Whoops, que pena!
            </span>
            <span>
              You answered {questionIndex}{" "}
              {questionIndex === 1 ? "word" : "words"} correctly today
            </span>
            <span className="text-center">
              {currentQuestion.questionText} - {currentQuestion.answerDirection}
            </span>
            <span>New game starts in 07 hrs 23 mins</span>
            <div className="border border-gray-300 text-sm p-2">
              <span>
                <a href="https://www.portuguesefromportugal.com/books">
                  Check out our Portuguese learning books available on Amazon
                  and help support our site.
                </a>
              </span>
            </div>
          </div>
        </GameModal>
      )}
      {gameState === "ended" && isPerfectGame && (
        <GameModal>
          <div className="flex flex-col gap-4 p-4">
            <span className="text-2xl font-bold text-center">Muito bom!</span>
            <span>You got a perfect score.</span>
            <span>Can you do it again tomorrow and start a golden streak?</span>
            <span>New game starts in 07 hrs 23 mins</span>
            <div className="border border-gray-300 text-sm p-2">
              <span>
                <a href="https://www.portuguesefromportugal.com/books">
                  Check out our Portuguese learning books available on Amazon
                  and help support our site.
                </a>
              </span>
            </div>
          </div>
        </GameModal>
      )}
    </div>
  );
}

export default Game;
