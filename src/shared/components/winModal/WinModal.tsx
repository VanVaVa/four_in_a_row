import type { FC } from "react";
import { useGameStore } from "../../../entities/game/useGameStore";
import styles from "./winModal.module.css";

interface WinModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

const WinModal: FC<WinModalProps> = ({ dialogRef }) => {
  const { resetGame, currentPlayer } = useGameStore();

  const handleClick = () => {
    dialogRef.current?.close();
    resetGame();
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalBackground} />
      <div className={styles.modalContentWrapper}>
        <h2>Победил игрок {currentPlayer}</h2>
        <button className="filled" onClick={handleClick}>
          Перезапустить игру
        </button>
        <button onClick={() => dialogRef.current?.close()}>закрыть</button>
      </div>
    </dialog>
  );
};

export default WinModal;
