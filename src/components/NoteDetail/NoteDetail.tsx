import styles from "./NoteDetail.module.scss";
import DUMMY_NOTES from "../../dummy-notes";
import tagIcon from "./../../assets/images/icon-tag.svg";
import lastEditedIcon from "./../../assets/images/icon-clock.svg";
import { formatDate } from "../../util/date";

type NoteDetailProps = {
  noteId: string;
};

export default function NoteDetail({ noteId }: NoteDetailProps) {
  const note = DUMMY_NOTES.find((n) => n.id === noteId);

  if (!note) {
    return <div>Not found.</div>;
  }

  const lastEdited = formatDate(note.last_edited);

  return (
    <div className={styles["note"]}>

      <h1 className={styles["note__title"]}>{note.title}</h1>

      <div className={styles["note__properties"]}>
        <div className={styles["note__property"]}>
          <span className={styles["note__property-key"]}>
            <img src={tagIcon} alt="" />
            Tags
          </span>
          <span className={styles["note__property-value"]}>{note.tags.join(", ")}</span>
        </div>
        <div className={styles["note__property"]}>
          <span className={styles["note__property-key"]}>
            <img src={lastEditedIcon} alt="" />
            Last edited
          </span>
          <span className={styles["note__property-value"]}>{lastEdited}</span>
        </div>
      </div>

      <div className="hl-separator"></div>

      <p className={styles["note__text"]}>{note.text.trim()}</p>

    </div>
  );
}
