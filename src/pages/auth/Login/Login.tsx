import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";

import clsx from "clsx";
import { signIn, signInWithGoogle } from "../../../firebase/auth.ts";

import styles from "./Login.module.scss";
import Input from "../../../components/Input/Input";
import { useInput } from "../../../hooks/useInput.ts";
import { useToast } from "../../../hooks/useToast.ts";
import { hasMinLength, isEmail, isNotEmpty } from "../../../util/validation.ts";


import LogoIcon from "./../../../assets/images/logo.svg?react";
import GoogleIcon from "./../../../assets/images/icon-google.svg?react";
import ShowPassword from "./../../../assets/images/icon-show-password.svg?react";
import HidePassword from "./../../../assets/images/icon-hide-password.svg?react";


function Login() {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 8));

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn(emailValue, passwordValue)
      .then(() => {showToast({ text: "Logged in successfully." }); navigate("/all")})
      .catch(() =>
        showToast({ text: "Ups something went wrong.", error: true })
      );
  }

  function handleSignInWithGoogle() {
    signInWithGoogle()
      .then(() => {showToast({ text: "Logged in successfully." }); navigate("/all")})
      .catch(() =>
        showToast({ text: "Ups something went wrong.", error: true })
      );
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
          <h1 className={styles["form__headline"]}>Welcome to Note</h1>
          <p className={styles["form__description"]}>
            Please log in to continue
          </p>
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
            error={emailHasError && "Please enter a valid email."}
          />

          <div className={styles["form__input-container"]}>
            <Link
              to={"/forgot-password"}
              className={clsx("link", "link--underline")}
            >
              Forgot
            </Link>
            <Input
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={passwordValue}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              error={passwordHasError && "Please enter a valid password."}
              button={{
                position: "right",
                onClick: () => {
                  setShowPassword((prev) => !prev);
                },
                content: showPassword ? <HidePassword /> : <ShowPassword />,
              }}
            />
          </div>

          <button
            className={clsx("btn", "btn--primary", styles["btn"])}
            type="submit"
            disabled={!emailValue || !passwordValue}
          >
            Login
          </button>
        </div>

        <div className="hl-separator"></div>

        <div
          className={clsx(
            styles["form__section"],
            styles["form__section--google-login"]
          )}
        >
          <p>Or log in with:</p>

          <button
            className={clsx("btn", "btn--border", styles["btn"])}
            type="button"
            onClick={() => handleSignInWithGoogle()}
          >
            <GoogleIcon />
            Google
          </button>
        </div>

        <div className="hl-separator"></div>

        <p>
          <span>No account yet? </span>
          <Link to={"/signup"} className="link">
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
