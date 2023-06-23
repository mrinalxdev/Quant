import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={styles.button}
      >{`${text} 👉`}</button>
    </div>
  );
};

export default Button;
