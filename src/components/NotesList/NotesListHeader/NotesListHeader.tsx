import styles from "./NoteListHeader.module.scss"
import ArrowLeftIcon from "../../../assets/images/icon-arrow-left.svg?react";
import { useNavigate } from "react-router-dom";

export default function NotesListHeader() {
  const navigate = useNavigate();  

  return (
    <header>
      <button
        className={styles["notes-list__controls-button"]}
        onClick={() => navigate(".")}
      >
        <ArrowLeftIcon />
        <span>All Tags</span>
      </button>
    </header>
  );
}
