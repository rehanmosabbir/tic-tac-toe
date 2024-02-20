/* eslint-disable react/prop-types */
import Square from "./Square";

function calculateWinner(squareValues) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squareValues[a] &&
      squareValues[a] === squareValues[b] &&
      squareValues[a] === squareValues[c]
    ) {
      return squareValues[a];
    }
  }
  return null;
}

export default function Board({ IsXNext, squareValues, onPlay }) {
  const winner = calculateWinner(squareValues);
  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next player: ${IsXNext ? "X" : "O"}`;
  }
  const handleClick = (i) => {
    if (squareValues[i] || calculateWinner(squareValues)) {
      return;
    }
    let nextSquareValues = squareValues.slice();
    if (IsXNext) {
      nextSquareValues[i] = "X";
    } else {
      nextSquareValues[i] = "O";
    }

    onPlay(nextSquareValues);
  };
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={squareValues[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squareValues[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squareValues[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squareValues[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squareValues[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squareValues[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squareValues[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squareValues[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squareValues[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
