import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput";
import { isEmail, isNotEmpty } from "../../../util/validation";
import styles from "./ForgotPassword.module.scss";
import clsx from "clsx";

function ForgotPassword() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  return (
    <main className={styles["main"]}>
      <form className={styles["form"]} action="">
        <img
          className={styles["form__logo"]}
          src="./images/logo.svg"
          alt="notes logo"
        />

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
          >
            Send Reset Link
          </button>
        </section>
      </form>
    </main>
  );
}

export default ForgotPassword;
