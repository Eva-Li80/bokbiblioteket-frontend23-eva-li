"use client";
import React from "react";
import styles from "./header.module.scss";
import { useSeeTime } from "../hooks/useSeeTime";

const Header = () => {
  const clock = useSeeTime();
  return (
    <div className={styles.header}>

      <h2>The Library..</h2>
      <div className={styles.clock}>
        <p>{clock ? clock.toLocaleTimeString() : ""}</p>
      </div>
    </div>
  );
};
export default Header;
