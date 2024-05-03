import Link from "next/link";
import React from "react";
import styles from "./menubar.module.scss"

const Menubar = () => {
  return (
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
  );
};

export default Menubar;
