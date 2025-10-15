import styles from "./AllNotes.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";

export default function AllNotes() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const allNotes = DUMMY_NOTES.filter((note) => !note.archived);

  return (
    <div className={styles["all-notes"]}>
      <NotesList notes={allNotes} basePath="/all"/>

      {!isDesktop && noteId && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}

      {isDesktop && noteId && <Outlet />}
    </div>
  );
}
