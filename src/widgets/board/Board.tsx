import { useState } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";
import { generateInitialBoard } from "./constants";

const Board = () => {
  const { setPlayer, currentPlayer } = useGameStore();
  const [board, setBoard] = useState(generateInitialBoard(7, 6));

  return (
    <div className={styles.board}>
      {board.map((row, rowIdx) =>
        row.map((el, idx) => (
          <Chip
            key={idx}
            player={`player_${el}`}
            onClick={() => {
              setBoard((prev) => {
                const newBoard = Array.from(prev);
                newBoard[rowIdx][idx] = currentPlayer === "player_1" ? 1 : 2;
                return newBoard;
              });
              setPlayer();
            }}
          />
        ))
      )}
    </div>
  );
};

export default Board;
