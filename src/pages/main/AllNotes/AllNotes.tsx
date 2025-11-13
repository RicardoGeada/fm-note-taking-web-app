import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";

export default function AllNotes() {
  const { activeNotes, isLoadingNotes } = useFireStoreContext();

  return (
    <MainContentWrapper>
      {!isLoadingNotes && <NotesList notes={activeNotes} basePath="/all"/>}
    </MainContentWrapper>
  );
}
