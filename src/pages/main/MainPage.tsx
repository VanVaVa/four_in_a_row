import PageWrapper from "../../shared/components/pageWrapper/PageWrapper";
import LeaderboardIcon from "../../shared/icons/LeaderboardIcon";
import PlayIcon from "../../shared/icons/PlayIcon";
import styles from "./mainPage.module.css";

const MainPage = () => {
  return (
    <PageWrapper>
      <div className={`shadow ${styles.menuWrapper}`}>
        <h1 className={styles.title}>Четыре в ряд</h1>
        <button className="filled shadow">
          <PlayIcon fill="var(--color-blue)" className="shadow" />
        </button>
        <button className="filled shadow">
          <LeaderboardIcon fill="var(--color-blue)" className="shadow" />
        </button>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
