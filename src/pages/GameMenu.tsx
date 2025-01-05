import { Link } from "react-router";
import GameHeader from "../components/GameHeader";
import { getStudyData } from "../domain/data-repository";

const studyData = getStudyData();
const numberOfWords = studyData.reduce(
  (acc, studyCategory) => acc + studyCategory.data.length,
  0
);
const monthMap = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();

  return `${date} ${monthMap[month]} ${year}`;
}

function GameMenu() {
  return (
    <div className="container mx-auto h-dvh">
      <div className="flex flex-col h-full">
        <GameHeader backUrl="/daily-pfp" />
        <div className="flex flex-col flex-1 gap-14 justify-center items-center px-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-4xl font-bold text-center">
              Feminino ou Masculino
            </div>
            <div className="text-xl text-center">
              How many words can you get right{" "}
              <span className="font-bold">without</span> a mistake?
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Link to="play">
              <div className="flex justify-center items-center bg-blue-800 text-white w-28 h-10 rounded-full cursor-pointer">
                <span className="text-xl">Play</span>
              </div>
            </Link>
            <Link to="study">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Study
              </div>
            </Link>
            <Link to="stats">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Statistics
              </div>
            </Link>
            <Link to="help">
              <div className="flex justify-center items-center bg-gray-100 border border-black text-black w-28 h-10 rounded-full cursor-pointer">
                Help
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-center font-bold">{getDate()}</div>
            <div className="text-center">New game every day</div>
            <div className="text-center">
              Study the full list of {numberOfWords} words to improve each day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
