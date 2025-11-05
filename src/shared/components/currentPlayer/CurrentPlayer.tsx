import { useGameStore } from "../../../entities/game/useGameStore";
import { usePlayerStore } from "../../../entities/player/usePlayerStore";
import styles from "./currentPlayer.module.css";

const CurrentPlayer = () => {
  const { currentPlayer } = useGameStore();
  const { getSessionPlayers } = usePlayerStore();

  return (
    <div className={styles.wrapper} data-player={currentPlayer}>
      <span>
        {getSessionPlayers()[currentPlayer === "player_1" ? 0 : 1]?.data.name}
      </span>
      <div className={styles.playerDisplay} />
    </div>
  );
};

export default CurrentPlayer;
