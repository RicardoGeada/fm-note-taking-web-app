import styles from "./ResetPassword.module.scss";
import clsx from "clsx";
import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { hasMinLength, isEqualToOtherValue } from "../../../util/validation";
import { useState, type FormEvent } from "react";

import LogoIcon from "./../../../assets/images/logo.svg?react";
import ShowPassword from "./../../../assets/images/icon-show-password.svg?react";
import HidePassword from "./../../../assets/images/icon-hide-password.svg?react";
import { doConfirmPasswordReset } from "../../../firebase/auth";
import { useSearchParams } from "react-router-dom";
import { useToast } from "../../../hooks/useToast";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const toast = useToast();

  const {
    value: newPasswordValue,
    handleInputChange: handleNewPasswordChange,
    handleInputBlur: handleNewPasswordBlur,
    hasError: newPasswordHasError,
    reset: newPasswordReset,
    isValid: newPasswordIsValid,
  } = useInput("", (value) => hasMinLength(value, 8));

  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    value: confirmNewPasswordValue,
    handleInputChange: handleConfirmNewPasswordChange,
    handleInputBlur: handleConfirmNewPasswordBlur,
    hasError: confirmNewPasswordHasError,
    reset: confirmPasswordReset,
    isValid: confirmPasswordIsValid,
  } = useInput("", (value) => isEqualToOtherValue(value, newPasswordValue));

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (oobCode) {
      doConfirmPasswordReset(oobCode, newPasswordValue)
        .then(() => toast.showToast({ text: "Password successfully reset." }))
        .catch(() =>
          toast.showToast({ text: "Ups something went wrong", error: true })
        )
        .finally(() => {
          newPasswordReset();
          confirmPasswordReset();
        });
    } else {
      toast.showToast({text: "No valid password reset link found. Please request a new one.", error: true, link: { text: "Forgot Password", to: "/forgot-password" }})
    }
  }

  return (
    <main className={styles["main"]}>
      <form
        className={styles["form"]}
        onSubmit={(event) => handleSubmit(event)}
      >
        <LogoIcon className={styles["form__logo"]} />

        <div
          className={clsx(
            styles["form__section"],
            styles["form__section--text"]
          )}
        >
          <h1 className={styles["form__headline"]}>Reset Your Password</h1>
          <p className={styles["form__description"]}>
            Choose a new password to secure your account.
          </p>
        </div>

        <div className={styles["form__section"]}>
          <Input
            label="New Password"
            id="newPassword"
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={newPasswordValue}
            onBlur={handleNewPasswordBlur}
            onChange={handleNewPasswordChange}
            hint="At least 8 characters."
            error={newPasswordHasError && "Please enter a valid password."}
            button={{
              position: "right",
              onClick: () => {
                setShowNewPassword((prev) => !prev);
              },
              content: showNewPassword ? <HidePassword /> : <ShowPassword />,
            }}
          />

          <Input
            label="Confirm New Password"
            id="confirmNewPassword"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmNewPassword"
            value={confirmNewPasswordValue}
            onBlur={handleConfirmNewPasswordBlur}
            onChange={handleConfirmNewPasswordChange}
            error={
              confirmNewPasswordHasError &&
              "Please make sure both passwords are the same."
            }
            button={{
              position: "right",
              onClick: () => {
                setShowConfirmPassword((prev) => !prev);
              },
              content: showConfirmPassword ? (
                <HidePassword />
              ) : (
                <ShowPassword />
              ),
            }}
          />

          <button
            className={clsx("btn", "btn--primary", styles["btn"])}
            type="submit"
            disabled={ !(newPasswordIsValid && confirmPasswordIsValid) }
          >
            Reset Password
          </button>
        </div>
      </form>
    </main>
  );
}

export default ResetPassword;
