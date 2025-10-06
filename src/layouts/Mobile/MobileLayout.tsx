import { Outlet, useParams } from "react-router-dom";
import MobilePageHeader from "../../components/MobilePageHeader/MobilePageHeader";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./MobileLayout.module.scss";
import clsx from "clsx";

export default function MobileLayout() {
  const { noteId } = useParams();

  return (
    <div className={styles["layout"]}>
      <MobilePageHeader className={styles["layout__header"]} />
      <main
        className={clsx(
          styles["layout__main"],
          noteId ? styles["no-scroll"] : ""
        )}
      >
        <Outlet />
      </main>
      <MobileNav className={styles["layout__nav"]} />
    </div>
  );
}
