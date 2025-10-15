import clsx from "clsx";
import styles from "./DesktopPageHeader.module.scss";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import SettingsIcon from "../../assets/images/icon-settings.svg?react";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";
import { TAGS } from "../../dummy-notes";

export default function DesktopPageHeader({ ...props }) {
  const { title, isTagRoute, tagId } = useCurrentRouteInfo();
  const tagName = TAGS.find((t) => t.id === tagId)?.name;

  return (
    <header {...props} className={clsx(styles["header"], props.className)}>
      <h1
        className={clsx(
          styles["header__headline"],
          isTagRoute && tagName ? styles["header__headline--tag"] : ""
        )}
      >
        <span>{title}</span> 
        {isTagRoute && tagName && ` ${tagName}`}
      </h1>

      <Input
        label=""
        id="search"
        type="text"
        placeholder="Search by title, content or tags..."
        button={{
          position: "left",
          onClick: () => {},
          content: <SearchIcon />,
        }}
      />

      <button className={styles["header__settings-button"]}>
        <SettingsIcon />
      </button>
    </header>
  );
}
