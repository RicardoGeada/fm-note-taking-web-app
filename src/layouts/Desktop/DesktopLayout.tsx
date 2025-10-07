import DesktopNav from "../../components/DesktopNav/DesktopNav";
import DesktopPageHeader from "../../components/DesktopPageHeader/DesktopPageHeader";
import styles from "./DesktopLayout.module.scss";

export default function DesktopLayout() {
  return (
    <div className={styles["layout"]}>
      <DesktopPageHeader className={styles["layout__header"]} />
      <main className={styles["layout__main"]}>DesktopMainContent</main>
      <DesktopNav className={styles["layout__nav"]} />
    </div>
  );
}
