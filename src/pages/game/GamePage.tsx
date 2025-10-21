import { useEffect, useRef } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Board from "../../widgets/board/Board";
import styles from "./gamePage.module.css";

const GamePage = () => {
  const { isEnd, resetGame } = useGameStore();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isEnd) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isEnd]);

  const handleClick = () => {
    dialogRef.current?.close();
    resetGame();
  };

  return (
    <div className={styles.wrapper}>
      <Board />
      <dialog ref={dialogRef}>
        Победил игрок я<button onClick={handleClick}>Перезапустить игру</button>
      </dialog>
    </div>
  );
};

export default GamePage;
