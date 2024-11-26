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
      </div>
    </div>
  );
}

export default GameModal;
