import type { FC } from "react";
import styles from "./chip.module.css";
import React from "react";

interface ChipProps {
  player?: string;
  isConnected?: boolean;
}

const Chip: FC<ChipProps> = ({ player, isConnected = false }) => (
  <div
    className={styles.chip}
    data-player={player}
    data-connected={isConnected}
  />
);

export default React.memo(Chip);
