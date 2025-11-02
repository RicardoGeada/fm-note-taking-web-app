import { Link } from "react-router-dom";

import styles from "./Toast.module.scss";

import CheckIcon from "./../../assets/images/icon-checkmark.svg?react";
import ErrorIcon from "./../../assets/images/icon-cross.svg?react";
import CloseIcon from "./../../assets/images/icon-cross.svg?react";
import type { ToastData } from "../../contexts/ToastContext/ToastContext";

export type ToastProps = {
  toast: ToastData;
  onClose: (id: string) => void;
};

export default function Toast({ toast, onClose }: ToastProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={styles["toast"]}
    >
      {!toast.error && <CheckIcon className={styles["toast__checkmark-icon"]} />}
      {toast.error && <ErrorIcon className={styles["toast__error-icon"]} />}
      <span className={styles["toast__text"]}>{toast.text}</span>
      {toast.link && (
        <Link className={styles["toast__link"]} to={toast.link.to}>
          {toast.link.text}
        </Link>
      )}
      <button className={styles["toast__close-button"]} onClick={() => onClose(toast.id)}>
        <CloseIcon className={styles["toast__close-icon"]} />
      </button>
    </div>
  );
}
