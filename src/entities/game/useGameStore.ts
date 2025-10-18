import { create } from "zustand";
import { generateInitialBoard } from "./helpers";
import { validator } from "./validator";

export type Player = "player_1" | "player_2";

export type StatisticsRecord = {
  player_1: number[][];
  player_2: number[][];
  board_state: "waiting" | "pending" | "win" | "draw";
  winner?: {
    who: Player;
    positions: number[][];
  };
};

type State = {
  currentPlayer: Player;
  board: (number | null)[][];
  statistics: Record<string, StatisticsRecord>;
  moves: number[];
};

type Actions = {
  setPlayer: VoidFunction;
  setBoard: (x: number) => void;
  getYForColumn: (x: number) => number | null;
};

export const useGameStore = create<State & Actions>((set, get) => ({
  currentPlayer: "player_1",
  board: generateInitialBoard(7, 6),
  moves: [],
  statistics: {
    step_0: {
      player_1: [],
      player_2: [],
      board_state: "waiting",
    },
  },

  setPlayer: () =>
    set((state) => ({
      currentPlayer:
        state.currentPlayer === "player_1" ? "player_2" : "player_1",
    })),
  setBoard: (x) =>
    set((state) => {
      const moves = [...state.moves];
      const board = Array.from(state.board);
      for (let y = state.board[0].length; y >= 0; y--) {
        if (board[x][y] === null) {
          moves.push(x);
          board[x][y] = state.currentPlayer === "player_1" ? 1 : 2;
          console.log("validation:");
          validator(moves);
          state.setPlayer();
          break;
        } else continue;
      }
      return { board, moves };
    }),
  getYForColumn: (x) => {
    const board = get().board;
    for (let y = board[0].length; y >= 0; y--) {
      if (board[x][y] === null) {
        return y - 1;
      }
    }
    return null;
  },
}));
