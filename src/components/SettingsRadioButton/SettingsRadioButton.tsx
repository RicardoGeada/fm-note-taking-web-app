import styles from "./SettingsRadioButton.module.scss";

type SettingsRadioButtonProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    subtitle: string,
    id: string,
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SettingsRadioButton({Icon, title, subtitle, id,  ...props}: SettingsRadioButtonProps) {
  return (
    <label htmlFor={id} className={styles["custom-radio-button"]}>
      <div className={styles["custom-radio-button__icon"]}>
        <Icon />
      </div>
      <div className={styles["custom-radio-button__text"]}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <input
        type="radio"
        id={id}
        {...props}
        className={styles["custom-radio-button__input"]}
      />
    </label>
  );
}
