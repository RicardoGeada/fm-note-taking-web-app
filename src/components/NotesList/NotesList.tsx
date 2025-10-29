import clsx from "clsx";
import styles from "./NotesList.module.scss";
import AddIcon from "./../../assets/images/icon-plus.svg?react";
import NoteListItem from "../NoteListItem/NoteListItem";
import { useMediaQuery } from "react-responsive";
import type { Note } from "../../types/note";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";
import { Link, useNavigate } from "react-router-dom";
import { TAGS } from "../../dummy-notes";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import NotesListHeader from "./NotesListHeader/NotesListHeader";

type NotesListProps = {
  notes: Note[];
  basePath: string;
};

export default function NotesList({ notes, basePath }: NotesListProps) {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { title, isArchivedRoute, isTagRoute, tagId, isSearchRoute } = useCurrentRouteInfo();
  const tagName = TAGS.find((t) => t.id === tagId)?.name;
  const navigate = useNavigate();

  return (
    <div className={styles["notes-list-wrapper"]}>
      {!isDesktop && isTagRoute && <NotesListHeader />}

      {!isDesktop && (
        <h2
          className={clsx(
            styles["notes-list__headline"],
            isTagRoute && tagName ? styles["notes-list__headline--tag"] : ""
          )}
        >
          <span>{!isSearchRoute ? title : "Search"}</span>
          {isTagRoute && tagName && ` ${tagName}`}
        </h2>
      )}

      {!isDesktop && isSearchRoute && (
          <Input
            label=""
            id="search"
            type="text"
            placeholder="Search by title, content or tags..."
            button={{
              position: "left",
              onClick: () => {},
              content: <SearchIcon />,
            }}
          />
      )}

      <button
        className={clsx(
          "btn btn--primary",
          styles["new-note-button"],
          isDesktop ? "" : "btn--circle"
        )}
        onClick={() => {navigate(`${basePath}/new-note`)}}
      >
        {isDesktop ? <span>+ Create New Note</span> : <AddIcon />}
      </button>

      {isArchivedRoute && (
        <p>
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}
      {isTagRoute && tagName && (
        <p>All notes with the "{tagName}" tag are shown here.</p>
      )}
      {/* TODO: search query variable */}
      {!isDesktop && isSearchRoute && (
        <p>All notes matching ”Dev” are displayed below.</p>
      )}

      {notes.length === 0 && (
        <div className={styles["notes-list__empty-notification"]}>
          {!isArchivedRoute && (
            <p>
              You don't have any notes yet. Start a new note to capture your
              thoughts and ideas.
            </p>
          )}
          {isArchivedRoute && (
            <p>
              No notes have been archived yet. Move notes here for safekeeping,
              or <Link to={`${basePath}/new-note`}>create a new note.</Link>
            </p>
          )}
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
