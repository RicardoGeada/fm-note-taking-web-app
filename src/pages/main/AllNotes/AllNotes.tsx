import styles from "./AllNotes.module.scss";

export default function AllNotes() {
  return (
    <div className={styles["all-notes"]}>
      <h2 className={styles["all-notes__headline"]}>All Notes</h2>
    </div>
  );
}
