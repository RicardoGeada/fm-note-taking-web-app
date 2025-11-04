import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { isEmail, isNotEmpty } from "../../../util/validation";
import styles from "./ForgotPassword.module.scss";
import clsx from "clsx";

import LogoIcon from "./../../../assets/images/logo.svg?react";
import type { FormEvent } from "react";
import { doSendPasswordResetEmail } from "../../../firebase/auth";
import { useToast } from "../../../hooks/useToast";

function ForgotPassword() {
  const toast = useToast();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      doSendPasswordResetEmail(emailValue)
      .then(() => toast.showToast({text: "Successfully send reset link."}))
      .catch(() => toast.showToast({text: "Ups something went wrong.", error: true}));
    }

  return (
    <main className={styles["main"]}>
      <form className={styles["form"]} onSubmit={(event) => handleSubmit(event)}>
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
            label="Email Adress"
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
            disabled={!emailValue}
          >
            Send Reset Link
          </button>
        </section>
      </form>
    </main>
  );
}

export default ForgotPassword;
