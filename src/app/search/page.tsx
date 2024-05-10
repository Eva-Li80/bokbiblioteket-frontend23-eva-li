"use client";
import React, { useState } from "react";
import styles from "./search.module.scss";
import Button from "../components/Button";
import { Search } from "../components/Search";

export default function page() {
  const [search, setSearch] = useState<"book" | "author">("book");

  const handleSearch = (type: "book" | "author") => {
    setSearch(type);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchbox}>
         <Search type={search}/>
        <div className={styles.btn}>
          <div className={styles.btns}>
            <h1>Sök på..</h1>
            <Button onClick={() => handleSearch("book")}>
            Boktitel
            </Button>
            <h1>eller..</h1>
            <Button onClick={() => handleSearch("author")}>
            Författares namn
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
