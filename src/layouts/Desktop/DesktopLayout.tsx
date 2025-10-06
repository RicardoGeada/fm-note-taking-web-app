import DesktopPageHeader from "../../components/DesktopPageHeader/DesktopPageHeader";
import styles from "./DesktopLayout.module.scss";

export default function DesktopLayout() {
  return (
    <div className={styles["layout"]}>
      <DesktopPageHeader className={styles["layout__header"]} />
      <main className={styles["layout__main"]}>DesktopMainContent</main>
      <nav className={styles["layout__nav"]}>DesktopNav</nav>
    </div>
  );
}
