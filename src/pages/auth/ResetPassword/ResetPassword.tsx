import styles from "./ResetPassword.module.scss";
import clsx from "clsx";
import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { hasMinLength, isEqualToOtherValue } from "../../../util/validation";

function ResetPassword() {

     const {
        value: newPasswordValue, 
        handleInputChange: handleNewPasswordChange, 
        handleInputBlur: handleNewPasswordBlur,
        hasError: newPasswordHasError,
      } = useInput('', (value) =>  hasMinLength(value, 8));

     const {
        value: confirmNewPasswordValue, 
        handleInputChange: handleConfirmNewPasswordChange, 
        handleInputBlur: handleConfirmNewPasswordBlur,
        hasError: confirmNewPasswordHasError,
      } = useInput('', (value) =>  isEqualToOtherValue(value, newPasswordValue));

    return(
      <main>
    <form className={styles["form"]} action="">

        <img className={styles["form__logo"]} src="./images/logo.svg" alt="notes logo" />

        <div className={clsx(styles["form__section"],styles["form__section--text"])}>
          <h1 className={styles["form__headline"]}>Reset Your Password</h1>
          <p className={styles["form__description"]}>Choose a new password to secure your account.</p>
        </div>
        
        <div className={styles["form__section"]}>

            <Input 
            label="New Password"
            id="newPassword"
            type="password"
            name="newPassword"
            value={newPasswordValue}
            onBlur={handleNewPasswordBlur}
            onChange={handleNewPasswordChange}
            hint="At least 8 characters."
            error={newPasswordHasError && 'Please enter a valid password.'}
            button={
              {
                position: 'right',
                onClick: () => {console.log('Click')},
                content: <img src="./images/icon-show-password.svg"></img>
              }
            }
            />

            <Input 
            label="Confirm New Password"
            id="confirmNewPassword"
            type="password"
            name="confirmNewPassword"
            value={confirmNewPasswordValue}
            onBlur={handleConfirmNewPasswordBlur}
            onChange={handleConfirmNewPasswordChange}
            error={confirmNewPasswordHasError && 'Please make sure both passwords are the same.'}
            button={
              {
                position: 'right',
                onClick: () => {console.log('Click')},
                content: <img src="./images/icon-show-password.svg"></img>
              }
            }
            />

          

          <button className={clsx("btn", "btn--primary", styles["btn"])} type="submit">Reset Password</button>
        </div> 
    </form>
    </main>)
}

export default ResetPassword;