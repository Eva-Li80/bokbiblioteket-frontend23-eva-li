"use client"
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Author} from "@/app/lib/types";
import { setAuthors} from "@/app/globalredux/feature/books/bookSlice";
import { fetchAthurByName } from "@/app/lib/getApi";
import Link from "next/link";
import styles from "./favorits.module.scss";

const FavoritAuthor = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchAuthor = async () => {
    try {
      const filteredAuthors = await fetchAthurByName(search);
      dispatch(setAuthors(filteredAuthors as Author[]));
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    searchAuthor();
  }, [dispatch]);

  const handleSearchClick = () => {
    searchAuthor(); 
  };
  
  return (
    <div className={styles.favorits}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter author name"
      />
      <Link href="/search/searchlistauthors" onClick={handleSearchClick}>Sök</Link>
     
    </div>
  );
};

export default FavoritAuthor;
