import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSettingsContext } from "../../../../hooks/useSettingsContext";
import { useState } from "react";

import styles from "./ColorTheme.module.scss";

import BackIcon from "./../../../../assets/images/icon-arrow-left.svg?react";
import SettingsRadioButton from "../../../../components/SettingsRadioButton/SettingsRadioButton";
import LightIcon from "./../../../../assets/images/icon-sun.svg?react";
import MoonIcon from "./../../../../assets/images/icon-moon.svg?react";
import SystemIcon from "./../../../../assets/images/icon-system-theme.svg?react";



export default function ColorTheme() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { colorTheme, setColorTheme } = useSettingsContext();
  const [selectedTheme, setSelectedTheme] = useState(colorTheme);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setColorTheme(selectedTheme);
  }

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
      <form className={styles["color-theme__form"]} onSubmit={handleSubmit}>
        <div className={styles["color-theme__radio-buttons"]}>
          <SettingsRadioButton
            Icon={LightIcon}
            title="Light Mode"
            subtitle="Pick a clean and classic light theme"
            id="light-mode"
            name="color-theme"
            value="light"
            checked={selectedTheme === "light"}
            onChange={() => setSelectedTheme("light")}
          />
          <SettingsRadioButton
            Icon={MoonIcon}
            title="Dark Mode"
            subtitle="Select a sleek and modern dark theme"
            id="dark-mode"
            name="color-theme"
            value="dark"
            checked={selectedTheme === "dark"}
            onChange={() => setSelectedTheme("dark")}
          />
          <SettingsRadioButton
            Icon={SystemIcon}
            title="System"
            subtitle="Adapts to your device's theme"
            id="system-mode"
            name="color-theme"
            value="system"
            checked={selectedTheme === "system"}
            onChange={() => setSelectedTheme("system")}
          />
        </div>

        <button className="btn btn--primary">Apply Changes</button>
      </form>
    </div>
  );
}
