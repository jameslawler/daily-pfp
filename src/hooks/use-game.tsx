import { useEffect, useState } from "react";
import { useLocalStorage } from "./use-local-storage";
import { DailyGame, GameState } from "../domain/daily-game";
import { GameQuestion } from "../domain/data-repository";

const useGame = (game: DailyGame) => {
  const [seconds, setSeconds] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<GameQuestion>(
    game.questions[0]
  );
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [isPerfectGame, setIsPerfectGame] = useState<boolean>(false);
  const [gameStorageValue, setGameStorageValue] = useLocalStorage(
    "gender-game",
    "{}"
  );
  const [statsLocalStorage, setStatsLocalStorage] = useLocalStorage(
    "gender-game-stats",
    `{ "topScore": 0, "pastGames": [] }`
  );

  const currentDate = new Date();

  useEffect(() => {
    game.loadFromStorage(gameStorageValue);
    updateState();
  }, [gameStorageValue]);

  useEffect(() => {
    if (seconds === 30) {
      game.setExpired();
      updateState();
      setGameStorageValue({
        lastGame: currentDate.toISOString().split("T")[0],
        lastQuestionIndex: game.questionIndex,
        gameState: game.gameState,
      });
    }
  }, [seconds]);

  const updateState = () => {
    const score = game.isPerfectGame()
      ? game.questionIndex + 1
      : game.questionIndex;

    setCurrentScore(score);
    setCurrentQuestion(game.currentQuestion());
    setGameState(game.gameState);
    setIsPerfectGame(game.isPerfectGame());
  };

  type PastGame = {
    date: string;
    score: number;
  };

  const updatePastGames = (pastGames: PastGame[], currentScore: number) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const hasCurrentGame = !!pastGames.find(
      (game) => game.date === currentDate
    );

    if (!hasCurrentGame) {
      return [...pastGames, { date: currentDate, score: currentScore }];
    } else {
      return pastGames.map((game) => {
        if (game.date === currentDate) {
          return { date: currentDate, score: currentScore };
        } else {
          return game;
        }
      });
    }
  };

  const answerQuestion = (answerIndex: number) => {
    if (gameState !== "running") {
      return;
    }

    game.answer(answerIndex);
    setSeconds(0);
    updateState();

    setGameStorageValue({
      lastGame: currentDate.toISOString().split("T")[0],
      lastQuestionIndex: game.questionIndex,
      gameState: game.gameState,
    });
    setStatsLocalStorage({
      topScore:
        currentScore > statsLocalStorage.topScore
          ? currentScore
          : statsLocalStorage.topScore,
      pastGames: updatePastGames(statsLocalStorage.pastGames, currentScore),
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
    currentScore,
    currentQuestion,
    gameState,
    seconds,
    isPerfectGame,
  };
};

export default useGame;
