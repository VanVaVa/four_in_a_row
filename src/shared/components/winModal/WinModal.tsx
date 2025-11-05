import { useEffect, type FC } from "react";
import { useGameStore } from "../../../entities/game/useGameStore";
import styles from "./winModal.module.css";
import { usePlayerStore } from "../../../entities/player/usePlayerStore";

interface WinModalProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

const WinModal: FC<WinModalProps> = ({ dialogRef }) => {
  const { resetGame, currentPlayer, winData } = useGameStore();
  const { getSessionPlayers, updatePlayerPoints } = usePlayerStore();
  const currentPlayerIndex = currentPlayer === "player_1" ? 0 : 1;

  useEffect(() => {
    const player = getSessionPlayers()[currentPlayerIndex]?.id;
    if (!player) return;
    updatePlayerPoints(player, 100);
  }, [currentPlayerIndex, getSessionPlayers, updatePlayerPoints]);

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
                getSessionPlayers()[currentPlayerIndex]?.data.name
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
