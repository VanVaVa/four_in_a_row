import { useEffect, useRef } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Board from "../../widgets/board/Board";
import CurrentPlayer from "../../shared/components/currentPlayer/CurrentPlayer";
import Menu from "../../widgets/menu/Menu";
import WinModal from "../../shared/components/winModal/WinModal";
import PageWrapper from "../../shared/components/pageWrapper/PageWrapper";
import { usePlayerStore } from "../../entities/player/usePlayerStore";

const GamePage = () => {
  const { winData, currentPlayer } = useGameStore();
  const { updatePlayerPoints, sessionPlayers } = usePlayerStore();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (winData?.length) {
      setTimeout(() => {
        dialogRef.current?.showModal();
        const player = sessionPlayers[currentPlayer];
        if (!player) return;
        updatePlayerPoints(player, 100);
      }, 1700);
    } else dialogRef.current?.close();
  }, [currentPlayer, sessionPlayers, updatePlayerPoints, winData]);

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
