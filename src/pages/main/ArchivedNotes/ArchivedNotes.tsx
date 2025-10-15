import styles from "./ArchivedNotes.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";

export default function ArchivedNotes() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const archivedNotes = DUMMY_NOTES.filter((note) => note.archived);

  return (
    <div className={styles["archived-notes"]}>
      <NotesList notes={archivedNotes} basePath="/archived"/>

      {!isDesktop && noteId && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}

      {isDesktop && noteId && <Outlet />}
    </div>
  );
}