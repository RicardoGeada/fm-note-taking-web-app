import clsx from "clsx";
import styles from "./MobilePageHeader.module.scss";
import LogoIcon from "./../../assets/images/logo.svg?react";

type MobilePageHeaderProps = {
  className?: string;
};

export default function MobilePageHeader({ className }: MobilePageHeaderProps) {
  return (
    <header className={clsx(styles["page-header"], className)}>
      <LogoIcon />
    </header>
  );
}
