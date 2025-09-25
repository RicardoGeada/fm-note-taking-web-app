import NoteListItem from "../../../components/NoteListItem/NoteListItem";
import styles from "./AllNotes.module.scss";
import DUMMY_NOTES from "../../../dummy-notes";
import { useParams } from "react-router-dom";
import NoteDetail from "../../../components/NoteDetail/NoteDetail";

export default function AllNotes() {
  const { noteId } = useParams();

  return (
    <>
      <div className={styles["all-notes"]}>
        <h2 className={styles["all-notes__headline"]}>All Notes</h2>
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
