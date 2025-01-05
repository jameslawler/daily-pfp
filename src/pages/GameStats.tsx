import ActivityCalendar from "react-activity-calendar";

import GameHeader from "../components/GameHeader";
import useGameStats from "../hooks/use-game-stats";

import HighestScore from "/highest-score.svg";
import LongestStreak from "/longest-streak.svg";
import NumberDaysPlayed from "/number-days-played.svg";

function GameStats() {
  const {
    topScore,
    numberOfDaysLongestStreak,
    numberOfDaysPlayed,
    desktopActivity,
    mobileActivity,
  } = useGameStats();

  return (
    <div className="container mx-auto h-dvh">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col gap-2 px-4 mt-8">
          <div className="text-xl font-bold mb-6">Statistics</div>
          <div className="flex flex-row gap-2 mb-10">
            <div className="flex flex-col flex-1 gap-4 justify-center items-center">
              <span className="flex-1">
                <img
                  src={NumberDaysPlayed}
                  className="w-8 h-8 md:w-20 md:h-20"
                />
              </span>
              <span className="flex-1 font-bold text-sm md:text-lg">
                Days Played
              </span>
              <span className="flex-1 text-md md:text-lg">
                {numberOfDaysPlayed} days
              </span>
            </div>
            <div className="flex flex-col flex-1 gap-4 justify-center items-center">
              <span className="flex-1">
                <img src={HighestScore} className="w-8 h-8 md:w-20 md:h-20" />
              </span>
              <span className="flex-1 font-bold  text-sm md:text-lg">
                Highest Score
              </span>
              <span className="flex-1 text-md md:text-lg">{topScore}</span>
            </div>
            <div className="flex flex-col flex-1 gap-4 justify-center items-center">
              <span className="flex-1">
                <img src={LongestStreak} className="w-8 h-8 md:w-20 md:h-20" />
              </span>
              <span className="flex-1 font-bold  text-sm md:text-lg">
                Longest Streak
              </span>
              <span className="flex-1 text-md md:text-lg">
                {numberOfDaysLongestStreak} days
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            {numberOfDaysPlayed > 0 && (
              <div>
                <ActivityCalendar
                  data={desktopActivity}
                  theme={{
                    light: [
                      "rgb(235, 237, 240)",
                      "rgb(155, 233, 168)",
                      "rgb(64, 196, 99)",
                      "rgb(48, 161, 78)",
                      "rgb(33, 110, 57)",
                    ],
                  }}
                />
              </div>
            )}
          </div>
          <div className="block md:hidden mx-auto">
            {numberOfDaysPlayed > 0 && (
              <div>
                <ActivityCalendar
                  data={mobileActivity}
                  hideTotalCount
                  theme={{
                    light: [
                      "rgb(235, 237, 240)",
                      "rgb(155, 233, 168)",
                      "rgb(64, 196, 99)",
                      "rgb(48, 161, 78)",
                      "rgb(33, 110, 57)",
                    ],
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStats;
