import { directions } from "./constants";
import type { WinnerData } from "./type";

export const generateInitialBoard: (
  x: number,
  y: number
) => (number | null)[][] = (x, y) =>
  Array.from({ length: x }, () => [...Array.from({ length: y }, () => null)]);

export const getYForColumn = (board: (number | null)[][], x: number) => {
  for (let y = board[0].length; y >= 0; y--) {
    if (board[x][y] === null) {
      return y;
    }
  }
  return null;
};

export const checkWin = (
  board: (number | null)[][],
  x: number,
  y: number,
  player: number
): WinnerData | null => {
  for (const [dir1, dir2] of directions) {
    let count = 1;
    const positions = [[x, y]];

    let [cx, cy] = [x, y];
    for (let i = 0; i < 3; i++) {
      cx += dir1[0];
      cy += dir1[1];
      if (
        cx < 0 ||
        cx >= board.length ||
        cy < 0 ||
        cy >= board[0].length ||
        board[cx][cy] !== player
      )
        break;
      count++;
      positions.push([cx, cy]);
    }

    [cx, cy] = [x, y];
    for (let i = 0; i < 3; i++) {
      cx += dir2[0];
      cy += dir2[1];
      if (
        cx < 0 ||
        cx >= board.length ||
        cy < 0 ||
        cy >= board[0].length ||
        board[cx][cy] !== player
      )
        break;
      count++;
      positions.push([cx, cy]);
    }

    if (count >= 4) {
      return {
        who: player === 1 ? "player_1" : "player_2",
        positions,
      };
    }
  }

  return null;
};
