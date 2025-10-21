import styles from "./NewNote.module.scss";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";
import { useMediaQuery } from "react-responsive";

export default function NewNote() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  return (
    <>
      <div className={styles["new-note-wrapper"]}>
        <div className={styles["new-note"]}>
          <input className={styles["new-note__headline"]} type="text" placeholder={"Enter a title..."} required/>

          <div className={styles["new-note__properties"]}>
            <div className={styles["new-note__property"]}>
              <span className={styles["new-note__property-key"]}>
                <TagIcon />
                Tags
              </span>
              <span className={styles["new-note__property-value"]}>
                <input type="text" name="tags" id="tags" placeholder="Add tags separated by commas (e.g. Work, Planning)" />
              </span>
            </div>

            <div className={styles["new-note__property"]}>
              <span className={styles["new-note__property-key"]}>
                <LastEditedIcon />
                Last edited
              </span>
              <span className={styles["new-note__property-value"]}>
                Not yet saved
              </span>
            </div>
          </div>

          <div className="hl-separator"></div>

          <textarea name="text" id="text" className={styles["new-note__textarea"]} placeholder="Start typing your notes here..."></textarea>

          {isDesktop && (
            <>
              <div className="hl-separator"></div>
              <div className={styles["new-note__buttons"]}>
                <button className="btn btn--primary">Save Note</button>
                <button className="btn btn--secondary">Cancel</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
