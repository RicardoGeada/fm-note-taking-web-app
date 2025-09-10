/// <reference types="vite-plugin-svgr/client" />
import styles from "./MobileNav.module.scss";
import HomeIcon from "./../../assets/images/icon-home.svg?react";
import SearchIcon from "./../../assets/images/icon-search.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import SettingsIcon from "./../../assets/images/icon-settings.svg?react";


import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function MobileNav() {

    return (
        <nav className={styles["mobile-nav"]}>
            <NavLink to={"/"} className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }>
                <HomeIcon className={styles["icon--path"]}/>
                <span>Home</span>
            </NavLink>

            <div className={clsx("vl-separator", styles["vl-separator"])}></div>

            <NavLink to={"/search"} className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }>
                <SearchIcon className={styles["icon--path"]}/>
                <span>Search</span>
            </NavLink>

            <div className={clsx("vl-separator", styles["vl-separator"])}></div>

            <NavLink to={"/archived"} className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }>
                <ArchiveIcon className={styles["icon--stroke"]}/>
                <span>Archived</span>
            </NavLink>

            <div className={clsx("vl-separator", styles["vl-separator"])}></div>

            <NavLink to={"/tags"} className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }>
                <TagIcon className={styles["icon--stroke"]}/>
                <span>Tags</span>
            </NavLink>

            <div className={clsx("vl-separator", styles["vl-separator"])}></div>

            <NavLink to={"/settings"} className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }>
                <SettingsIcon className={styles["icon--path"]}/>
                <span>Settings</span>
            </NavLink>
        </nav>
    )
}