import NotesList from "../../../components/NotesList/NotesList";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useNotesContext } from "../../../hooks/useNotesContext";

export default function AllNotes() {
  const { activeNotes, isLoadingNotes } = useNotesContext();

  return (
    <MainContentWrapper>
      {!isLoadingNotes && <NotesList notes={activeNotes} basePath="/all"/>}
    </MainContentWrapper>
  );
}
