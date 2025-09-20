import React from "react";
import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
