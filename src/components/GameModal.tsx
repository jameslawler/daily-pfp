import { Link } from "react-router";

interface ModalProps {
  children: React.ReactNode;
}

function GameModal({ children }: ModalProps) {
  return (
    <div
      id="modal"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal"
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        {children}

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
      </div>
    </div>
  );
}

export default GameModal;
