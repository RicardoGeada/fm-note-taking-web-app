import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";

export default function ArchivedNotes() {
  const archivedNotes = DUMMY_NOTES.filter((note) => note.archived);

  return (
    <MainContentWrapper>
      <NotesList notes={archivedNotes} basePath="/archived"/>
    </MainContentWrapper>
  );
}