import { useState } from "react";
import { useGameStore } from "../../entities/game/useGameStore";
import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";

const Board = () => {
  const { getBoard, move, winData } = useGameStore();
  const [activeColumn, setActiveColumn] = useState<number | null>(null);

  return (
    <div className={styles.board}>
      <div
        style={{
          display: activeColumn === null ? "none" : "block",
          left: 80 * (activeColumn || 0),
        }}
        className={styles.columnPointer}
      />
      {getBoard().map((col, colIdx) => (
        <button
          disabled={!!winData?.length}
          key={colIdx}
          className={styles.column}
          onClick={() => move(colIdx)}
          onMouseEnter={() => setActiveColumn(colIdx)}
          onMouseLeave={() => setActiveColumn(null)}
        >
          {col.map((el, idx) => (
            <Chip
              key={idx}
              player={`player_${el}`}
              isConnected={
                winData !== "draw" &&
                winData?.find((el) => el[0] === colIdx && el[1] === idx) !==
                  undefined
              }
            />
          ))}
        </button>
      ))}
    </div>
  );
};

export default Board;
