import { useState, useEffect } from "react";

const getSudokuBoard = () => {
  const board = Array.from(Array(9), () => new Array(9).fill(0));
  // S0 공간 채우기
  let random = Array(9)
    .fill(0)
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  const s0 = Array.from(Array(3), () => new Array(3).fill(0));

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      s0[i][j] = random[i * 3 + j];
      board[i][j] = random[i * 3 + j];
    }
  }

  const product = (arr1: number[][], arr2: number[][]) => {
    return arr1.map((row) =>
      arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
    );
  };

  const fillBoard = (board: number[][], space: number[][], sector: number) => {
    for (
      let y = Math.floor(sector / 3) * 3;
      y < Math.floor(sector / 3) * 3 + 3;
      y++
    ) {
      for (let x = (sector % 3) * 3; x < (sector % 3) * 3 + 3; x++) {
        board[y][x] =
          space[y - Math.floor(sector / 3) * 3][x - (sector % 3) * 3];
      }
    }
  };
  const x1 = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
  ];

  const x2 = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ];
  fillBoard(board, product(x2, s0), 1);
  fillBoard(board, product(x1, s0), 2);
  fillBoard(board, product(s0, x1), 3);
  fillBoard(board, product(product(x2, s0), x1), 4);
  fillBoard(board, product(product(x1, s0), x1), 5);
  fillBoard(board, product(s0, x2), 6);
  fillBoard(board, product(product(x2, s0), x2), 7);
  fillBoard(board, product(product(x1, s0), x2), 8);
  return board;
};

const Sudoku: React.FunctionComponent = () => {
  const [sudokuBoard, setSudokuBoard] = useState<number[][]>([]);
  const [answerBoard, setAnswerBoard] = useState<number[][]>([]);
  useEffect(() => {
    const board = getSudokuBoard();
    setSudokuBoard(board);
    setAnswerBoard(board);
  }, []);

  return (
    <div className="font-pretendard flex items-center justify-center w-screen h-[100svh]">
      {sudokuBoard.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default Sudoku;
