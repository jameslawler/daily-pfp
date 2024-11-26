import { useEffect, useState } from "react";

import { genderQuestions } from "../domain/data";
import { GenderGame } from "../domain/gender-game";

import useGame from "../hooks/use-game";
import GameHeader from "../components/GameHeader";

import Person from "/person.svg";
import GameModal from "../components/GameModal";
import { Link } from "react-router";

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
    isFirstGame,
  } = useGame(genderGame.game);

  const [scoreEffect, setScoreEffect] = useState("");
  const [plusoneEffect, setPlusoneEffect] = useState("hidden");

  useEffect(() => {
    if (!isFirstGame) {
      startGame();
    }
  }, []);

  useEffect(() => {
    setScoreEffect("animate-score");
    setPlusoneEffect("animate-plusone");
  }, [currentQuestion]);

  const getAnswerText = () => {
    switch (currentQuestion.answerDirection) {
      case "up":
        return currentQuestion.answerUpText;
      case "down":
        return currentQuestion.answerDownText;
      case "left":
        return currentQuestion.answerLeftText;
      case "right":
        return currentQuestion.answerRightText;
    }
  };

  const getAnswerBackgroundColor = () => {
    switch (currentQuestion.answerDirection) {
      case "up":
        return "bg-violet-400";
      case "down":
        return "bg-orange-400";
      case "left":
        return "bg-red-400";
      case "right":
        return "bg-blue-400";
    }
  };

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
            className={`h-2 bg-blue-600 ${
              seconds > 0 ? "transition-width ease-linear duration-1000" : ""
            }`}
            style={{
              width: `${Number((seconds / 30).toFixed(2)) * 100}%`,
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
            <span className="text-2xl font-bold text-center">Game Over</span>
            <div className="flex flex-col gap-2 my-4">
              <span className="text-center">The correct answer is</span>
              <span
                className={`${getAnswerBackgroundColor()} text-xl text-center font-bold py-4`}
              >
                {currentQuestion.questionText} - {getAnswerText()}
              </span>
            </div>
            <span className="text-center">
              You answered {questionIndex}{" "}
              {questionIndex === 1 ? "word" : "words"} correctly today
            </span>
            <span className="text-center">New game in 07 hrs 23 mins</span>
            <div className="bg-gray-100 border border-gray-300 text-sm my-4 p-2">
              <span>
                <a href="https://www.portuguesefromportugal.com/books">
                  Check out our Portuguese learning books available on Amazon
                  and help support our site.
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center p-4">
            <Link to="study">
              <div className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer">
                <span className="text-xl">Study</span>
              </div>
            </Link>
            <Link to="stats">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Statistics
              </div>
            </Link>
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
            <div className="bg-gray-200 border border-gray-300 text-sm p-2">
              <span>
                <a href="https://www.portuguesefromportugal.com/books">
                  Check out our Portuguese learning books available on Amazon
                  and help support our site.
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center p-4">
            <Link to="study">
              <div className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer">
                <span className="text-xl">Study</span>
              </div>
            </Link>
            <Link to="stats">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Statistics
              </div>
            </Link>
          </div>
        </GameModal>
      )}
      {isFirstGame && (
        <GameModal>
          <div className="flex flex-col gap-4 p-4">
            <span className="text-2xl font-bold text-center">First time</span>
            <span>Rules</span>
            <span>- Play until your first mistake</span>
            <span>- New set of words every day</span>
            <span>- Maximum 30 seconds per word to give an answer</span>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center p-4">
            <div
              className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer"
              onClick={() => {
                startGame();
              }}
            >
              <span className="text-xl">Start</span>
            </div>
          </div>
        </GameModal>
      )}
    </div>
  );
}

export default Game;
