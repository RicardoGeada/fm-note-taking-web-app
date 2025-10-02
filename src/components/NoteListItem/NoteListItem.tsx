import { Link, useLocation } from "react-router-dom";
import type { Note } from "../../types/note";
import { formatDate } from "../../util/date";
import styles from "./NoteListItem.module.scss";

export default function NoteListItem(note: Note) {
  const location = useLocation();  
  const lastEdited = formatDate(note.last_edited);
  console.log(location);

  return (
    <li className={styles["note-item"]} key={note.id}>
      <Link className={styles["note-item__link"]} to={`${location.pathname}/${note.id}`}>

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
      </Link>
    </li>
  );
}
