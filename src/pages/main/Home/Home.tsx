import { Outlet } from "react-router-dom";
import MobileNav from "../../../components/MobileNav/MobileNav";
import PageHeader from "../../../components/PageHeader/PageHeader";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles["layout"]}>
      <PageHeader className={styles["layout__header"]}/>
      <main className={styles["layout__main"]}>
        <Outlet />
      </main>
      <MobileNav className={styles["layout__nav"]} />
    </div>
  );
}

export default Home;
