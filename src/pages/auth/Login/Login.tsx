import { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss";
import { hasMinLength, isEmail, isNotEmpty } from '../../../util/validation.ts';

function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleInputChange(identifier:string, value:string) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier:string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }))
  }


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
          value={enteredValues.email}
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          error={emailIsInvalid && 'Please enter a valid email.'}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          error={passwordIsInvalid && 'Please enter a valid password.'}
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
