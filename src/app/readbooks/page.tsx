"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeReadBook } from "@/app/globalredux/feature/slices/bookSlice";
import styles from "./readbooks.module.scss";
import Form from "../components/Form";
import { useState } from "react";
const page = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const readBooks = useSelector((state: RootState) => state.book.readBooks);
  const dispatch = useDispatch();

  const handleRemoveReadBook = (book: Book) => {
    dispatch(removeReadBook(book));
  };

  const handleSelectedBook = (book: Book) => {
    if (selectedBook === book) {
      setSelectedBook(null);
    } else {
      setSelectedBook(book);
    }
  };

  return (
    <div className={styles.readbooks}>
      <h1>Lästa Böcker</h1>
      <h2>Klicka på en bok för att lägga till ditt tycke om den.</h2>

      {readBooks.map((book: Book, index: number) => (
        <div key={index} className={styles.listitem}>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={250}
            height={300}
          />
<h2 onClick={() => handleSelectedBook(book)}>{book.title}</h2>
          <p>{book.first_publish_year}</p>
          <button onClick={() => handleRemoveReadBook(book)}>Ta bort bok från listan</button>

          {selectedBook === book && <Form />}
        </div>
      ))}
    </div>
  );
};

export default page;
