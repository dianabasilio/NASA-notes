import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ children }) {
  return (
    <div className={styles.backdrop}>
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </div>
  );
}
