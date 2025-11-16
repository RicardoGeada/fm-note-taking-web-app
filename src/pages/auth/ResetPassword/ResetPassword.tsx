import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import clsx from "clsx";

import styles from "./ResetPassword.module.scss";
import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { useToast } from "../../../hooks/useToast";
import { hasMinLength, isEqualToOtherValue } from "../../../utils/validation";
import { doConfirmPasswordReset } from "../../../firebase/auth";

import LogoIcon from "./../../../assets/images/logo.svg?react";
import ShowPassword from "./../../../assets/images/icon-show-password.svg?react";
import HidePassword from "./../../../assets/images/icon-hide-password.svg?react";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate()

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
      setSubmitting(true);
      doConfirmPasswordReset(oobCode, newPasswordValue)
        .then(() => {showToast({ text: "Password successfully reset." }); navigate("/login");})
        .catch((error) => {
          if (error.code === "auth/expired-action-code") {
            showToast({
              text: "This reset link has expired.",
              error: true,
              link: { text: "Request a new one", to: "/forgot-password" },
            });
          } else if (error.code === "auth/invalid-action-code") {
            showToast({
              text: "This reset link is invalid.",
              error: true,
              link: { text: "Request a new one", to: "/forgot-password" },
            });
          } else {
            showToast({ text: "An unexpected error occurred.", error: true });
          }
        })

        .finally(() => {
          newPasswordReset();
          confirmPasswordReset();
          setSubmitting(false);
        });
    } else {
      showToast({
        text: "No valid password reset link found. Please request a new one.",
        error: true,
        link: { text: "Forgot Password", to: "/forgot-password" },
      });
    }
  }

  return (
    <main className={styles["main"]}>
      <form
        className={clsx(styles["form"], submitting ? "loading-border" : "")}
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
            autoComplete="new-password"
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
              content: showNewPassword ? (
                <HidePassword aria-label="Hide password" />
              ) : (
                <ShowPassword aria-label="Show password" />
              ),
            }}
          />

          <Input
            autoComplete="confirm-password"
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
                <HidePassword aria-label="Hide password" />
              ) : (
                <ShowPassword aria-label="Show password" />
              ),
            }}
          />

          <button
            className={clsx("btn", "btn--primary", styles["btn"])}
            type="submit"
            disabled={
              !newPasswordIsValid || !confirmPasswordIsValid || submitting
            }
          >
            Reset Password
          </button>
        </div>
      </form>
    </main>
  );
}

export default ResetPassword;
