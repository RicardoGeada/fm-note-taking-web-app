import NotesList from "../../../components/NotesList/NotesList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [search] = useState(q);
  const { notes, isLoadingNotes } = useFireStoreContext();
  const searchedNotes = notes.filter((note) => {
    const loweredSearch = search.toLowerCase();
    return (
      note.title.toLowerCase().includes(loweredSearch) ||
      note.tags.find((t) => t.toLowerCase().includes(loweredSearch)) ||
      note.text.toLowerCase().includes(loweredSearch)
    );
  });

  return (
    <MainContentWrapper>
      {!isLoadingNotes && <NotesList notes={searchedNotes} basePath={"/search"} />}
    </MainContentWrapper>
  );
}
