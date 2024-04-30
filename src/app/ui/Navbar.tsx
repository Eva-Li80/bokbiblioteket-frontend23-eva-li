"use client";
import React from "react";
import { useToggle } from "./useToggle";
import Menubar from "./Menubar";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={styles.navbar}>
      <div className={styles.btn}>
        <button onClick={handleToggle}>{toggle ? "Menu" : <Menubar />}</button>
      </div>
    </div>
  );
};

export default Navbar;
