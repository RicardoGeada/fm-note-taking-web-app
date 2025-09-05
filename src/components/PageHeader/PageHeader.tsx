import styles from "./PageHeader.module.scss";

export default function PageHeader() {
    return(
    <header className={styles["page-header"]}>
        <img src="./images/logo.svg" alt="notes logo" />
    </header>)
}