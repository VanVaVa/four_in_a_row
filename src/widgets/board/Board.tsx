import { useGameStore } from "../../entities/game/useGameStore";
import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";

const Board = () => {
  const { getBoard, move } = useGameStore();

  return (
    <div className={styles.board}>
      {getBoard().map((col, colIdx) => (
        <button
          key={colIdx}
          className={styles.column}
          onClick={() => move(colIdx)}
        >
          {col.map((el, idx) => (
            <Chip key={idx} player={`player_${el}`} />
          ))}
        </button>
      ))}
    </div>
  );
};

export default Board;
