import styles from "./NoteDetailProperty.module.scss";

type NoteDetailPropertyProps = {
    icon: React.ReactNode;
    label: string,
    value: React.ReactNode,
}

export default function NoteDetailProperty({icon, label, value}: NoteDetailPropertyProps) {
  return (
    <div className={styles["note__property"]}>
      <span className={styles["note__property-key"]}>
        {icon}
        <span>{label}</span>
      </span>
      <span className={styles["note__property-value"]}>
        {value}
      </span>
    </div>
  );
}
