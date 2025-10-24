import { useEffect, useRef } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Board from "../../widgets/board/Board";
import CurrentPlayer from "../../shared/components/currentPlayer/CurrentPlayer";
import Menu from "../../widgets/menu/Menu";
import WinModal from "../../shared/components/winModal/WinModal";
import PageWrapper from "../../shared/components/pageWrapper/PageWrapper";

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
    <PageWrapper>
      <Board />
      <Menu />
      <CurrentPlayer />
      <WinModal dialogRef={dialogRef} />
    </PageWrapper>
  );
};

export default GamePage;
