import { NavLink } from "react-router-dom";
import type { Note } from "../../types/note";
import { formatDate } from "../../util/date";
import styles from "./NoteListItem.module.scss";
import clsx from "clsx";
import capitalize from "../../utils/capitalize";

type NoteListItemProps = {
  note: Note;
  basePath: string;
};

export default function NoteListItem({ note, basePath }: NoteListItemProps) {
  const lastEdited = formatDate(note.last_edited);

  return (
    <li className={styles["note-item"]} key={note.id}>
      <NavLink
        to={`${basePath}/${note.id}`}
        className={({ isActive }) =>
          isActive
            ? clsx(styles["note-item__link"], styles["note-item__link--active"])
            : styles["note-item__link"]
        }
      >
        <span className={styles["note-item__title"]}>{note.title}</span>
        {note.tags.length > 0 && (
          <div className={styles["note-item__tags"]}>
            {note.tags.map((tag) => (
              <div key={tag} className={styles["note-item__tag"]}>
                {capitalize(tag)}
              </div>
            ))}
          </div>
        )}

        <time
          className={styles["note-item__last-edited"]}
          dateTime={note.last_edited}
        >
          {lastEdited}
        </time>
      </NavLink>
    </li>
  );
}
