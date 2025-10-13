import styles from "./MobileNav.module.scss";
import HomeIcon from "./../../assets/images/icon-home.svg?react";
import SearchIcon from "./../../assets/images/icon-search.svg?react";
import ArchiveIcon from "./../../assets/images/icon-archive.svg?react";
import TagIcon from "./../../assets/images/icon-tag.svg?react";
import SettingsIcon from "./../../assets/images/icon-settings.svg?react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";

type MobileNavProps = {
    className?: string;
}

export default function MobileNav({className}: MobileNavProps) {

    const navItems = [
        { to: "/all", label: "Home", Icon: HomeIcon },
        { to: "/search", label: "Search", Icon: SearchIcon },
        { to: "/archived", label: "Archived", Icon: ArchiveIcon },
        { to: "/tags", label: "Tags", Icon: TagIcon },
        { to: "/settings", label: "Settings", Icon: SettingsIcon },
    ];

    return (
        <nav className={clsx(styles["mobile-nav"], className)}>
            {navItems.map(({to, label, Icon}, index) => (
                <Fragment key={index}>
                <NavLink
                  to={to} 
                  className={({isActive}) => isActive ? clsx(styles["mobile-nav__menu-item"],styles["mobile-nav__menu-item--active"]) : styles["mobile-nav__menu-item"] }> 
                    <Icon/> 
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