import Link from "next/link";
import React from "react";
import styles from "./menubar.module.scss"

const Menubar = () => {
  return (
    <div className={styles.menubar}>
      <ul>
        <li>
          <Link href="/biblioteket/favoritbooks">Favorit böcker</Link>
          <Link href="/biblioteket/favoritauthors">Favorit författare</Link>
          <Link href="/biblioteket/readbooks">Lästa böcker</Link>
          <Link href="/biblioteket/search">Sök</Link>
          <Link href="/biblioteket">Tillbaka till start</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
