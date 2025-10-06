import clsx from "clsx";
import styles from "./MobilePageHeader.module.scss";
import LogoIcon from "./../../assets/images/logo.svg?react";

export default function MobilePageHeader({ ...props }) {
  return (
    <header {...props} className={clsx(styles["page-header"], props.className)}>
      <LogoIcon />
    </header>
  );
}
