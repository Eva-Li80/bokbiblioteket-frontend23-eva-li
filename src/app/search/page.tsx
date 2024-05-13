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
            <h1>Search on...</h1>
            <Button onClick={() => handleSearch("book")} classname={styles.button}>
            Book title
            </Button>
            <h1>or..</h1>
            <Button onClick={() => handleSearch("author")} classname={styles.button}>
            Authors name
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
