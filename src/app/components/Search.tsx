"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Author, Book } from "@/app/lib/types";
import {
  setBooks,

} from "@/app/globalredux/feature/books/bookSlice";
import { fetchAthurByName, fetchBooksByTitle } from "@/app/lib/getApi";
import Link from "next/link";
import styles from "./searches.module.scss"
import { setAuthors } from "../globalredux/feature/books/authorSlice";

type SearchProps = {
    type: "book" | "author"
}

export function Search({type}:SearchProps) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  
  const searchData = async () => {
    try {
      if(!search.trim()){
        return;
       
      } let filterData;
      if(type === "book"){
        filterData = await fetchBooksByTitle(search);
        dispatch(setBooks(filterData as Book[]));
      }else{
        const filterData = await fetchAthurByName(search);
        dispatch(setAuthors(filterData as Author[]));
      }
  
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const handleSearchClick = () => {
    searchData();
  };

  return (
    <div className={styles.favorits}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={type === "book" ? "Enter title...":"Enter author name"}
      />
      <Link href={type === "book" ? "/search/searchlistbooks" : "/search/searchlistauthors"} onClick={handleSearchClick}>
      <h1>Search</h1>
      </Link>
    </div>
  );
};

