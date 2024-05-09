"use client";
import React, { useState } from "react";
import FavoritAuthor from "../components/FavoritAuthor";

import styles from "./search.module.scss";
import { FavoritBook } from "../components/FavoritBook";
import Button from "../components/Button";

export default function page() {
  const [search, setSearch] = useState("");

  const handleSearch = (type: string) => {
    setSearch(type);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchbox}>
        {search === "författarnamn" && <FavoritAuthor />}
          {search === "title" && <FavoritBook />}
        <div className={styles.btn}>
          <div className={styles.btns}>
            <h1>Sök på..</h1>
            <Button onClick={() => handleSearch("title")}>
            Boktitel
            </Button>
            <h1>eller..</h1>
            <Button onClick={() => handleSearch("författarnamn")}>
            Författares namn
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
