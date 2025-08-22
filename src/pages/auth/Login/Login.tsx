import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss";
import { hasMinLength, isEmail, isNotEmpty } from '../../../util/validation.ts';
import { useInput } from '../../../hooks/useInput.ts';

function Login() {
  const {
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) =>  isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) =>  hasMinLength(value, 6));


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
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && 'Please enter a valid email.'}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={passwordHasError && 'Please enter a valid password.'}
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
