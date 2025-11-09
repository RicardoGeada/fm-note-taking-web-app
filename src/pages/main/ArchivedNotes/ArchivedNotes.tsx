import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";

export default function ArchivedNotes() {
  const { notes } = useFireStoreContext();
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <MainContentWrapper>
      <NotesList notes={archivedNotes} basePath="/archived"/>
    </MainContentWrapper>
  );
}