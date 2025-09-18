import NoteListItem from "../../../components/NoteListItem/NoteListItem";
import styles from "./AllNotes.module.scss";
import DUMMY_NOTES from "../../../dummy-notes";

export default function AllNotes() {
  return (
    <div className={styles["all-notes"]}>
      <h2 className={styles["all-notes__headline"]}>All Notes</h2>
      <ul className={styles["notes-list"]}>
        {DUMMY_NOTES.map( note => <NoteListItem key={note.id} {...note}/>)}
      </ul>
    </div>
  );
}
