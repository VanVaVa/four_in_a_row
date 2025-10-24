import { useEffect, useRef } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Board from "../../widgets/board/Board";
import styles from "./gamePage.module.css";
import CurrentPlayer from "../../shared/components/currentPlayer/CurrentPlayer";
import Menu from "../../widgets/menu/Menu";
import WinModal from "../../shared/components/winModal/WinModal";

const GamePage = () => {
  const { winData } = useGameStore();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (winData?.length) {
      setTimeout(() => {
        dialogRef.current?.showModal();
      }, 1700);
    } else dialogRef.current?.close();
  }, [winData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <Board />
      <Menu />
      <CurrentPlayer />
      <WinModal dialogRef={dialogRef} />
    </div>
  );
};

export default GamePage;
