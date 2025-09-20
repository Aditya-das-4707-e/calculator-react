import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    ".",
    "=",
  ];

  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonsName.map((item, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() => onButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
