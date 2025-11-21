import NotesList from "../../../components/NotesList/NotesList";
import { useMemo } from "react";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";
import { useCurrentRouteInfo } from "../../../hooks/useCurrentRouteInfo";

export default function Search() {
  const { search } = useCurrentRouteInfo();
  const { notes, isLoadingNotes } = useFireStoreContext();
  const searchedNotes = useMemo(() => {
    const lowered = search.toLowerCase();
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(lowered) ||
        note.text.toLowerCase().includes(lowered) ||
        note.tags.some((t) => t.toLowerCase().includes(lowered))
    );
  }, [notes, search]);

  return (
    <MainContentWrapper>
      {!isLoadingNotes && (
        <NotesList notes={searchedNotes} basePath={"/search"} />
      )}
    </MainContentWrapper>
  );
}
