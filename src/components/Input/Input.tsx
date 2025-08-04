/// <reference types="vite-plugin-svgr/client" />
import clsx from "clsx";
import styles from "./Input.module.scss";
import InfoIcon from './../../assets/images/icon-info.svg?react';

function Input() {
  return (
    <div className={styles["input-field"]}>
      <label className={styles["input-field__label"]} htmlFor="input">Label</label>

      <div className={styles["input-field__input-container"]} >
        <input 
          className={clsx(styles["input-field__input"], styles["input-field__input--btn-start"], styles["input-field__input--btn-end"])} 
          id="input" 
          type="password" 
          placeholder="Placeholder Text"
        />
        {/* Icon / Button */}
        <button className={clsx(styles["input-field__btn"], styles["input-field__btn--start"])}>
          <img src="./images/icon-show-password.svg" alt="" />
        </button>
        <button className={clsx(styles["input-field__btn"], styles["input-field__btn--end"])}>
          <img src="./images/icon-show-password.svg" alt="" />
        </button>
      </div>  
      

      <div className={clsx(styles["input-field__info"])}>
        <InfoIcon />
        <span>This is a hint text to help the user.</span>
      </div>
    </div>
  );
}

export default Input;
