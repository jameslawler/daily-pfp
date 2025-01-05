interface ModalProps {
  children: React.ReactNode;
  isFullScreen?: boolean;
}

function MasterPage({ children, isFullScreen }: ModalProps) {
  return (
    <div className={`flex flex-col bg-white ${isFullScreen ? "h-dvh" : ""}`}>
      <div className="flex flex-row p-4 md:p-8">
        <span className="inline md:absolute font-bold text-lg">
          <a href="https://www.portuguesefromportugal.com">
            Portuguese from Portugal
          </a>
        </span>
        <div className="hidden md:flex container mx-auto flex-row gap-8 justify-center">
          <span className="font-semibold text-sm">
            <a href="https://www.portuguesefromportugal.com">Home</a>
          </span>
          <span className="font-semibold text-sm">
            <a href="https://www.portuguesefromportugal.com/articles">
              Listening Articles
            </a>
          </span>
          <span className="font-semibold text-sm">
            <a href="https://www.portuguesefromportugal.com/podcast">Podcast</a>
          </span>
          <span className="font-semibold text-sm">
            <a href="https://www.portuguesefromportugal.com/books">Books</a>
          </span>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default MasterPage;
