import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [IsXNext, setIsXNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function jumpTo(move) {
    setCurrentMove(move);
    setIsXNext(move % 2 == 0);
  }
  const moves = history.map((squareValues, move) => {
    let description;
    if (move > 0) {
      description = `Go to move no # ${move}`;
    } else {
      description = `Go to start the game`;
    }
    return (
      <li className=" bg-gray-700 text-white p-1 rounded-sm mb-1" key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlePlay(nextSquares) {
    setIsXNext(!IsXNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  return (
    <div className="flex justify-center p-4 gap-4">
      <div>
        <Board
          IsXNext={IsXNext}
          squareValues={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div>
        <History moves={moves} />
      </div>
    </div>
  );
}
