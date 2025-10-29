import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from "./FontTheme.module.scss";

import BackIcon from "./../../../../assets/images/icon-arrow-left.svg?react";
import SettingsRadioButton from "../../../../components/SettingsRadioButton/SettingsRadioButton";
import SansSerifIcon from "./../../../../assets/images/icon-font-sans-serif.svg?react";
import SerifIcon from "./../../../../assets/images/icon-font-serif.svg?react";
import MonospaceIcon from "./../../../../assets/images/icon-font-monospace.svg?react";


export default function FontTheme() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });

  return (
    <div className={styles["font-theme"]}>
      {!isDesktop && (
        <Link to={"/settings"} className={styles["font-theme__back-link"]}>
          <BackIcon />
          <span>Settings</span>
        </Link>
      )}
      <h1 className={styles["font-theme__headline"]}>Font Theme</h1>
      <p className={styles["font-theme__subtext"]}>
        Choose your font theme:{" "}
      </p>
      <form className={styles["font-theme__form"]}>
        <div className={styles["font-theme__radio-buttons"]}>
          <SettingsRadioButton
            Icon={SansSerifIcon}
            title="Sans-serif"
            subtitle="Clean and modern, easy to read."
            id="sans-serif"
            name="font-theme"
          />
          <SettingsRadioButton
            Icon={SerifIcon}
            title="Serif"
            subtitle="Classic and elegant for a timeless feel."
            id="serif"
            name="font-theme"
          />
          <SettingsRadioButton
            Icon={MonospaceIcon}
            title="Monospace"
            subtitle="Code-like, great for a technical vibe."
            id="monospace"
            name="font-theme"
          />
        </div>

        <button className="btn btn--primary">Apply Changes</button>
      </form>
    </div>
  );
}
