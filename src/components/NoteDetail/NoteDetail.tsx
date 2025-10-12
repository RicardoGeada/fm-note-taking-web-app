import styles from "./NoteDetail.module.scss";
import DUMMY_NOTES from "../../dummy-notes";
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";
import { formatDate } from "../../util/date";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NoteDetailHeader from "./NoteDetailHeader/NoteDetailHeader";

export default function NoteDetail() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const note = DUMMY_NOTES.find((n) => n.id === noteId);

  if (!note) {
    return <div>Not found.</div>;
  }

  const lastEdited = formatDate(note.last_edited);

  return (
    <>
      <div className={styles["note-wrapper"]}>
        <div className={styles["note"]}>

          {!isDesktop && (
            <>
              <NoteDetailHeader />
              <div className="hl-separator"></div>
            </>
          )}

          <h1 className={styles["note__title"]}>{note.title}</h1>

          <div className={styles["note__properties"]}>
            <div className={styles["note__property"]}>
              <span className={styles["note__property-key"]}>
                <TagIcon />
                Tags
              </span>
              <span className={styles["note__property-value"]}>
                {note.tags.join(", ")}
              </span>
            </div>
            <div className={styles["note__property"]}>
              <span className={styles["note__property-key"]}>
                <LastEditedIcon />
                Last edited
              </span>
              <span className={styles["note__property-value"]}>
                {lastEdited}
              </span>
            </div>
          </div>

          <div className="hl-separator"></div>

          <p className={styles["note__text"]}>{note.text.trim()}</p>

          {isDesktop && (
            <>
              <div className="hl-separator"></div>
              <div className={styles["note__buttons"]}>
                <button className="btn btn--primary">Save Note</button>
                <button className="btn btn--secondary">Cancel</button>
              </div>
            </>
          )}

        </div>
      </div>

      {isDesktop && (
        <aside className={styles["note__controls-desktop"]}>
          <button className="btn btn--border">
            <DeleteIcon />
            <span>Archive Note</span>
          </button>
          <button className="btn btn--border">
            <ArchiveIcon />
            <span>Delete Note</span>
          </button>
        </aside>
      )}
      
    </>
  );
}
