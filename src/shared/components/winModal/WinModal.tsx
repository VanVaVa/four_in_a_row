import { type FC } from "react";
import { useGameStore } from "../../../entities/game/useGameStore";
import styles from "./winModal.module.css";
import { usePlayerStore } from "../../../entities/player/usePlayerStore";

interface WinModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

const WinModal: FC<WinModalProps> = ({ dialogRef }) => {
  const { resetGame, currentPlayer, winData } = useGameStore();
  const { sessionPlayers, getPlayer } = usePlayerStore();

  const handleClick = () => {
    dialogRef.current?.close();
    resetGame();
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalBackground} />
      <div className={styles.modalContentWrapper}>
        <h2>
          {winData === "draw"
            ? "Ничья!"
            : `Победил игрок ${
                getPlayer(sessionPlayers[currentPlayer] || "")?.name
              }!`}
        </h2>
        <button className="filled shadow" onClick={handleClick}>
          Перезапустить игру
        </button>
        <button onClick={() => dialogRef.current?.close()}>закрыть</button>
      </div>
    </dialog>
  );
};

export default WinModal;
