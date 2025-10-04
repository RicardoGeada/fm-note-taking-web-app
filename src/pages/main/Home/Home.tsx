import { Outlet, useParams } from "react-router-dom";
import MobileNav from "../../../components/MobileNav/MobileNav";
import PageHeader from "../../../components/PageHeader/PageHeader";
import styles from "./Home.module.scss";
import clsx from "clsx";

function Home() {

  const { noteId } = useParams();

  return (
    <div className={styles["layout"]}>
      <PageHeader className={styles["layout__header"]}/>
      <main className={clsx(styles["layout__main"], noteId ? styles["no-scroll"] : "")}>
        <Outlet />
      </main>
      <MobileNav className={styles["layout__nav"]} />
    </div>
  );
}

export default Home;
