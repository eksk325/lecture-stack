import React from "react";
import styles from "./styles/Initial.module.css";

function Initial() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <label>What is your first name?</label>
        <input
          className={styles.nameBox}
          type="text"
          required
          placeholder="First Name"
        ></input>
      </div>

      <label></label>
      <label>Monday</label>
      <label>Tuesday</label>
      <label>Wednesday</label>
      <label>Thursday</label>
      <label>Friday</label>
    </div>
  );
}

export default Initial;
