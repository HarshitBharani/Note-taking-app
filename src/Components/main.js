import { useEffect, useState } from "react";
import { InputContainer } from "./InputContainer";
import styles from "./main.module.css";
export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <InputContainer />
    </div>
  );
}
