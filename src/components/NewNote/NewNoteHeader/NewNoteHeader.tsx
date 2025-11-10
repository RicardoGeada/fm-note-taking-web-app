import styles from "./NewNoteHeader.module.scss";
import clsx from "clsx";
import ArrowLeftIcon from "../../../assets/images/icon-arrow-left.svg?react";
import { useNavigate } from "react-router-dom";

type NewNoteHeaderProps = {
  isSubmitting: boolean,
}

export default function NewNoteHeader({ isSubmitting }: NewNoteHeaderProps ) {
    const navigate = useNavigate();

  return (
    <>
      <header
        className={styles["new-note__controls"]}
        role="toolbar"
        aria-label="Note actions"
      >
        <button
          className={styles["new-note__controls-button"]}
          onClick={() => navigate("..")}
        >
          <ArrowLeftIcon />
          <span>Go Back</span>
        </button>

        <div className={styles["new-note__controls-right"]}>
          <button className={styles["new-note__controls-button"]} type="reset">
            <span>Cancel</span>
          </button>
          <button
            className={clsx(
              styles["new-note__controls-button"],
              styles["new-note__controls-button--primary"]
            )}
            type="submit"
            disabled={isSubmitting}
          >
            <span>Save Note</span>
          </button>
        </div>
      </header>
    </>
  );
}
