import type { Ref } from "react";
import styles from "./ArchiveNoteModal.module.scss";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";

type ArchiveNoteModalProps = {
  ref: Ref<HTMLDialogElement>;
};

export default function ArchiveNoteModal({ ref }: ArchiveNoteModalProps) {
  return (
    <dialog className={styles["archive-note-modal"]} ref={ref}>
      <div className={styles["archive-note-modal__top"]}>
        <div className={styles["archive-note-modal__icon"]}>
          <ArchiveIcon />
        </div>

        <div className={styles["archive-note-modal__text"]}>
          <h2>Archive Note</h2>
          <p>
            Are you sure you want to archive this note? You can find it in the
            Archived Notes section and restore it anytime.
          </p>
        </div>
      </div>
      <div className="hl-separator"></div>
      <form method="dialog" className={styles["archive-note-modal__form"]}>
        <button className="btn btn--secondary">Cancel</button>
        <button className="btn btn--primary">Archive Note</button>
      </form>
    </dialog>
  );
}
