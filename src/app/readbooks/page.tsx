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

  const countBooks = readBooks.length;
  const totalPage = readBooks.reduce((total, book) => total + parseInt(book.about?.pages || "0"), 0)

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
      <h1>Read books</h1>
       <div className={styles.bookcount}>
        <p>You have read {countBooks} book/books & total {totalPage} pages</p>
       </div>

      {readBooks.map((book: Book) => (
        <div key={book.key} className={styles.listitem}>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={250}
            height={300}
          />
          <h2>{book.title}</h2>
          <p>{book.first_publish_year} </p>
          <div className={styles.review}>
            <div className={styles.click}  onClick={() => handleSelectedBook(book)}>
              <h1>Click here to write reviews!</h1>
            </div>
            <div className={styles.reviews}>
              <p>Rating: {`${book.about?.grade}/ out of 5 stars`}  </p>
              <p>Pages: {book.about?.pages}</p>
              <p>review: {book.about?.review}</p>
              <button onClick={() => handleRemoveReadBook(book)}>
                Remove book
              </button>
            </div>
          </div>

          {selectedBook && selectedBook.key === book.key && (
            <Form onSave={handleSaveAboutBookInfo} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
