import { checkWin, generateInitialBoard, getYForColumn } from "./helpers";
import type { BoardState, StatisticsRecord } from "./useGameStore";

export const validator: (
  moves: number[]
) => Record<string, StatisticsRecord> = (moves: number[]) => {
  let statistics: Record<string, StatisticsRecord> = {
    step_0: {
      player_1: [],
      player_2: [],
      board_state: "waiting",
    },
  };

  const board = generateInitialBoard(7, 6);

  for (let move = 0; move < moves.length; move++) {
    const x = moves[move];
    const y = getYForColumn(board, x);
    const player = (move % 2) + 1;

    if (y === null) continue;

    board[x][y] = player;

    const winnerData = checkWin(board, x, y, player);

    let boardState: BoardState;
    if (moves.length >= 7 * 6) {
      boardState = "draw";
    } else {
      boardState = winnerData ? "win" : "pending";
    }

    const stepData: StatisticsRecord = {
      player_1:
        move % 2 === 0
          ? [...statistics[`step_${move}`].player_1, [x, y]]
          : statistics[`step_${move}`].player_1,
      player_2:
        move % 2 === 1
          ? [...statistics[`step_${move}`].player_2, [x, y]]
          : statistics[`step_${move}`].player_2,
      board_state: boardState,
      ...(winnerData && { winner: winnerData }),
    };

    statistics = {
      ...statistics,
      [`step_${move + 1}`]: stepData,
    };
  }

  return statistics;
};
