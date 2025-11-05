import { create } from "zustand";
import type { Player } from "../game/type";
import { setPlayerColor } from "./helpers";

export type PlayerData = {
  name: string;
  password: string;
  color: string;
  points?: number;
  createdAt?: Date;
};

type State = {
  sessionPlayers: {
    player_1: string | null;
    player_2: string | null;
  };
};

type Actions = {
  addPlayer: (player: PlayerData) => string;
  getPlayer: (id: string) => PlayerData | null;
  getAllPlayers: () => { id: string; data: PlayerData }[];
  setSessionPlayer: (id: string, role: Player) => void;
  getSessionPlayers: () => ({ data: PlayerData; id: string } | null)[];
  updatePlayerPoints: (id: string, points: number) => void;
  logIn: (role: Player, data: PlayerData) => string | null;
  signUp: (role: Player, data: PlayerData) => string | null;
};

export const usePlayerStore = create<State & Actions>((set, get) => ({
  sessionPlayers: {
    player_1: null,
    player_2: null,
  },

  addPlayer: (player) => {
    const id = crypto.randomUUID();
    localStorage.setItem(id, JSON.stringify(player));
    return id;
  },
  getPlayer: (id) => {
    const player = localStorage.getItem(id);
    if (player === null) return;
    return JSON.parse(player);
  },
  getAllPlayers: () => {
    const ids = Object.keys(localStorage);
    const players = [];
    for (const id of ids) {
      const player = localStorage.getItem(id);
      if (player === null) continue;
      players.push({ id, data: JSON.parse(player) });
    }
    return players;
  },
  setSessionPlayer: (id, role) =>
    set((state) => ({
      sessionPlayers: { ...state.sessionPlayers, [role]: id },
    })),
  getSessionPlayers: () => {
    const { player_1, player_2 } = get().sessionPlayers;
    const players: ({ data: PlayerData; id: string } | null)[] = [null, null];
    if (player_1) {
      const playerData = get().getPlayer(player_1);
      if (playerData) players[0] = { data: playerData, id: player_1 };
    }
    if (player_2) {
      const playerData = get().getPlayer(player_2);
      if (playerData) players[1] = { data: playerData, id: player_2 };
    }
    return players;
  },
  updatePlayerPoints: (id, points) => {
    const player = sessionStorage.getItem(id);
    if (player === null) return;
    let playerData = JSON.parse(player);
    playerData = {
      ...playerData,
      points: playerData.points + points,
    };
    sessionStorage.setItem(id.toString(), JSON.stringify(playerData));
  },
  logIn: (role, data) => {
    const players = get().getAllPlayers();
    const account = players.find((el) => el.data.name === data.name);
    if (!account) return "Пользователь не найден";
    if (data.password === account.data.password) {
      get().setSessionPlayer(account.id, role);
      setPlayerColor(role, account.data.color);
      return null;
    } else {
      return "Неверное имя пользователя или пароль";
    }
  },
  signUp: (role, data) => {
    const players = get().getAllPlayers();
    const account = players.find((el) => el.data.name === data.name);
    if (account) return "Такой пользователь уже зарегистрирован!";
    const id = get().addPlayer(data);
    get().setSessionPlayer(id, role);
    setPlayerColor(role, data.color);
    return null;
  },
}));
