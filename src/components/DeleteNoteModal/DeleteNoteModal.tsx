import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./DeleteNoteModal.module.scss";
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";
import { useNotesContext } from "../../hooks/useNotesContext";
import { useParams } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export type DeleteNoteModalRef = {
  open: () => void;
};

const DeleteNoteModal = forwardRef<DeleteNoteModalRef>(function DeleteNoteModal(
  _,
  ref
) {
  const modalRoot = document.getElementById("modals");
  const dialog = useRef<HTMLDialogElement | null>(null);
  const { deleteNote } = useNotesContext();
  const { noteId } = useParams();
  const { showToast } = useToast();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });

  if (!modalRoot) return null;

  function handleDelete() {
    if (!noteId) return;

    deleteNote(noteId)
      .then(() => {
        showToast({ text: "Note permanently deleted." });
      })
      .catch(() => showToast({ text: "Error deleting note", error: true }));
  }

  return createPortal(
    <dialog className={styles["delete-note-modal"]} ref={dialog}>
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
        <button className="btn btn--secondary">
          Cancel
        </button>
        <button className="btn btn--red" onClick={handleDelete}>
          Delete Note
        </button>
      </form>
    </dialog>,
    modalRoot
  );
});

export default DeleteNoteModal;
