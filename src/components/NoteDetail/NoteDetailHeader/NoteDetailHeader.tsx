import styles from "./NoteDetailHeader.module.scss";
import clsx from "clsx";
import ArrowLeftIcon from "../../../assets/images/icon-arrow-left.svg?react";
import DeleteIcon from "../../../assets/images/icon-delete.svg?react";
import ArchiveIcon from "../../../assets/images/icon-archive.svg?react";
import RestoreIcon from "../../../assets/images/icon-restore.svg?react";
import { useNavigate } from "react-router-dom";
import { useCurrentRouteInfo } from "../../../hooks/useCurrentRouteInfo";

type NoteDetailHeaderProps = {
  handleDelete: () => void;
  handleArchive: () => void;
  handleRestore: () => void;
  handleCancel: () => void;
  isSubmitting: boolean;
}

export default function NoteDetailHeader({handleDelete, handleArchive, handleRestore, handleCancel, isSubmitting}: NoteDetailHeaderProps) {
    const navigate = useNavigate();
    const { isArchivedRoute } = useCurrentRouteInfo(); 

  return (
    <>
      <header
        className={styles["note__controls"]}
        role="toolbar"
        aria-label="Note actions"
      >
        <button
          type="button"
          className={styles["note__controls-button"]}
          onClick={() => navigate("..")}
        >
          <ArrowLeftIcon />
          <span>Go Back</span>
        </button>

        <div className={styles["note__controls-right"]}>
          <button type="button" className={styles["note__controls-button"]} onClick={handleDelete}>
            <DeleteIcon />
          </button>
          {!isArchivedRoute && (
            <button type="button" className={styles["note__controls-button"]} onClick={handleArchive}>
            <ArchiveIcon />
            </button>
          )}
          {isArchivedRoute && (
            <button type="button" className={styles["note__controls-button"]} onClick={handleRestore}>
            <RestoreIcon />
            </button>
          )}
          <button type="button" className={styles["note__controls-button"]} onClick={handleCancel} disabled={isSubmitting}>
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            className={clsx(
              styles["note__controls-button"],
              styles["note__controls-button--primary"]
            )}
            disabled={isSubmitting}
          >
            <span>Save Note</span>
          </button>
        </div>
      </header>
    </>
  );
}
