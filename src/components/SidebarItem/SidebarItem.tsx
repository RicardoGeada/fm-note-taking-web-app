import clsx from "clsx";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "./../../assets/images/icon-chevron-right.svg?react";
import styles from "./SidebarItem.module.scss";
import capitalize from "../../utils/capitalize";

type SidebarItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  to: string;
};

export default function SidebarItem({ Icon, text, to }: SidebarItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? clsx(styles["sidebar-item"], styles["sidebar-item--active"])
            : styles["sidebar-item"]
        }
      >
        {({ isActive }) => (
          <>
            <Icon className={styles["sidebar-item__icon"]} />
            <span className={styles["sidebar-item__text"]}>{capitalize(text)}</span>
            {isActive && <ChevronRightIcon />}
          </>
        )}
      </NavLink>
    </li>
  );
}
