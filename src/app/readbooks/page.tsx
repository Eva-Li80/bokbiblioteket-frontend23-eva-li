"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book, AboutBook } from "@/app/lib/types";
import {
  addInfoAboutBook,
  removeReadBook,
} from "@/app/globalredux/feature/books/bookSlice";
import styles from "./readbooks.module.scss";
import Form from "../components/Form";

const Page = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const readBooks = useSelector((state: RootState) => state.book.readBooks);
  const dispatch = useDispatch();

  const handleRemoveReadBook = (book: Book) => {
    dispatch(removeReadBook(book));
  };

  const handleSelectedBook = (book: Book) => {
    setSelectedBook(book);
  };
  const handleSaveAboutBookInfo = (formData: AboutBook) => {
    if (selectedBook && selectedBook.key) {
      dispatch(
        addInfoAboutBook({
          key: selectedBook.key,
          review: formData.review,
          grade: formData.grade,
          pages: formData.pages,
        })
      );
    }
  };

  return (
    <div className={styles.readbooks}>
      <h1>Lästa Böcker</h1>
      <h2>Klicka på en bok för att lägga till ditt tycke om den.</h2>

      {readBooks.map((book: Book) => (
        <div key={book.key} className={styles.listitem}>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={250}
            height={300}
          />
          <h2 onClick={() => handleSelectedBook(book)}>{book.title}</h2>
          <p>{book.first_publish_year} </p>
          <p>Betyg för boken: {book.about?.grade} </p>
          <p>Sidor: {book.about?.pages }</p>
          <p>tycke om boken: {book.about?.review }</p>

          <button onClick={() => handleRemoveReadBook(book)}>
            Ta bort bok från listan
          </button>

          {selectedBook && selectedBook.key === book.key && (
            <Form onSave={handleSaveAboutBookInfo} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
