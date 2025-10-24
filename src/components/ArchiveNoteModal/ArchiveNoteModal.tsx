import { forwardRef, useImperativeHandle, useRef} from "react";
import styles from "./ArchiveNoteModal.module.scss";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import { createPortal } from "react-dom";

export type ArchiveNoteModalRef = {
  open: () => void;
};

const ArchiveNoteModal = forwardRef<ArchiveNoteModalRef>(function ArchiveNoteModal(_, ref) {
  
  const modalRoot = document.getElementById("modals");
  const dialog = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
          dialog.current?.showModal();
      },
    }
  })

  if(!modalRoot) return null;

  return createPortal(
    <dialog className={styles["archive-note-modal"]} ref={dialog}>
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
    </dialog>,
    modalRoot
  );
})

export default ArchiveNoteModal;
