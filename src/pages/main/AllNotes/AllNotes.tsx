import styles from "./AllNotes.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotesList from "../../../components/NotesList/NotesList";

export default function AllNotes() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();

  return (
    <div className={styles["all-notes"]}>
      <NotesList />

      {!isDesktop && noteId && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}

      {isDesktop && noteId && <Outlet />}
    </div>
  );
}
