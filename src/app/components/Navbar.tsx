import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menubar}>
        <ul>
          <li>
            <Link href="/favoritbooks">Favorite books</Link>
            <Link href="/favoritauthors">Favoorite authors</Link>
            <Link href="/readbooks">Read books</Link>
            <Link href="/search">Search  <SearchIcon /></Link>
            <Link href="/">Back to start</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
