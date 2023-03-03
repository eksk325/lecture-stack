import React from "react";
import styles from "../styles/Lecture.module.css";

function Lecture({ key, name, hours, date }) {
  const displayInfo = () => {
    console.log("HOVERING");
  };

  const closeInfo = () => {
    console.log("NOT HOVERING");
  };

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <i
        className="fa-regular fa-circle-question"
        onMouseEnter={displayInfo}
        onMouseLeave={closeInfo}
      ></i>
    </div>
  );
}

export default Lecture;
