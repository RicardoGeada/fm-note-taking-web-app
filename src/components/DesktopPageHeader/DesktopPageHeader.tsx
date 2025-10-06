import clsx from "clsx";
import { useMatches } from "react-router-dom";
import styles from "./DesktopPageHeader.module.scss";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import SettingsIcon from "../../assets/images/icon-settings.svg?react";

type RouteHandle = {
  title?: string;
};

export default function DesktopPageHeader({ ...props }) {
  const matches = useMatches() as Array<{ handle?: RouteHandle }>;
  const current = matches.find((m) => m.handle?.title);
  const title = current?.handle?.title ?? "";

  return (
    <header {...props} className={clsx(styles["header"], props.className)}>
      <h1 className={styles["header__headline"]}>{title}</h1>

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
