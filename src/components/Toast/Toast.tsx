import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import styles from "./Toast.module.scss";

import CheckIcon from "./../../assets/images/icon-checkmark.svg?react";
import CloseIcon from "./../../assets/images/icon-cross.svg?react";

type ToastProps = {
  text: string;
  link?: {
    text: string;
    to: string;
  };
};

export type ToastRef = {
  show: ({ text, link }: ToastProps) => void;
};

const Toast = forwardRef<ToastRef>(function Toast(_, ref) {
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [visible, setVisible] = useState(false);

  const toastRoot = document.getElementById("toasts");

  useImperativeHandle(ref, () => ({
    show(props: ToastProps) {
      setToast(props);
      setVisible(true);
    },
  }));

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!toastRoot || !visible || !toast) return null;

  return createPortal(
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={styles["toast"]}
    >
      <CheckIcon className={styles["toast__checkmark-icon"]} />
      <span className={styles["toast__text"]}>{toast?.text}</span>
      {toast.link && (
        <Link className={styles["toast__link"]} to={toast.link.to}>
          {toast.link.text}
        </Link>
      )}
      <button onClick={() => setVisible(false)}>
        <CloseIcon className={styles["toast__close-icon"]} />
      </button>
    </div>,
    toastRoot
  );
});

export default Toast;
