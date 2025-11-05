export type Player = "player_1" | "player_2";

export type BoardState = "waiting" | "pending" | "win" | "draw";

export type StatisticsRecord = {
  player_1: number[][];
  player_2: number[][];
  board_state: BoardState;
  winner?: WinnerData;
};

export type WinnerData = {
  who: Player;
  positions: number[][];
};
