import { Link } from "react-router-dom";

import styles from "./Toast.module.scss";

import CheckIcon from "./../../assets/images/icon-checkmark.svg?react";
import CloseIcon from "./../../assets/images/icon-cross.svg?react";
import { createPortal } from "react-dom";


type ToastProps = {
    text: string;
    link?: {
        text: string,
        to: string,
    }
}

export default function Toast({text, link}: ToastProps) {
    const toastRoot = document.getElementById("toasts");

    if(!toastRoot) return null;


    return createPortal(
        <div
            role="alert"
            aria-live="polite"
            aria-atomic="true"
            className={styles["toast"]}
        >
        <CheckIcon className={styles["toast__checkmark-icon"]}/>
        <span className={styles["toast__text"]}>{text}</span>
        {link && <Link className={styles["toast__link"]} to={link.to}>{link.text}</Link>}
        <CloseIcon className={styles["toast__close-icon"]}/>
        </div>, 
        toastRoot
    )
}