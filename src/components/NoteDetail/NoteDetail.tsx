import styles from "./NoteDetail.module.scss";
import DUMMY_NOTES from "../../dummy-notes";
import ArrowLeftIcon from "./../../assets/images/icon-arrow-left.svg?react";
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";
import { formatDate } from "../../util/date";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";


export default function NoteDetail() {
  const { noteId } = useParams(); 
  const navigate = useNavigate();
  const note = DUMMY_NOTES.find((n) => n.id === noteId);

  if (!note) {
    return <div>Not found.</div>;
  }

  const lastEdited = formatDate(note.last_edited);

  return (
    <div className={styles["note-wrapper"]}>
      <div className={styles["note"]}>
        <header
          className={styles["note__controls"]}
          role="toolbar"
          aria-label="Note actions"
        >
          <button className={styles["note__controls-button"]} onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
            <span>Go Back</span>
          </button>

          <div className={styles["note__controls-right"]}>
            <button className={styles["note__controls-button"]}>
              <DeleteIcon />
            </button>
            <button className={styles["note__controls-button"]}>
              <ArchiveIcon />
            </button>
            <button className={styles["note__controls-button"]}>
              <span>Cancel</span>
            </button>
            <button
              className={clsx(
                styles["note__controls-button"],
                styles["note__controls-button--primary"]
              )}
            >
              <span>Save Note</span>
            </button>
          </div>
        </header>

        <div className="hl-separator"></div>

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
            <span className={styles["note__property-value"]}>{lastEdited}</span>
          </div>
        </div>

        <div className="hl-separator"></div>

        <p className={styles["note__text"]}>{note.text.trim()}</p>
      </div>
    </div>
  );
}
