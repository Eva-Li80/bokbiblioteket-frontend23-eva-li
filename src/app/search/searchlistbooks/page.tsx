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
import Modal from "@/app/components/Module";
import StarIcon from "@mui/icons-material/Star";
import List from "@/app/components/List";
import BookDetails from "@/app/components/BookDetails";

export default function page() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const books = useSelector((state: RootState) => state.book.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const favBooks = useSelector((state: RootState) => state.book.favoritBooks);
  const favorite = selectedBook
    ? favBooks.some((book) => book.key === selectedBook.key)
    : false;

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleAddBook = () => {
    if (selectedBook) {
      if (favorite) {
        dispatch(removeFavoritBook(selectedBook));
      } else {
        dispatch(addToFavoritBooks(selectedBook));
      }
    }
    setSearch("");
  };

  const handleAddBookRead = (book: Book) => {
    dispatch(addToReadBooks(book));
    setSearch("");
    setModalIsOpen(true);

    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedBook(book);
    }, 3000);
  };

  return (
    <div className={styles.favoritlist}>
      <div>
        <Modal isOpen={modalIsOpen} />
      </div>
      {selectedBook ? (
        <div className={styles.favoritlistdetails}>
          <BookDetails book={selectedBook} showDescription={true}/>

          <div className={styles.favorits}>
            <StarIcon
              className={styles.star}
              onClick={handleAddBook}
              color={favorite ? "error" : "inherit"}
            />{" "}
            Mark as favorite
            <button onClick={() => handleAddBookRead(selectedBook)}>
              Add book to your list of read books
            </button>
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
                  width={60}
                  height={90}
                />
                {books.title}
              </h2>
            )}
          />
        </div>
      )}
    </div>
  );
}
