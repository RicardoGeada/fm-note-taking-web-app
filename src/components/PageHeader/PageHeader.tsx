import clsx from "clsx";
import styles from "./PageHeader.module.scss";

type PageHeaderProps = {
  className?: string;
};

export default function PageHeader({ className }: PageHeaderProps) {
  return (
    <header className={clsx(styles["page-header"], className)}>
      <img src="./images/logo.svg" alt="notes logo" />
    </header>
  );
}
