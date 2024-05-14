"use client";
import React, { useState } from "react";
import styles from "./search.module.scss";
import { Search } from "../components/Search";
import ButtonMedium from "../components/ButtonMedium";

export default function page() {
  const [search, setSearch] = useState<"book" | "author">("book");

  const handleSearch = (type: "book" | "author") => {
    setSearch(type);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchbox}>
        <Search type={search} />
        <div className={styles.btns}>
          <span>Search on...</span>
          <ButtonMedium onClick={() => handleSearch("book")}>
            <h1>Book title</h1>
          </ButtonMedium>
          <span>or..</span>
          <ButtonMedium onClick={() => handleSearch("author")}>
            <h1>Author name</h1>
          </ButtonMedium>
        </div>
      </div>
    </div>
  );
}
