import Chip from "../../shared/components/chip/Chip";
import styles from "./board.module.css";

const boardData = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [2, null, null, null, null, null, null],
  [1, null, null, null, null, null, null],
];

const Board = () => {
  return (
    <div className={styles.board}>
      {boardData.map((row) =>
        row.map((el, idx) => <Chip key={idx} player={`player_${el}`} />)
      )}
    </div>
  );
};

export default Board;
