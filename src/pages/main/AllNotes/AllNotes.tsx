import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";

export default function AllNotes() {
  const { notes } = useFireStoreContext();
  const allNotes = notes.filter((note) => !note.archived);

  return (
    <MainContentWrapper>
      <NotesList notes={allNotes} basePath="/all"/>
    </MainContentWrapper>
  );
}
