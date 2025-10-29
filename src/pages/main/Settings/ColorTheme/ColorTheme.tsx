import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from "./ColorTheme.module.scss";

import BackIcon from "./../../../../assets/images/icon-arrow-left.svg?react";
import SettingsRadioButton from "../../../../components/SettingsRadioButton/SettingsRadioButton";
import LightIcon from "./../../../../assets/images/icon-sun.svg?react";
import MoonIcon from "./../../../../assets/images/icon-moon.svg?react";
import SystemIcon from "./../../../../assets/images/icon-system-theme.svg?react";


export default function ColorTheme() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <div className={styles["color-theme"]}>
      {!isDesktop && (
        <Link to={"/settings"} className={styles["color-theme__back-link"]}>
          <BackIcon />
          <span>Settings</span>
        </Link>
      )}
      <h1 className={styles["color-theme__headline"]}>Color Theme</h1>
      <p className={styles["color-theme__subtext"]}>
        Choose your color theme:{" "}
      </p>
      <form className={styles["color-theme__form"]}>
        <div className={styles["color-theme__radio-buttons"]}>
          <SettingsRadioButton
            Icon={LightIcon}
            title="Light Mode"
            subtitle="Pick a clean and classic light theme"
            id="light-mode"
            name="color-theme"
          />
          <SettingsRadioButton
            Icon={MoonIcon}
            title="Dark Mode"
            subtitle="Select a sleek and modern dark theme"
            id="dark-mode"
            name="color-theme"
          />
          <SettingsRadioButton
            Icon={SystemIcon}
            title="System"
            subtitle="Adapts to your device's theme"
            id="system-mode"
            name="color-theme"
          />
        </div>

        <button className="btn btn--primary">Apply Changes</button>
      </form>
    </div>
  );
}
