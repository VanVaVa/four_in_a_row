import { type ReactNode, type FC, type RefObject } from "react";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./modal.module.css";

interface ModalProps {
  children?: ReactNode;
  ref: RefObject<HTMLDialogElement | null>;
}

const Modal: FC<ModalProps> = ({ children, ref }) => {
  return (
    <dialog ref={ref} className={styles.modalWrapper}>
      <div className={styles.closeWrapper}>
        <button onClick={() => ref.current?.close()}>
          <CloseIcon width={40} height={40} />
        </button>
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
