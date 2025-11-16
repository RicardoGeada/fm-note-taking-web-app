import { useState, type FormEvent } from "react";

import clsx from "clsx";

import styles from "./ForgotPassword.module.scss";
import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { useToast } from "../../../hooks/useToast";
import { isEmail, isNotEmpty } from "../../../utils/validation";
import { doSendPasswordResetEmail } from "../../../firebase/auth";

import LogoIcon from "./../../../assets/images/logo.svg?react";

function ForgotPassword() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: resetEmailValue,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    doSendPasswordResetEmail(emailValue)
      .then(() => {
        showToast({ text: "We've sent you a password reset link." });
        resetEmailValue();
      })
      .catch(() =>
        showToast({
          text: "Something went wrong. Please try again later.",
          error: true,
        })
      )
      .finally(() => setSubmitting(false));
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
          <h1 className={styles["form__headline"]}>Forgotten your password?</h1>
          <p className={styles["form__description"]}>
            Enter your email below, and we’ll send you a link to reset it.
          </p>
        </div>

        <section className={styles["form__section"]}>
          <Input
            autoComplete="email"
            label="Email Address"
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailHasError && "Please enter a valid email."}
          />

          <button
            className={clsx("btn", "btn--primary", styles["btn"])}
            type="submit"
            disabled={!emailIsValid || submitting}
          >
            Send Reset Link
          </button>
        </section>
      </form>
    </main>
  );
}

export default ForgotPassword;
