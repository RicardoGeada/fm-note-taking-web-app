import { useMediaQuery } from "react-responsive";
import { Outlet, useParams } from "react-router-dom";
import styles from "./Tags.module.scss";
import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";

export default function Tags() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { tagId, noteId } = useParams();
  const taggedNotes = tagId ? DUMMY_NOTES.filter((note) => note.tags.includes(tagId)) : [];
  return (
    <>
      {(!isDesktop && !tagId) && <>Tag Liste</>}
      {(!isDesktop && tagId) && <>Notes Liste mit {tagId}</>}
      {(isDesktop && tagId) && 
        <div className={styles["tagged-notes"]}>
          <NotesList notes={taggedNotes} basePath={`/tag/${tagId}`} />

          {!isDesktop && noteId && (
            <div className={styles["overlay"]}>
              <Outlet />
            </div>
          )}

          {isDesktop && noteId && <Outlet />}
        </div>
      }
    </>
  );
}
