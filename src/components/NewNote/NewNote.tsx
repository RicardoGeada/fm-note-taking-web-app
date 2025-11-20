import styles from "./NewNote.module.scss";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";
import { useMediaQuery } from "react-responsive";
import NewNoteHeader from "./NewNoteHeader/NewNoteHeader";
import { useFireStoreContext } from "../../hooks/useFireStoreContext";
import { useState, type FormEvent } from "react";
import formatTags from "../../utils/formatTags";
import preventFormSubmitOnEnter from "../../utils/preventFormSubmitOnEnter";

export default function NewNote() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { addNote } = useFireStoreContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);
    const title = fd.get('title') as string;
    const tags = fd.get('tags') as string;
    const text = fd.get('text') as string;
    const note = {
      title: title.trim(),
      tags: formatTags(tags),
      text: text.trim(),
      archived: false,
      created_at: new Date().toISOString(),
      last_edited: new Date().toISOString(),
    }

    addNote(note).finally(() => setIsSubmitting(false));

    form.reset();
  }


  return (
    <>
      
      <div className={styles["new-note-wrapper"]}>
        
        <form className={styles["new-note"]} onSubmit={handleSubmit} onKeyDown={preventFormSubmitOnEnter}>
          {!isDesktop && <>
            <NewNoteHeader isSubmitting={isSubmitting}/>
            <div className="hl-separator"></div>
          </>}
          <input className={styles["new-note__headline"]} type="text" id="title" name="title" placeholder={"Enter a title..."} maxLength={100} required/>

          <div className={styles["new-note__properties"]}>
            <div className={styles["new-note__property"]}>
              <span className={styles["new-note__property-key"]}>
                <TagIcon />
                Tags
              </span>
              <span className={styles["new-note__property-value"]}>
                <input type="text" name="tags" id="tags" placeholder="Add tags separated by commas (e.g. Work, Planning)" maxLength={100}/>
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

          <textarea name="text" id="text" className={styles["new-note__textarea"]} placeholder="Start typing your notes here..." maxLength={300}></textarea>

          {isDesktop && (
            <>
              <div className="hl-separator"></div>
              <div className={styles["new-note__buttons"]}>
                <button type="submit" className="btn btn--primary" disabled={isSubmitting}>Save Note</button>
                <button type="reset" className="btn btn--secondary">Cancel</button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
