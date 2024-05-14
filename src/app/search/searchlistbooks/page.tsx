"use client";
import {
  addToFavoritBooks,
  addToReadBooks,
  removeFavoritBook,
} from "@/app/globalredux/feature/books/bookSlice";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../search.module.scss";
import Modal from "@/app/components/Module/Module";
import List from "@/app/components/List/List";
import BookDetails from "@/app/components/Details/BookDetails";
import Favorite from "@/app/components/Favorites/Favorite";
import Link from "next/link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function page() {
  const books = useSelector((state: RootState) => state.book.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const favBooks = useSelector((state: RootState) => state.book.favoritBooks);
  const favorite = selectedBook
    ? favBooks.some((book) => book.key === selectedBook.key)
    : false;

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleAddToFavorite = () => {
    if (selectedBook) {
      if (favorite) {
        dispatch(removeFavoritBook(selectedBook));
      } else {
        dispatch(addToFavoritBooks(selectedBook));
        setModalIsOpen(true);

        setTimeout(() => {
          setModalIsOpen(false);
        }, 3000);
      }
    }
    setSearch("");
  };

  const handleAddBookRead = (book: Book) => {
    dispatch(addToReadBooks(book));
    setSearch("");
  };

  return (
    <div className={styles.favoritlist}>
      <div>
        <Modal isOpen={modalIsOpen} />
      </div>
      {selectedBook ? (
        <div className={styles.favoritlistdetails}>
          <BookDetails
            book={selectedBook}
            showDescription={true}
            showpublisher={true}
            showGenre={true}
            className={styles.button}
          />
          <div className={styles.favorits}>
            <div className={styles.favbook}>
              <Favorite
                onClick={handleAddToFavorite}
                color={favorite ? "error" : "inherit"}
                className={styles.star}
              />
              <Link href="/favoritbooks" className={styles.link}>
                Go to favorite books <ArrowUpwardIcon />
              </Link>
            </div>
            <div className={styles.favread}>
              <h1>Save the book to your read books and see the list..</h1>
              <Link
                href="/readbooks"
                className={styles.link}
                onClick={() => handleAddBookRead(selectedBook)}
              >
                Read books <ArrowUpwardIcon />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Searched titles</h1>
          <List
            items={books}
            onClick={handleBookClick}
            typeToRender={(books: Book) => (
              <h2 className={styles.favoritlistitem}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg`}
                  alt="Omslagsbild"
                  width={90}
                  height={120}
                />
                {books.title}
              </h2>
            )}
            className={styles.list}
          />
        </div>
      )}
    </div>
  );
}