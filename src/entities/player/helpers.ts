import type { Player } from "../game/useGameStore";

export const setPlayerColor = (role: Player, color: string) => {
  const root = document.documentElement;

  if (role === "player_1") {
    root.style.setProperty("--color-player-1", color);
  } else {
    root.style.setProperty("--color-player-2", color);
  }
};
