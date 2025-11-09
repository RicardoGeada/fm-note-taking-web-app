import clsx from "clsx";
import styles from "./DesktopPageHeader.module.scss";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import SettingsIcon from "../../assets/images/icon-settings.svg?react";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";
import { useState} from "react";
import { Link, useSearchParams } from "react-router-dom";
import capitalize from "../../utils/capitalize";


export default function DesktopPageHeader({ ...props }) {
  const { title, isTagRoute, tagId, isSearchRoute } = useCurrentRouteInfo();
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [search, setSearch] = useState(q);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <header {...props} className={clsx(styles["header"], props.className)}>
      <h1
        className={clsx(
          styles["header__headline"],
          ((isTagRoute && tagId) || isSearchRoute) ? styles["header__headline--tag"] : ""
        )}
      >
        <span>{title}</span> 
        {isTagRoute && tagId && ` ${capitalize(tagId)}`}
        {isSearchRoute && ` ${search}`}
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
        value={search}
        onChange={handleInput}
      />

      <Link to={"/settings"} className={styles["header__settings-button"]}>
        <SettingsIcon />
      </Link>
    </header>
  );
}
