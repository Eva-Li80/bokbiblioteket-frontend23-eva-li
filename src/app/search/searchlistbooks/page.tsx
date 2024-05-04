"use client";
import {
  addToFavoritBooks,
  selectBook,
  setBooks,
} from "@/app/globalredux/feature/books/bookSlice";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../search.module.scss";
export default function page() {
  const books = useSelector((state: RootState) => state.book.books);
  const selectedBook = useSelector(
    (state: RootState) => state.book.selectedBook
  );
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleBookClick = (book: Book) => {
    dispatch(selectBook(book));
  };

  const handleAddBook = (book: Book) => {
    dispatch(addToFavoritBooks(book));
    setSearch("");
  };

  return (
    <div className={styles.favoritlist}>
      {selectedBook ? (
        <div className={styles.favoritlistdetails}>
          <h1>Bok detaljer</h1>
          <h2>Title: {selectedBook.title}</h2>
          <img
            src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={200}
            height={250}
          />
          <p>First sentence: {selectedBook.first_sentence}</p>
          <p>Author name: {selectedBook.author_name}</p>
          <p>Year: {selectedBook.first_publish_year}</p>
          <p>Publisher: {selectedBook.publisher}</p>
          <Link
            href="/favoritbooks"
            onClick={() => handleAddBook(selectedBook)}
          >
            Lägg till bok till favoritlistan
          </Link>
        </div>
      ) : (
        <div className={styles.favoritlist}>
          <h1>Sökta titlar</h1>
          {books.map((book: Book, index: number) => (
            <div key={index} onClick={() => handleBookClick(book)}>
              <h2 className={styles.favoritlistitem}>{book.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
