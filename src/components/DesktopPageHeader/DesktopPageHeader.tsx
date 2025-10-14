import clsx from "clsx";
import styles from "./DesktopPageHeader.module.scss";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import SettingsIcon from "../../assets/images/icon-settings.svg?react";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";



export default function DesktopPageHeader({ ...props }) {
  
  const { title } = useCurrentRouteInfo();

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
