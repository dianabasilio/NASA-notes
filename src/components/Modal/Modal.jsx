import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ children, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </div>
  );
}
