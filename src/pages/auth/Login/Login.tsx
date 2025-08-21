import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss";

function Login() {
  return (<main>
    <form className={styles["form"]} action="">
        <img className={styles["form__logo"]} src="./images/logo.svg" alt="notes logo" />
        <h1 className={styles["form__headline"]}>Welcome to Note</h1>
        <p className={styles["form__description"]}>Please log in to continue</p>

        <Input 
          label="Email Address"
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          value=""
          onBlur={() => {}}
          onInput={() => {}}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          value=""
          onBlur={() => {}}
          onInput={() => {}}
          button={
            {
              position: 'right',
              onClick: () => {console.log('Click')},
              content: <img src="./images/icon-show-password.svg"></img>
            }
          }
        />

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
