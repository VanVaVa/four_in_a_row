import type { FC } from "react";
import styles from "./chip.module.css";
import React from "react";

interface ChipProps {
  player?: string;
  onClick?: VoidFunction;
}

const Chip: FC<ChipProps> = ({ player, onClick }) => (
  <button className={styles.chip} data-player={player} onClick={onClick} />
);

export default React.memo(Chip);
