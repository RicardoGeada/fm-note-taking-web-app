// react
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// hooks 
import { useToast } from "../../hooks/useToast";
import { useCurrentRouteInfo } from "./../../hooks/useCurrentRouteInfo";
import { useNotesContext } from "../../hooks/useNotesContext";

// utils
import formatDate from "../../utils/date";
import capitalize from "../../utils/capitalize";
import formatTags from "../../utils/formatTags";

// types
import type { Note } from "../../types/note";

// components
import NoteDetailHeader from "./NoteDetailHeader/NoteDetailHeader";
import NoteDetailProperty from "./NoteDetailProperty/NoteDetailProperty";
import DeleteNoteModal, { type DeleteNoteModalRef } from "./../DeleteNoteModal/DeleteNoteModal";
import ArchiveNoteModal, { type ArchiveNoteModalRef } from "./../ArchiveNoteModal/ArchiveNoteModal";

// icons
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import RestoreIcon from "./../../assets/images/icon-restore.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import StatusIcon from "./../../assets/images/icon-status.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";

// styles
import styles from "./NoteDetail.module.scss";
import preventFormSubmitOnEnter from "../../utils/preventFormSubmitOnEnter";



export default function NoteDetail() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { isArchivedRoute, isTagRoute, tagId } = useCurrentRouteInfo();
  const { isLoadingNotes, activeNotes, archivedNotes, getNotesByTag, restoreNote, updateNote } = useNotesContext();

  const deleteNoteDialog = useRef<DeleteNoteModalRef | null>(null);
  const archiveNoteDialog = useRef<ArchiveNoteModalRef | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const notes = useMemo<Note[]>(() => {
    if(isArchivedRoute) return archivedNotes;
    if(isTagRoute && tagId) return getNotesByTag(tagId);
    return activeNotes;
  }, [isArchivedRoute, isTagRoute, tagId, activeNotes, archivedNotes, getNotesByTag]);
  const currentNote = useMemo(() => notes.find((n) => n.id === noteId), [notes, noteId])
  const [note, setNote] = useState<Omit<Note, "tags"> & { tags: string } | null>(null);

  useEffect(() => {
    if(currentNote) setNote({... currentNote, tags: currentNote.tags.map((t) => capitalize(t)).join(", ")});
  }, [currentNote])

 
  useEffect(() => {
    if (!isLoadingNotes && !currentNote) {
      navigate("..", { replace: true });
    }
  }, [currentNote, isLoadingNotes, navigate]);

  if (!currentNote || !note) return null;

  const lastEdited = formatDate(note.last_edited);



  function openDialog(ref: React.RefObject<DeleteNoteModalRef | ArchiveNoteModalRef | null>) {
    ref.current?.open();
  }


  function handleRestore() {
    if (!noteId) return;
    restoreNote(noteId)
    .then(() =>
      showToast({
        text: "Note restored to active notes.",
        link: { text: "All Notes", to: "/all" },
      })
    )
    .catch(() => showToast({ text: "Error restoring note", error: true }));
  }


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!noteId) return;
    setIsSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);
    const title = fd.get('title') as string;
    const tags = fd.get('tags') as string;
    const text = fd.get('text') as string;
    const note = {
      title: title.trim(),
      tags: formatTags(tags),
      text: text.trim(),
      last_edited: new Date().toISOString(),
    }
    updateNote(noteId, note)
    .then(() => showToast({text: "Note saved successfully!"}))
    .catch(() => showToast({text: "Error saving note.", error: true }))
    .finally(() => setIsSubmitting(false));
  }

  function handleCancel() {
    if(currentNote) setNote({... currentNote, tags: currentNote.tags.map((t) => capitalize(t)).join(", ")});
  }

  return (
    <>
      {/* Modals */}
      <DeleteNoteModal ref={deleteNoteDialog} />
      <ArchiveNoteModal ref={archiveNoteDialog} />

      <div className={styles["note-wrapper"]}>
        <form className={styles["note"]} onSubmit={handleSubmit} onKeyDown={preventFormSubmitOnEnter}>
          {!isDesktop && (
            <>
              <NoteDetailHeader
                handleDelete={() => openDialog(deleteNoteDialog)}
                handleArchive={() => openDialog(archiveNoteDialog)}
                handleRestore={handleRestore}
                handleCancel={handleCancel}
                isSubmitting={isSubmitting}
              />
              <div className="hl-separator"></div>
            </>
          )}

          <input className={styles["note__title"]} id="title" name="title" value={note.title} onChange={(e) => setNote({...note, title: e.target.value})}/>

          <div className={styles["note__properties"]}>
            <NoteDetailProperty
              icon={<TagIcon />}
              label="Tags"
              value={
                <input 
                  id="tags"
                  name="tags" 
                  placeholder="Add tags separated by commas (e.g. Work, Planning)" 
                  value={note.tags} 
                  onChange={(e) => setNote({...note, tags: e.target.value})}
                />}
            />
            {isArchivedRoute && (
              <NoteDetailProperty
                icon={<StatusIcon />}
                label="Status"
                value={"Archived"}
              />
            )}
            <NoteDetailProperty
              icon={<LastEditedIcon />}
              label="Last edited"
              value={lastEdited}
            />
          </div>

          <div className="hl-separator"></div>

          <textarea
            name="text"
            id="text"
            className={styles["note__text"]}
            placeholder="Start typing your notes here..."
            maxLength={300}
            value={note.text.trim()}
            onChange={(e) => setNote({...note, text: e.target.value})}
          ></textarea>

          {isDesktop && (
            <>
              <div className="hl-separator"></div>
              <div className={styles["note__buttons"]}>
                <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                  Save Note
                </button>
                <button type="button" className="btn btn--secondary" disabled={isSubmitting} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      {isDesktop && (
        <aside className={styles["note__controls-desktop"]}>
          {!isArchivedRoute && (
            <button className="btn btn--border" onClick={() => openDialog(archiveNoteDialog)}>
              <ArchiveIcon />
              <span>Archive Note</span>
            </button>
          )}
          {isArchivedRoute && (
            <button className="btn btn--border" onClick={handleRestore}>
              <RestoreIcon />
              <span>Restore Note</span>
            </button>
          )}
          <button className="btn btn--border" onClick={() => openDialog(deleteNoteDialog)}>
            <DeleteIcon />
            <span>Delete Note</span>
          </button>
        </aside>
      )}
    </>
  );
}
