/// <reference types="vite-plugin-svgr/client" />
import styles from "./MobileNav.module.scss";
import HomeIcon from "./../../assets/images/icon-home.svg?react";
import SearchIcon from "./../../assets/images/icon-search.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import SettingsIcon from "./../../assets/images/icon-settings.svg?react";


import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";

export default function MobileNav() {

    const navItems = [
        { to: "/", label: "Home", Icon: HomeIcon, iconClass: styles["icon--path"] },
        { to: "/search", label: "Search", Icon: SearchIcon, iconClass: styles["icon--path"] },
        { to: "/archived", label: "Archived", Icon: ArchiveIcon, iconClass: styles["icon--stroke"] },
        { to: "/tags", label: "Tags", Icon: TagIcon, iconClass: styles["icon--stroke"] },
        { to: "/settings", label: "Settings", Icon: SettingsIcon, iconClass: styles["icon--path"] },
    ];

    return (
        <nav className={styles["mobile-nav"]}>
            {navItems.map(({to, label, Icon, iconClass}, index) => (
                <Fragment key={index}>
                <NavLink
                  to={to} 
                  className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }> 
                    <Icon className={iconClass}/> 
                    <span>{label}</span> 
                </NavLink>

                {index < navItems.length - 1 &&
                 <div className={clsx("vl-separator", styles["vl-separator"])}></div>
                }           
                </Fragment>
            ))}
        </nav>
    )
}