import clsx from "clsx";
import styles from "./DesktopNav.module.scss";
import LogoIcon from "./../../assets/images/logo.svg?react";
import HomeIcon from "./../../assets/images/icon-home.svg?react";
import ArchivedIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import SidebarItem from "../SidebarItem/SidebarItem";
import { useFireStoreContext } from "../../hooks/useFireStoreContext";

export default function DesktopNav({ ...props }) {
  const { tags } = useFireStoreContext();

  return (
    <aside className={clsx(styles["sidebar"], props.className)}>
      <LogoIcon className={styles["sidebar__logo"]} />
      <nav className={styles["sidebar__nav"]}>
        <ul>
          <SidebarItem to="/all" Icon={HomeIcon} text="All Notes" />
          <SidebarItem
            to="/archived"
            Icon={ArchivedIcon}
            text="Archived Notes"
          />
        </ul>
        <div className="hl-separator"></div>
        <span className={styles["sidebar__text-divider"]}>Tags</span>
        <ul className={styles["sidebar__tag-list"]}>
          {tags.map((t) => (
            <SidebarItem
              key={t}
              to={`/tag/${t}`}
              Icon={TagIcon}
              text={t}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
