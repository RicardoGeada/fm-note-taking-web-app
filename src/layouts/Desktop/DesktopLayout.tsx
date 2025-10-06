import styles from "./DesktopLayout.module.scss";

export default function DesktopLayout() {
    return (
        <div className={styles["layout"]}>
            <header className={styles["layout__header"]}>DesktopPageHeader</header>
            <main className={styles["layout__main"]}>DesktopMainContent</main>
            <nav className={styles["layout__nav"]}>DesktopNav</nav>
        </div>
    )
}