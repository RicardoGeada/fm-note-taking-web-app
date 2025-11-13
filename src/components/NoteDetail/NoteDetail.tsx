// React Hooks
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Own Hooks, Utils ...
import styles from "./NoteDetail.module.scss";
import { formatDate } from "../../util/date";
import { useCurrentRouteInfo } from "./../../hooks/useCurrentRouteInfo";

// Components
import NoteDetailHeader from "./NoteDetailHeader/NoteDetailHeader";
import NoteDetailProperty from "./NoteDetailProperty/NoteDetailProperty";
import DeleteNoteModal, { type DeleteNoteModalRef } from "./../DeleteNoteModal/DeleteNoteModal";
import ArchiveNoteModal, { type ArchiveNoteModalRef } from "./../ArchiveNoteModal/ArchiveNoteModal";

// Icons
import DeleteIcon from "./../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import RestoreIcon from "./../../assets/images/icon-restore.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import StatusIcon from "./../../assets/images/icon-status.svg?react";
import LastEditedIcon from "./../../assets/images/icon-clock.svg?react";
import { useFireStoreContext } from "../../hooks/useFireStoreContext";
import capitalize from "../../utils/capitalize";
import { useToast } from "../../hooks/useToast";


export default function NoteDetail() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const { isArchivedRoute } = useCurrentRouteInfo();
  const { notes, restoreNote } = useFireStoreContext();
  const note = notes.find((n) => n.id === noteId);
  const deleteNoteDialog = useRef<DeleteNoteModalRef | null>(null);
  const archiveNoteDialog = useRef<ArchiveNoteModalRef | null>(null);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    if(!note) {
      navigate("..", { replace: true });
    }
  }, [note, navigate]);

  if (!note) {
    return null;
  }

  const lastEdited = formatDate(note.last_edited);

  function openDialog(ref: React.RefObject<DeleteNoteModalRef| ArchiveNoteModalRef | null>) {
    ref.current?.open();
  }

  function handleRestore() {
    if(!noteId) return;

    restoreNote(noteId)
    .then(() => showToast({text: "Note restored to active notes.", link: {text: "All Notes", to: "/all"}}))
    .catch(() => showToast({text: "Error restoring note", error: true}))
  }

  return (
    <>
      {/* Modals */}
      <DeleteNoteModal ref={deleteNoteDialog} />
      <ArchiveNoteModal ref={archiveNoteDialog} />

      <div className={styles["note-wrapper"]}>
        <div className={styles["note"]}>
          {!isDesktop && (
            <>
              <NoteDetailHeader
                handleDelete={() => openDialog(deleteNoteDialog)}
                handleArchive={() => openDialog(archiveNoteDialog)}
                handleRestore={handleRestore}
              />
              <div className="hl-separator"></div>
            </>
          )}

          <h1 className={styles["note__title"]}>{note.title}</h1>

          <div className={styles["note__properties"]}>
            <NoteDetailProperty icon={<TagIcon />} label="Tags" value={note.tags.map(t => capitalize(t)).join(", ")}/>
            {isArchivedRoute && <NoteDetailProperty icon={<StatusIcon />} label="Status" value={"Archived"}/>}
            <NoteDetailProperty icon={<LastEditedIcon />} label="Last edited" value={lastEdited}/>
          </div>

          <div className="hl-separator"></div>

          <p className={styles["note__text"]}>{note.text.trim()}</p>

          {isDesktop && (
            <>
              <div className="hl-separator"></div>
              <div className={styles["note__buttons"]}>
                <button className="btn btn--primary">Save Note</button>
                <button className="btn btn--secondary">Cancel</button>
              </div>
            </>
          )}
        </div>
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
