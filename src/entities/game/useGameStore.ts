import { create } from "zustand";
import { generateInitialBoard, getYForColumn } from "./helpers";
import { validator } from "./validator";

export type Player = "player_1" | "player_2";

export type StatisticsRecord = {
  player_1: number[][];
  player_2: number[][];
  board_state: "waiting" | "pending" | "win" | "draw";
  winner?: WinnerData;
};

export type WinnerData = {
  who: Player;
  positions: number[][];
};

type State = {
  currentPlayer: Player;
  moves: number[];
  isEnd: boolean;
};

type Actions = {
  setPlayer: VoidFunction;
  getBoard: () => (number | null)[][];
  move: (x: number) => void;
  resetGame: VoidFunction;
};

export const useGameStore = create<State & Actions>((set, get) => ({
  currentPlayer: "player_1",
  moves: [],
  isEnd: false,

  setPlayer: () =>
    set((state) => ({
      currentPlayer:
        state.currentPlayer === "player_1" ? "player_2" : "player_1",
    })),
  getBoard: () => {
    const { moves } = get();
    const board = generateInitialBoard(7, 6);

    for (let idx = 0; idx < moves.length; idx++) {
      const el = moves[idx];
      const y = getYForColumn(board, el);
      if (y === null) continue;
      board[el][y] = idx % 2 === 0 ? 1 : 2;
    }
    return board;
  },
  move: (x) =>
    set((state) => {
      if (get().moves.filter((el) => el === x).length >= 6) return {};
      const moves = [...state.moves, x];
      const statistics = validator(moves);
      const lastMove = statistics?.[`step_${moves.length}`];
      state.setPlayer();
      return { moves, isEnd: lastMove.board_state === "win" ? true : false };
    }),
  resetGame: () =>
    set(() => {
      return { moves: [], currentPlayer: "player_1" };
    }),
}));
