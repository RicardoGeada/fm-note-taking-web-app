import clsx from "clsx";
import styles from "./DesktopPageHeader.module.scss";
import Input from "../Input/Input";
import SearchIcon from "../../assets/images/icon-search.svg?react";
import SettingsIcon from "../../assets/images/icon-settings.svg?react";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";
import { Link, useNavigate } from "react-router-dom";
import capitalize from "../../utils/capitalize";

export default function DesktopPageHeader({ ...props }) {
  const { title, isTagRoute, tagId, isSearchRoute, search } = useCurrentRouteInfo();
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const search = (fd.get("search") as string).trim();
    navigate(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <header {...props} className={clsx(styles["header"], props.className)}>
      <h1
        className={clsx(
          styles["header__headline"],
          (isTagRoute && tagId) || isSearchRoute
            ? styles["header__headline--tag"]
            : ""
        )}
      >
        <span>{title}</span>
        {isTagRoute && tagId && ` ${capitalize(tagId)}`}
        {isSearchRoute && ` ${search}`}
      </h1>

      <form onSubmit={handleSearch}>
        <Input
          label=""
          id="search"
          name="search"
          type="text"
          placeholder="Search by title, content or tags..."
          button={{
            position: "left",
            onClick: () => {},
            content: <SearchIcon />,
            type: "submit",
          }}
        />
      </form>

      <Link to={"/settings"} className={styles["header__settings-button"]}>
        <SettingsIcon />
      </Link>
    </header>
  );
}
