/// <reference types="vite-plugin-svgr/client" />
import clsx from "clsx";
import styles from "./Input.module.scss";
import InfoIcon from './../../assets/images/icon-info.svg?react';

interface InputButtonConfig {
  position: 'left' | 'right',
  onClick: () => void,
  content: React.ReactNode, 
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  id: string,
  error?: boolean | string,
  hint?: string,
  button?: InputButtonConfig,
}

const Input: React.FC<InputProps> = ({ label, id, error, hint, button, ...props }) => {

  return (
    <div className={styles["input-field"]}>
      <label className={styles["input-field__label"]} htmlFor={id}>{ label }</label>

      <div className={styles["input-field__input-container"]} >
        <input
          id={id}  
          className={
            clsx(
              styles["input-field__input"], 
              button?.position === 'left' && styles["input-field__input--btn-left"], 
              button?.position === 'right' && styles["input-field__input--btn-right"],
              error && styles["input-field__input--invalid"]
            )
          } 
          { ...props }
        />
        {/* Icon / Button */}
        {button && (
          <button 
            type="button"
            onClick={button.onClick} 
            className={clsx(
              styles["input-field__btn"], 
              button.position === 'left' 
              ? styles["input-field__btn--left"]
              : styles["input-field__btn--right"])}>
            {button.content}
          </button>
        )}
      </div>  
      
      {/* Hint / Notification */}
      {(error || hint) && 
       <div className={clsx(styles["input-field__info"], error && styles["input-field__info--invalid"])}>
         <InfoIcon />
         <span>{error || hint}</span>
       </div> 
      }
      
    </div>
  );
}

export default Input;
