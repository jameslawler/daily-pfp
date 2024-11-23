import { useEffect, useState } from "react";
import { Direction, Game, GameState, Question } from "../domain/game";
import { useLocalStorage } from "./use-local-storage";

const useGame = (game: Game) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    game.questions[0]
  );
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "gender-game",
    "{}"
  );

  const currentDate = new Date();

  useEffect(() => {
    game.loadFromStorage(localStorageValue);
    updateState();
  }, []);

  const updateState = () => {
    setQuestionIndex(game.questionIndex);
    setCurrentQuestion(game.currentQuestion());
    setGameState(game.gameState);
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
    game.start();
    updateState();
  };

  return {
    startGame,
    answerQuestion,
    questionIndex,
    currentQuestion,
    gameState,
    numberOfQuestions: game.questions.length,
  };
};

export default useGame;
