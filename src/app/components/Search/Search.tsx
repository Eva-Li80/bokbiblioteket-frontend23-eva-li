"use client";
import React from "react";
import { useSearchData } from "../../hooks/useSearchData"
import Link from "next/link";
import styles from "./searches.module.scss";

type SearchProps = {
  type: "book" | "author";
};

export function Search({ type }: SearchProps) {
const {search, setSearch , handleSearchClick} = useSearchData(type)

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={type === "book" ? "Enter title..." : "Enter author name"}
      />
      <Link href={type === "book" ? "/search/searchlistbooks" : "/search/searchlistauthors"} onClick={handleSearchClick}>
        <h1>Search</h1>
      </Link>
    </div>
  );
}
