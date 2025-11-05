import { usePlayerStore } from "../../entities/player/usePlayerStore";
import PageWrapper from "../../shared/components/pageWrapper/PageWrapper";
import styles from "./leaderboard.module.css";

const Leaderboard = () => {
  const { getAllPlayers } = usePlayerStore();

  return (
    <PageWrapper>
      <div className={`${styles.wrapper} shadow`}>
        <h1 className={styles.header}>Таблица лидеров</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th className={styles.cell}>№</th>
              <th className={styles.cell}>Игрок</th>
              <th className={styles.cell}>Очки</th>
              <th className={styles.cell}>Цвет</th>
            </tr>
          </thead>
          <tbody>
            {getAllPlayers()
              .sort((a, b) => (b.data.points || 0) - (a.data.points || 0))
              .map((el, idx) => (
                <tr className={styles.row}>
                  <td className={styles.cell}>{idx + 1}</td>
                  <td className={styles.cell}>{el.data.name}</td>
                  <td className={styles.cell}>{el.data.points}</td>
                  <td className={styles.cell}>
                    <div
                      style={{
                        backgroundColor: el.data.color,
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Leaderboard;
