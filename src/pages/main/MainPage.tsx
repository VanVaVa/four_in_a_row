import { useRef } from "react";
import PageWrapper from "../../shared/components/pageWrapper/PageWrapper";
import LeaderboardIcon from "../../shared/icons/LeaderboardIcon";
import PlayIcon from "../../shared/icons/PlayIcon";
import styles from "./mainPage.module.css";
import Modal from "../../shared/components/modal/Modal";
import PlayerChooser from "../../widgets/playerChooser/PlayerChooser";
import { usePlayerStore } from "../../entities/player/usePlayerStore";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { getSessionPlayers } = usePlayerStore();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className={`shadow ${styles.menuWrapper}`}>
        <h1 className={styles.title}>Четыре в ряд</h1>
        <button
          className="filled"
          onClick={() => modalRef.current?.showModal()}
        >
          <PlayIcon fill="var(--color-blue)" className="shadow" />
        </button>
        <button className="filled">
          <LeaderboardIcon fill="var(--color-blue)" className="shadow" />
        </button>
      </div>
      <Modal ref={modalRef}>
        <h2>Новая игра</h2>
        <form className={styles.startModal}>
          <PlayerChooser player="player_1" />
          <PlayerChooser player="player_2" />
        </form>
        <button
          className="filled"
          disabled={getSessionPlayers().includes(null)}
          onClick={() => navigate("/game")}
        >
          Начать игру
        </button>
      </Modal>
    </PageWrapper>
  );
};

export default MainPage;
