import { useEffect, useState } from "react";
import { Direction, Game, GameState, Question } from "../domain/game";
import { useLocalStorage } from "./use-local-storage";

const useGame = (game: Game) => {
  const [seconds, setSeconds] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
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

  const answerQuestion = (direction: Direction) => {
    if (gameState !== "running") {
      return;
    }

    game.answer(direction);
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
      setSeconds((oldCount) => (oldCount === 30 ? 30 : oldCount + 1));
    }, 1000);
  };

  return {
    startGame,
    answerQuestion,
    questionIndex,
    currentQuestion,
    gameState,
    numberOfQuestions: game.questions.length,
    seconds,
    isPerfectGame,
  };
};

export default useGame;
