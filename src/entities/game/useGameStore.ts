import { create } from "zustand";

type State = {
  currentPlayer: "player_1" | "player_2";
};

type Actions = {
  setPlayer: VoidFunction;
};

export const useGameStore = create<State & Actions>((set) => ({
  currentPlayer: "player_1",
  setPlayer: () =>
    set((state) => ({
      currentPlayer:
        state.currentPlayer === "player_1" ? "player_2" : "player_1",
    })),
}));
