import NoteListItem from "../../../components/NoteListItem/NoteListItem";
import styles from "./AllNotes.module.scss";
import DUMMY_NOTES from "../../../dummy-notes";
import { useParams } from "react-router-dom";
import NoteDetail from "../../../components/NoteDetail/NoteDetail";
import AddIcon from "./../../../assets/images/icon-plus.svg?react";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

export default function AllNotes() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();

  return (
    <>
      <div className={styles["all-notes"]}>
        {!isDesktop && (
          <h2 className={styles["all-notes__headline"]}>All Notes</h2>
        )}

        <button className={clsx("btn btn--primary",styles["new-note-button"], isDesktop ? "" : "btn--circle")}>
          {isDesktop ? <span>+ Create New Note</span> : <AddIcon />}
        </button>

        {DUMMY_NOTES.length > 0 && (
          <ul className={styles["notes-list"]}>
            {DUMMY_NOTES.filter((note) => !note.archived).map((note) => (
              <NoteListItem key={note.id} {...note} />
            ))}
          </ul>
        )}

        {DUMMY_NOTES.length === 0 && (
          <div className={styles["all-notes__empty-notification"]}>
            You don't have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </div>
        )}
      </div>

      {noteId && (
        <div className={styles["overlay"]}>
          <NoteDetail noteId={noteId} />
        </div>
      )}
    </>
  );
}
