import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
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
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonsName.map((item) => (
          <button className={styles.button} onClick={ ()=> onButtonClick(item)} > {item} </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
