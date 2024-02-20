/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className=" bg-white border border-gray-400 h-12 w-12 leading-9 m-1 text-lg "
    >
      {value === "X" ? (
        <span className=" text-red-800 font-bold">{value}</span>
      ) : (
        <span className=" text-green-800 font-bold">{value}</span>
      )}
    </button>
  );
}
