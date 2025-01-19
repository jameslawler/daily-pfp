import { Link } from "react-router";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-1 mx-4 md:mx-0">
        <div className="my-10 font-bold text-xl">
          ⚡ Daily Learning Challenges
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link to="game/gender">
            <div className="relative h-24 border-solid border-2 border-gray-500 border-opacity-100 rounded-md cursor-pointer hover:shadow-xl">
              <div className="absolute w-full h-full pattern-dots pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20 rounded-md"></div>
              <div className="absolute flex items-center w-full h-full">
                <div className="mx-auto bg-slate-100 py-1 px-4 rounded-md dark:bg-slate-600">
                  Feminino ou Masculino
                </div>
              </div>
            </div>
          </Link>
          <div>
            <div>Identify the gender of 100 words.</div>
            <div>The game stops on your first mistake.</div>
            <div>
              A new game of 100 words starts{" "}
              <span className="font-bold">each day</span>.
            </div>
            <div>Study the full list to improve every day.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
