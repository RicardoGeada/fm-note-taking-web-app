import styles from "./NoteDetailProperty.module.scss";

type NoteDetailPropertyProps = {
    icon: React.ReactNode;
    label: string,
    value: string,
}

export default function NoteDetailProperty({icon, label, value}: NoteDetailPropertyProps) {
  return (
    <div className={styles["note__property"]}>
      <span className={styles["note__property-key"]}>
        {icon}
        {label}
      </span>
      <span className={styles["note__property-value"]}>
        {value}
      </span>
    </div>
  );
}
