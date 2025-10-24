import { useGameStore } from "../../../entities/game/useGameStore";
import styles from "./currentPlayer.module.css";

const CurrentPlayer = () => {
  const { currentPlayer } = useGameStore();

  return (
    <div className={styles.wrapper} data-player={currentPlayer}>
      <span>{currentPlayer}</span>
      <div className={styles.playerDisplay} />
    </div>
  );
};

export default CurrentPlayer;
