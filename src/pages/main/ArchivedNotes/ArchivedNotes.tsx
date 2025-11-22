import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useNotesContext } from "../../../hooks/useNotesContext";

export default function ArchivedNotes() {
  const { archivedNotes, isLoadingNotes } = useNotesContext();

  return (
    <MainContentWrapper>
      {!isLoadingNotes && <NotesList notes={archivedNotes} basePath="/archived"/>}
    </MainContentWrapper>
  );
}