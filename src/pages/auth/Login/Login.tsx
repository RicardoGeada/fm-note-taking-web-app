import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss";
import { hasMinLength, isEmail, isNotEmpty } from '../../../util/validation.ts';
import { useInput } from '../../../hooks/useInput.ts';
import clsx from "clsx";
import { Link } from "react-router-dom";

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
  } = useInput('', (value) =>  hasMinLength(value, 8));


  return (
  <main>
    <form className={styles["form"]} action="">

        <img className={styles["form__logo"]} src="./images/logo.svg" alt="notes logo" />

        <div className={clsx(styles["form__section"],styles["form__section--text"])}>
          <h1 className={styles["form__headline"]}>Welcome to Note</h1>
          <p className={styles["form__description"]}>Please log in to continue</p>
        </div>
        
        <div className={styles["form__section"]}>
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

          <div className={styles["form__input-container"]}>
            <Link to={"/forgot-password"} className={clsx("link", "link--underline")}>Forgot</Link>
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
          </div>
          

          <button className={clsx("btn", "btn--primary", styles["btn"])} type="submit">Login</button>
        </div>

        <div className="hl-separator"></div>

        <div className={clsx(styles["form__section"], styles["form__section--google-login"])}>
            <p>Or log in with:</p>

            <button className={clsx("btn", "btn--border", styles["btn"])} type="button">
                <img src="./images/icon-google.svg" alt="" />
                Google
            </button>
        </div>

        <div className="hl-separator"></div>

        <p>
          <span>No account yet? </span>  
          <Link to={"/signup"} className="link">Sign Up</Link>  
        </p>        
    </form>
    </main>);
}

export default Login;
