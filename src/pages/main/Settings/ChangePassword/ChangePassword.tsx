import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from "./ChangePassword.module.scss";

import BackIcon from "./../../../../assets/images/icon-arrow-left.svg?react";
import ShowIcon from "./../../../../assets/images/icon-show-password.svg?react";
import Input from "../../../../components/Input/Input";

export default function ChangePassword() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <div className={styles["change-password"]}>
      {!isDesktop && (
        <Link to={"/settings"} className={styles["change-password__back-link"]}>
          <BackIcon />
          <span>Settings</span>
        </Link>
      )}
      <h1 className={styles["change-password__headline"]}>Change Password</h1>
      <form className={styles["change-password__form"]}>
        <Input
          id="oldPassword"
          type="password"
          label="Old Password"
          button={{
            position: "right",
            onClick: () => {
              console.log("Click");
            },
            content: <ShowIcon />,
          }}
        />
        <Input
          id="newPassword"
          type="password"
          label="New Password"
          hint="At least 8 characters"
          button={{
            position: "right",
            onClick: () => {
              console.log("Click");
            },
            content: <ShowIcon />,
          }}
        />
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          button={{
            position: "right",
            onClick: () => {
              console.log("Click");
            },
            content: <ShowIcon />,
          }}
        />
        <button className="btn btn--primary">Save Password</button>
      </form>
    </div>
  );
}
