import { useGameStore } from "../../entities/game/useGameStore";
import ResetIcon from "../../shared/icons/ResetIcon";
import HomeIcon from "../../shared/icons/HomeIcon";
import styles from "./menu.module.css";

const Menu = () => {
  const { resetGame } = useGameStore();

  return (
    <div className={styles.wrapper}>
      <button onClick={resetGame}>
        <ResetIcon fill={"var(--color-green)"} className="shadow" />
      </button>
      <a href="/">
        <HomeIcon fill={"var(--color-green)"} className="shadow" />
      </a>
    </div>
  );
};

export default Menu;
