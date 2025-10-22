import type { Ref } from "react";
import styles from "./DeleteNoteModal.module.scss";
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";

type DeleteNodeModalProps = {
  ref: Ref<HTMLDialogElement>;
};

export default function DeleteNodeModal({ ref }: DeleteNodeModalProps) {
  return (
    <dialog className={styles["delete-note-modal"]} ref={ref}>
      <div className={styles["delete-note-modal__top"]}>
        <div className={styles["delete-note-modal__icon"]}>
          <DeleteIcon />
        </div>

        <div className={styles["delete-note-modal__text"]}>
          <h2>Delete Note</h2>
          <p>
            Are you sure you want to permanently delete this note? This action
            cannot be undone.
          </p>
        </div>
      </div>
      <div className="hl-separator"></div>
      <form method="dialog" className={styles["delete-note-modal__form"]}>
        <button className="btn btn--secondary">Cancel</button>
        <button className="btn btn--red">Delete Note</button>
      </form>
    </dialog>
  );
}
