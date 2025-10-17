import { useMediaQuery } from "react-responsive";
import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";
import { useState } from "react";
import styles from "./Search.module.scss";
import { Outlet, useParams, useSearchParams } from "react-router-dom";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [search] = useState(q);
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const searchedNotes = DUMMY_NOTES.filter((note) => {
    const loweredSearch = search.toLowerCase();
    return (
      note.title.toLowerCase().includes(loweredSearch) ||
      note.tags.find((t) => t.toLowerCase().includes(loweredSearch)) ||
      note.text.toLowerCase().includes(loweredSearch)
    );
  });
  const { noteId } = useParams();

  return (
    <div className={styles["searched-notes"]}>
      <NotesList notes={searchedNotes} basePath={"/search"} />
      {!isDesktop && noteId && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}
      {isDesktop && noteId && <Outlet />}
    </div>
  );
}
