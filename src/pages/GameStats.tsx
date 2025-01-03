import GameHeader from "../components/GameHeader";
import useGameStats from "../hooks/use-game-stats";
import ActivityCalendar from "react-activity-calendar";

function GameStats() {
  const {
    topScore,
    numberOfDaysLongestStreak,
    numberOfDaysPlayed,
    desktopActivity,
    mobileActivity,
  } = useGameStats();

  return (
    <div className="container mx-auto h-dvh bg-gray-200">
      <div className="flex flex-col flex-1">
        <GameHeader />
        <div className="flex flex-col gap-2 px-4 mt-8">
          <div className="text-xl font-bold">Statistics</div>
          <div className="flex flex-col gap-2 mb-10">
            <div className="flex flex-row">
              <span className="flex-1">Days Played</span>
              <span className="flex-1">{numberOfDaysPlayed}</span>
            </div>
            <div className="flex flex-row">
              <span className="flex-1">Highest Score</span>
              <span className="flex-1">{topScore}</span>
            </div>
            <div className="flex flex-row">
              <span className="flex-1">Longest Streak</span>
              <span className="flex-1">{numberOfDaysLongestStreak}</span>
            </div>
          </div>
          <div className="hidden md:block">
            {desktopActivity.length > 0 && (
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
            {mobileActivity.length > 0 && (
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
