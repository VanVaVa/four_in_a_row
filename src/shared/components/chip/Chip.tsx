import type { FC } from "react";
import styles from "./chip.module.css";
import React from "react";

interface ChipProps {
  player?: string;
}

const Chip: FC<ChipProps> = ({ player }) => (
  <div className={styles.chip} data-player={player} />
);

export default React.memo(Chip);
