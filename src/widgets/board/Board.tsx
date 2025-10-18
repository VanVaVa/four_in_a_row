import { useGameStore } from "../../entities/game/useGameStore";
import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";

const Board = () => {
  const { board, setBoard } = useGameStore();

  return (
    <div className={styles.board}>
      {board.map((col, colIdx) => (
        <div key={colIdx} className={styles.column}>
          {col.map((el, idx) => (
            <Chip
              key={idx}
              player={`player_${el}`}
              onClick={() => setBoard(colIdx)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
