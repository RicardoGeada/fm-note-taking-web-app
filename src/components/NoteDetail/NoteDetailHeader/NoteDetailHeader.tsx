import styles from "./NoteDetailHeader.module.scss";
import clsx from "clsx";
import ArrowLeftIcon from "../../../assets/images/icon-arrow-left.svg?react";
import DeleteIcon from "../../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "../../../assets/images/icon-archive.svg?react";
import { useNavigate } from "react-router-dom";


export default function NoteDetailHeader() {
    const navigate = useNavigate();  

  return (
    <>
      <header
        className={styles["note__controls"]}
        role="toolbar"
        aria-label="Note actions"
      >
        <button
          className={styles["note__controls-button"]}
          onClick={() => navigate("..")}
        >
          <ArrowLeftIcon />
          <span>Go Back</span>
        </button>

        <div className={styles["note__controls-right"]}>
          <button className={styles["note__controls-button"]}>
            <DeleteIcon />
          </button>
          <button className={styles["note__controls-button"]}>
            <ArchiveIcon />
          </button>
          <button className={styles["note__controls-button"]}>
            <span>Cancel</span>
          </button>
          <button
            className={clsx(
              styles["note__controls-button"],
              styles["note__controls-button--primary"]
            )}
          >
            <span>Save Note</span>
          </button>
        </div>
      </header>
    </>
  );
}
