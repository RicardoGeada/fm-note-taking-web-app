import clsx from "clsx";
import styles from "./PageHeader.module.scss";
import LogoIcon from "./../../assets/images/logo.svg?react";

type PageHeaderProps = {
  className?: string;
};

export default function PageHeader({ className }: PageHeaderProps) {
  return (
    <header className={clsx(styles["page-header"], className)}>
      <LogoIcon />
    </header>
  );
}
