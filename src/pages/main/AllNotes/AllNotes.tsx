import NotesList from "../../../components/NotesList/NotesList";
import { DUMMY_NOTES } from "../../../dummy-notes";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";

export default function AllNotes() {
  const allNotes = DUMMY_NOTES.filter((note) => !note.archived);

  return (
    <MainContentWrapper>
      <NotesList notes={allNotes} basePath="/all"/>
    </MainContentWrapper>
  );
}
