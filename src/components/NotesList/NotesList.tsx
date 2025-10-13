import clsx from "clsx";
import styles from "./NotesList.module.scss";
import AddIcon from "./../../assets/images/icon-plus.svg?react";
import NoteListItem from "../NoteListItem/NoteListItem";
import { useMediaQuery } from "react-responsive";
import type { Note } from "../../types/note";

type NoteListProps = {
  notes: Note[];
  basePath: string;
}


export default function NoteList({ notes, basePath }: NoteListProps) {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <div className={styles["notes-list-wrapper"]}>
      {!isDesktop && (
        <h2 className={styles["notes-list__headline"]}>All Notes</h2>
      )}

      <button
        className={clsx(
          "btn btn--primary",
          styles["new-note-button"],
          isDesktop ? "" : "btn--circle"
        )}
      >
        {isDesktop ? <span>+ Create New Note</span> : <AddIcon />}
      </button>

      {notes.length === 0 && (
        <div className={styles["notes-list__empty-notification"]}>
          You don't have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </div>
      )}

      {notes.length > 0 && (
        <ul className={styles["notes-list"]}>
          {notes.map((note) => (
            <NoteListItem key={note.id} note={note} basePath={basePath} />
          ))}
        </ul>
      )}
    </div>
  );
}
