import { useGameStore } from "../../entities/game/useGameStore";
import ResetIcon from "../../shared/icons/ResetIcon";
import styles from "./menu.module.css";

const Menu = () => {
  const { resetGame } = useGameStore();

  return (
    <div className={styles.wrapper}>
      <button onClick={resetGame}>
        <ResetIcon fill={"var(--color-green)"} />
      </button>
    </div>
  );
};

export default Menu;
