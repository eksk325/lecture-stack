import React, { useEffect } from "react";
import Lecture from "./components/Lecture";
import styles from "./styles/Main.module.css";
import data from "./data/data.json";

function Main({ name }) {
  useEffect(() => {
    console.log(JSON.stringify(data) == "{}");
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{name}'s Queue 🥞</h1>
      <div style={{ display: "flex" }}>
        <button className={styles.btn}>Watch Youtube instead</button>
      </div>
      <div className={styles.queue}>
        <Lecture name="SOFTENG 350" hours={2} date="date" />
      </div>
    </div>
  );
}

export default Main;
