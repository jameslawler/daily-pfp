import { useEffect, useState } from "react";
import { useLocalStorage } from "./use-local-storage";
import { DailyGame, GameState } from "../domain/daily-game";
import { GameQuestion } from "../domain/data-repository";

const useGame = (game: DailyGame) => {
  const [seconds, setSeconds] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<GameQuestion>(
    game.questions[0]
  );
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [isPerfectGame, setIsPerfectGame] = useState<boolean>(false);
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "gender-game",
    "{}"
  );

  const currentDate = new Date();

  useEffect(() => {
    game.loadFromStorage(localStorageValue);
    updateState();
  }, [localStorageValue]);

  useEffect(() => {
    if (seconds === 30) {
      game.setExpired();
      updateState();
      setLocalStorageValue({
        lastGame: currentDate.toISOString().split("T")[0],
        lastQuestionIndex: game.questionIndex,
        gameState: game.gameState,
      });
    }
  }, [seconds]);

  const updateState = () => {
    setQuestionIndex(game.questionIndex);
    setCurrentQuestion(game.currentQuestion());
    setGameState(game.gameState);
    setIsPerfectGame(game.isPerfectGame());
  };

  const answerQuestion = (answerIndex: number) => {
    if (gameState !== "running") {
      return;
    }

    game.answer(answerIndex);
    setSeconds(0);
    updateState();
    setLocalStorageValue({
      lastGame: currentDate.toISOString().split("T")[0],
      lastQuestionIndex: game.questionIndex,
      gameState: game.gameState,
    });
  };

  const startGame = () => {
    if (game.gameState !== "waiting") {
      return;
    }

    game.start();
    updateState();

    setInterval(() => {
      if (game.gameState !== "running") {
        return;
      }

      setSeconds((oldCount) => (oldCount === 30 ? 30 : oldCount + 1));
    }, 1000);
  };

  return {
    startGame,
    answerQuestion,
    questionIndex,
    currentQuestion,
    gameState,
    seconds,
    isPerfectGame,
  };
};

export default useGame;
