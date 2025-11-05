import { useGameStore } from "../../../entities/game/useGameStore";
import { usePlayerStore } from "../../../entities/player/usePlayerStore";
import styles from "./currentPlayer.module.css";

const CurrentPlayer = () => {
  const { currentPlayer } = useGameStore();
  const { sessionPlayers, getPlayer } = usePlayerStore();

  return (
    <div className={styles.wrapper} data-player={currentPlayer}>
      <span>{getPlayer(sessionPlayers[currentPlayer] || "")?.name}</span>
      <div className={styles.playerDisplay} />
    </div>
  );
};

export default CurrentPlayer;
