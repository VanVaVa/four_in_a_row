import type { FC, ReactNode } from "react";
import styles from "./pageWrapper.module.css";

interface PageWrapperProps {
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.background} />
    {children}
  </div>
);

export default PageWrapper;
