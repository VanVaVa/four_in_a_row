import { generateInitialBoard } from "./helpers";
import type { StatisticsRecord } from "./useGameStore";

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
    for (let y = board[0].length; y >= 0; y--) {
      if (board[moves[move]][y] === null) {
        if (move % 2 === 0) {
          board[moves[move]][y] = 1;
          statistics = {
            ...statistics,
            [`step_${move + 1}`]: {
              player_1: [...statistics[`step_${move}`].player_1, [move, y]],
              player_2: statistics[`step_${move}`].player_2,
              board_state: "pending",
            },
          };
        } else {
          board[moves[move]][y] = 2;
          statistics = {
            ...statistics,
            [`step_${move + 1}`]: {
              player_1: statistics[`step_${move}`].player_1,
              player_2: [...statistics[`step_${move}`].player_2, [move, y]],
              board_state: "pending",
            },
          };
        }
        statistics[`step_${move}`].board_state = "pending";
        break;
      }
    }
  }

  console.log(statistics);
  return statistics;
};
