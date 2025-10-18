import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [search] = useState(q);
  const searchedNotes = DUMMY_NOTES.filter((note) => {
    const loweredSearch = search.toLowerCase();
    return (
      note.title.toLowerCase().includes(loweredSearch) ||
      note.tags.find((t) => t.toLowerCase().includes(loweredSearch)) ||
      note.text.toLowerCase().includes(loweredSearch)
    );
  });

  return (
    <MainContentWrapper>
      <NotesList notes={searchedNotes} basePath={"/search"} />
    </MainContentWrapper>
  );
}
