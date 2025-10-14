import clsx from "clsx";
import styles from "./NotesList.module.scss";
import AddIcon from "./../../assets/images/icon-plus.svg?react";
import NoteListItem from "../NoteListItem/NoteListItem";
import { useMediaQuery } from "react-responsive";
import type { Note } from "../../types/note";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";
import { Link } from "react-router-dom";

type NoteListProps = {
  notes: Note[];
  basePath: string;
}


export default function NoteList({ notes, basePath }: NoteListProps) {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { title, isArchivedRoute } = useCurrentRouteInfo();

  return (
    <div className={styles["notes-list-wrapper"]}>
      {!isDesktop && (
        <h2 className={styles["notes-list-wrapper__headline"]}>{ title }</h2>
      )}

      {isArchivedRoute && <p>All your archived notes are stored here. You can restore or delete them anytime.</p>}

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
          {!isArchivedRoute && <p>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>}
          {isArchivedRoute && <p>No notes have been archived yet. Move notes here for safekeeping, or <Link to="">create a new note.</Link></p>}
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
