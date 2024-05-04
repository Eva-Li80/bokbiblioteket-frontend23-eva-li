import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menubar}>
        <ul>
          <li>
            <Link href="/favoritbooks">Favorit böcker</Link>
            <Link href="/favoritauthors">Favorit författare</Link>
            <Link href="/readbooks">Lästa böcker</Link>
            <Link href="/search">Sök</Link>
            <Link href="/">Tillbaka till start</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
