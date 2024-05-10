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

export default function page() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const books = useSelector((state: RootState) => state.book.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

 const favBooks = useSelector((state: RootState) => state.book.favoritBooks)
 const favorite = selectedBook ? favBooks.some((book) => book.key === selectedBook.key): false;

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
      <div className={styles.modal}>
        <Modal isOpen={modalIsOpen}>
          <h2>Boken har lagts till i din favorit lista</h2>
        </Modal>
      </div>
      {selectedBook ? (
        <div className={styles.favoritlistdetails}>
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
          <p>Description: {selectedBook.description}</p>
          <p>Genre: {selectedBook.subjects}</p>

          <div className={styles.favorits}>
            
            <StarIcon
            className={styles.star}
              onClick={handleAddBook}
              color={favorite ? "error" : "inherit"}
           /> Markera som favorit
             <button onClick={() => handleAddBookRead(selectedBook)}>
            Lägg till som läst bok
          </button>
          </div>

       
        </div>
      ) : (
        <div>
          <h1>Sökta titlar</h1>
          {books.map((book: Book, index: number) => (
            <div
              className={styles.listcontainer}
              key={index}
              onClick={() => handleBookClick(book)}
            >
              <h2 className={styles.favoritlistitem}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt="Omslagsbild"
                  width={60}
                  height={90}
                />
                {book.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
