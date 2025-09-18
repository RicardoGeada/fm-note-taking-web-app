import type { Note } from "../../types/note";
import styles from "./NoteListItem.module.scss";

export default function NoteListItem(note: Note) {
    
  const lastEdited = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(note.last_edited));

  return (
    <li className={styles["note-item"]} key={note.id}>
      <span className={styles["note-item__title"]}>{note.title}</span>
      {note.tags.length > 0 && (
        <div className={styles["note-item__tags"]}>
          {note.tags.map((tag) => (
            <div key={tag} className={styles["note-item__tag"]}>{tag}</div>
          ))}
        </div>
      )}

      <time
        className={styles["note-item__last-edited"]}
        dateTime={note.last_edited}
      >
        {lastEdited}
      </time>
    </li>
  );
}
