import { useGameStore } from "../../entities/game/useGameStore";
import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";

const Board = () => {
  const { getBoard, move, winData } = useGameStore();

  return (
    <div className={styles.board}>
      {getBoard().map((col, colIdx) => (
        <button
          disabled={!!winData?.length}
          key={colIdx}
          className={styles.column}
          onClick={() => move(colIdx)}
        >
          {col.map((el, idx) => {
            console.log(winData, [colIdx, idx]);

            return (
              <Chip
                key={idx}
                player={`player_${el}`}
                isConnected={
                  winData?.find((el) => el[0] === colIdx && el[1] === idx) !==
                  undefined
                }
              />
            );
          })}
        </button>
      ))}
    </div>
  );
};

export default Board;
