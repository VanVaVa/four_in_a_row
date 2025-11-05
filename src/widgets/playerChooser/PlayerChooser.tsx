import { useState, type FC } from "react";
import styles from "./playerChooser.module.css";
import {
  usePlayerStore,
  type PlayerData,
} from "../../entities/player/usePlayerStore";
import type { Player } from "../../entities/game/type";

const INITIAL_PLAYER_DATA = {
  name: "",
  password: "",
  color: "#ffffff",
};

interface PlayerChooserProps {
  player: Player;
}

const PlayerChooser: FC<PlayerChooserProps> = ({ player }) => {
  const [choice, setChoice] = useState<"new" | "load">("new");
  const [accountData, setAccountData] =
    useState<PlayerData>(INITIAL_PLAYER_DATA);
  const { signUp, logIn } = usePlayerStore();
  const [isSigned, setIsSigned] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleFieldChange = (newValue: string, field: keyof PlayerData) => {
    setAccountData({ ...accountData, [field]: newValue });
  };

  const handleTabChange = (tab: "new" | "load") => {
    setChoice(tab);
    setIsSigned(false);
    setErrors(null);
    setAccountData(INITIAL_PLAYER_DATA);
  };

  return (
    <div className={styles.wrapper}>
      <h3>{player === "player_1" ? "Игрок 1" : "Игрок 2"}</h3>
      <div>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.tab}
            type="button"
            onClick={() => handleTabChange("new")}
            data-current={choice === "new"}
          >
            Создать
          </button>
          <button
            className={styles.tab}
            type="button"
            onClick={() => handleTabChange("load")}
            data-current={choice === "load"}
          >
            Войти
          </button>
        </div>
        <div className={styles.tabContentWrapper}>
          <input
            placeholder="имя"
            value={accountData?.name}
            disabled={isSigned}
            onChange={(e) => handleFieldChange(e.target.value, "name")}
          />
          <input
            placeholder="пароль"
            type="password"
            value={accountData?.password}
            disabled={isSigned}
            onChange={(e) => handleFieldChange(e.target.value, "password")}
          />
          {choice === "new" && (
            <div className={styles.colorPickerWrapper}>
              <label htmlFor="color">Цвет:</label>
              <input
                id="color"
                type="color"
                value={accountData.color}
                disabled={isSigned}
                onChange={(e) => handleFieldChange(e.target.value, "color")}
              />
            </div>
          )}
          <button
            className="filled"
            type="button"
            disabled={isSigned}
            onClick={() => {
              if (!accountData) return;
              let signErrors: string | null = null;
              if (choice === "new") signErrors = signUp(player, accountData);
              else signErrors = logIn(player, accountData);
              if (!signErrors) setIsSigned(true);
              setErrors(signErrors);
            }}
          >
            {choice === "new" ? "Зарегистрироваться" : "Войти"}
          </button>
          <span className={styles.error}>{errors}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerChooser;
