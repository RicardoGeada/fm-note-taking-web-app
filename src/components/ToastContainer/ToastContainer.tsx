import { createPortal } from "react-dom";

import styles from "./ToastContainer.module.scss";
import type { ToastData } from "../../contexts/ToastContext/ToastContext";
import Toast from "../Toast/Toast";

type ToastContainerProps = {
  toasts: ToastData[];
  onClose: (id: string) => void;
};

export default function ToastContainer({
  toasts,
  onClose,
}: ToastContainerProps) {
  const toastRoot = document.getElementById("toasts");
  if (!toastRoot) return null;

  return createPortal(
    <div className={styles["toasts-container"]}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>,
    toastRoot
  );
}
