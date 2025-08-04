import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss";

function Login() {
  return (<main>
    <form className={styles["form"]} action="">
        <img className={styles["form__logo"]} src="./images/logo.svg" alt="notes logo" />
        <h1 className={styles["form__headline"]}>Welcome to Note</h1>
        <p className={styles["form__description"]}>Please log in to continue</p>

        <Input />

        {/* <label className={styles["input__label"]} htmlFor="email">Email Adress</label>
        <input className={styles["input"]} id="email" type="email" placeholder="email@example.com"/>

        <label className={styles["input__label"]} htmlFor="password">Password</label>
        <a href="">Forgot</a>
        <input className={styles["input"]} id="password" type="password" /> */}

        <button className={`${styles["btn"]} ${styles["btn--primary"]}`} type="submit">Login</button>

        <div className={styles["hl-separator"]}></div>

        <p>Or log in with:</p>
        <button className={`${styles["btn"]} ${styles["btn--border"]}`} type="button">
            <img src="./images/icon-google.svg" alt="" />
            Google
        </button>

        <div className={styles["hl-separator"]}></div>

        <p>
          <span>No account yet?</span>  
          <a href="">Sign Up</a>  
        </p>        
    </form>
    </main>);
}

export default Login;
