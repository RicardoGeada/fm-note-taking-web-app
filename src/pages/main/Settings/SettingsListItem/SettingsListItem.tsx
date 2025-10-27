import { NavLink } from "react-router-dom";
import ChevronRightIcon from "./../../../../assets/images/icon-chevron-right.svg?react";
import styles from "./SettingsListItem.module.scss";

type SettingsListItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  to: string;
};

export default function SettingsListItem({
  Icon,
  text,
  to,
}: SettingsListItemProps) {
  return (
    <li className={styles["settings__list-item"]}>
      <NavLink
        className={({ isActive }) => (isActive ? styles["active"] : "")}
        to={to}
      >
        {({ isActive }) => (
          <>
            <Icon className={styles["sidebar-item__icon"]} />
            <span className={styles["sidebar-item__text"]}>{text}</span>
            {isActive && <ChevronRightIcon />}
          </>
        )}
      </NavLink>
    </li>
  );
}
