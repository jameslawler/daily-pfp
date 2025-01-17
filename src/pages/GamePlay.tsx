import { useEffect, useState } from "react";

import useGame from "../hooks/use-game";
import GameHeader from "../components/GameHeader";

import Person from "/person.svg";
import GameModal from "../components/GameModal";
import { Link } from "react-router";
import { DailyGame } from "../domain/daily-game";
import { getGameQuestions } from "../domain/data-repository";
import { useCountdown } from "../hooks/use-countdown";
import useGameStats from "../hooks/use-game-stats";

const todayString = new Date().toISOString().split("T")[0];
const genderGame = new DailyGame(getGameQuestions(new Date(todayString)));
function Game() {
  const {
    startGame,
    answerQuestion,
    currentQuestion,
    currentScore,
    gameState,
    seconds,
    isPerfectGame,
  } = useGame(genderGame);
  const { topScore } = useGameStats();

  const [scoreEffect, setScoreEffect] = useState("");
  const [plusoneEffect, setPlusoneEffect] = useState("hidden");
  const [showEnglish, setShowEnglish] = useState(false);
  const { setEnabled, timeRemainingFormatted } = useCountdown();

  useEffect(() => {
    startGame();
    setEnabled(true);
  }, []);

  useEffect(() => {
    setScoreEffect("animate-score");
    setPlusoneEffect("animate-plusone");
  }, [currentQuestion]);

  const getAnswerText = () =>
    currentQuestion.answers.find((answer) => answer.isCorrect)?.text;

  const getAnswerSubText = () =>
    currentQuestion.answers.find((answer) => answer.isCorrect)?.subText;

  const getAnswerBackgroundColor = () =>
    currentQuestion.answers.find((answer) => answer.isCorrect)?.color;

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col h-4/6">
        <div className="flex flex-col flex-1">
          <GameHeader backUrl="/game/gender" />
          <div className="flex flex-row h-12 items-center mx-4">
            <div className="flex flex-row flex-1 ">
              <span className="mr-2">Top Score:</span>
              <div className="font-bold">{topScore}</div>
            </div>
            <div className="flex flex-row flex-1 justify-end">
              <span className="mr-2">Score:</span>
              <div
                className={`${scoreEffect} font-bold`}
                onAnimationEnd={() => setScoreEffect("")}
              >
                {currentScore}
              </div>
            </div>
          </div>
          <div
            className="flex flex-col flex-1 justify-center items-center"
            onMouseDown={() => setShowEnglish(true)}
            onMouseUp={() => setShowEnglish(false)}
            onTouchStart={() => setShowEnglish(true)}
            onTouchEnd={() => setShowEnglish(false)}
          >
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
                {!showEnglish && currentQuestion.questionText}
                {showEnglish && currentQuestion.questionTextEnglish}
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
      <div className="grid grid-cols-2 grid-rows-2 bg-white h-2/6">
        {currentQuestion.answers.map((answer, answerIndex) => (
          <div
            key={answer.color}
            className={`flex flex-col ${answer.color} justify-center items-center cursor-pointer`}
            onClick={() => answerQuestion(answerIndex)}
          >
            <span className="text-2xl font-bold">{answer.text}</span>
            <span className="text-xl text-center">{answer.subText}</span>
          </div>
        ))}
      </div>
      {gameState === "ended" && !isPerfectGame && (
        <GameModal>
          <div className="flex flex-col gap-4 p-4">
            <span className="text-2xl font-bold text-center">Game Over</span>
            <div className="flex flex-col gap-2 my-4">
              <span className="text-center">The correct answer is</span>
              <span
                className={`${getAnswerBackgroundColor()} text-center text-xl font-bold py-4`}
              >
                {getAnswerSubText()} - {getAnswerText()}
              </span>
            </div>
            <span className="text-center">
              You answered {currentScore}{" "}
              {currentScore === 1 ? "word" : "words"} correctly today
            </span>
            <span className="text-center">
              New game in {timeRemainingFormatted}
            </span>
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
            <Link to="/game/gender/study">
              <div className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer">
                <span className="text-xl">Study</span>
              </div>
            </Link>
            <Link to="/game/gender/stats">
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
            <span>New game starts in {timeRemainingFormatted}</span>
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
            <Link to="/game/gender/study">
              <div className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer">
                <span className="text-xl">Study</span>
              </div>
            </Link>
            <Link to="/game/gender/stats">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Statistics
              </div>
            </Link>
          </div>
        </GameModal>
      )}
    </div>
  );
}

export default Game;
