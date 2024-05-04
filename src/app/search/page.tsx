"use client";
import React, { useState } from "react";
import FavoritAuthor from "../components/FavoritAuthor";

import styles from "./search.module.scss";
import { FavoritBook } from "../components/FavoritBook";

export default function page() {
  const [search, setSearch] = useState("");

  const handleSearch = (type: string) => {
    setSearch(type);
  };
  return (
    <div className={styles.search}>
      <h1>Välkommen till sök sidan!</h1>
      <h2>Här kan du välja att söka på boktitel eller författarens namn?</h2>
      <div className={styles.btn}>
        <button onClick={() => handleSearch("title")}>Sök på boktitel</button>
        <button onClick={() => handleSearch("författarnamn")}>
          Sök på författarens namn
        </button>
        {search === "författarnamn" && <FavoritAuthor />}
        {search === "title" && <FavoritBook />}
      </div>
    </div>
  );
}
