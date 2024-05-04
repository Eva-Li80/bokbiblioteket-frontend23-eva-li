"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Book } from "@/app/lib/types";
import {
  setBooks,

} from "@/app/globalredux/feature/books/bookSlice";
import { fetchBooksByTitle } from "@/app/lib/getApi";
import Link from "next/link";
import styles from "./favorits.module.scss";

export function FavoritBook() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchBook = async () => {
    try {
      const filteredBooks = await fetchBooksByTitle(search);
      console.log(filteredBooks)
      dispatch(setBooks(filteredBooks as Book[]));
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    searchBook();
  }, [dispatch]);

  const handleSearchClick = () => {
    searchBook();
  };

  return (
    <div className={styles.favorits}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Skriv titel..."
      />
      <Link href="/search/searchlistbooks" onClick={handleSearchClick}>
        Sök
      </Link>
    </div>
  );
};

