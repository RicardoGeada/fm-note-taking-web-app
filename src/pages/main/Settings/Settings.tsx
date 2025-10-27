import styles from "./Settings.module.scss";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";

import ColorIcon from "./../../../assets/images/icon-sun.svg?react";
import FontIcon from "./../../../assets/images/icon-font.svg?react";
import ChangePasswordIcon from "./../../../assets/images/icon-lock.svg?react";
import LogoutIcon from "./../../../assets/images/icon-logout.svg?react";
import SettingsListItem from "./SettingsListItem/SettingsListItem";
import { useMediaQuery } from "react-responsive";

export default function Settings() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <MainContentWrapper>
      <div className={styles["settings"]}>
        {!isDesktop && <h1 className={styles["settings__headline"]}>Settings</h1>}
        <ul className={styles["settings__list"]}>
          <SettingsListItem Icon={ColorIcon} to="/settings/color-theme" text="Color Theme"/>
          <SettingsListItem Icon={FontIcon} to="/settings/font-theme" text="Font Theme"/>
          <SettingsListItem Icon={ChangePasswordIcon} to="/settings/change-password" text="Change Password"/>
          <div className="hl-separator"></div>
          <SettingsListItem Icon={LogoutIcon} to="/settings/logout" text="Logout"/>
        </ul>
      </div>
    </MainContentWrapper>
  );
}
