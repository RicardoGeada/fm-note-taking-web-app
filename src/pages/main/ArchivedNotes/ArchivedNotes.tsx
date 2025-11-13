import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";

export default function ArchivedNotes() {
  const { archivedNotes, isLoadingNotes } = useFireStoreContext();

  return (
    <MainContentWrapper>
      {!isLoadingNotes && <NotesList notes={archivedNotes} basePath="/archived"/>}
    </MainContentWrapper>
  );
}