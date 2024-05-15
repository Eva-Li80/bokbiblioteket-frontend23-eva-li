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
import Form from "../components/Form/Form";
import List from "../components/List/List";
import ButtonSmall from "../components/Buttons/ButtonSmall";
import ButtonMedium from "../components/Buttons/ButtonMedium";

const Page = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const readBooks = useSelector((state: RootState) => state.book.readBooks);
  const dispatch = useDispatch();
  const [averageGrade, setAverageGrade] = useState<number | null>(null);
  const [averagePages, setAveragePages] = useState<number | null>(null);
  const [authors, setAuthors] = useState<string[]>([]);

  const countBooks = readBooks.length;

  const totalPage = readBooks.reduce(
    (total, book) => total + parseInt(book.about?.pages || "0"),
    0
  );

  const handleAverageGrade = () => {
    const totalGrade = readBooks.reduce(
      (total, book) => total + parseInt(book.about?.grade || "0"),
      0
    );
    if (totalGrade > 0) {
      const averageGrade = totalGrade / countBooks;
      setAverageGrade(averageGrade);
    } else {
      setAverageGrade(null);
    }
  };

  const handleAveragePages = () => {
    const totalPages = readBooks.reduce(
      (total, book) => total + parseInt(book.about?.pages || "0"),
      0
    );
    if (totalPage > 0) {
      const averagePages = totalPages / countBooks;
      setAveragePages(averagePages);
    } else {
      setAveragePages(null);
    }
  };

  const handleAuthors = () => {
    const uniqueAuthors: string[] = [];
    readBooks.forEach((book) => {
      if (book.author_name) {
        book.author_name.forEach((authors) => {
          if (!uniqueAuthors.includes(authors)) {
            uniqueAuthors.push(authors);
          }
        });
      }
    });
    setAuthors(uniqueAuthors);
  };

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
      <h1>List of read books and your reviews..</h1>
      <div className={styles.bookcount}>
        <div>
          <p className={styles.count}>
            You have read <span> {countBooks} </span>book/books & total{" "}
            <span> {totalPage} </span>pages
          </p>
        </div>
        <h2>Fill in the form for the books and you can se more info..</h2>
        <div className={styles.authors}>
          <ButtonMedium onClick={handleAuthors}>
            Click to see Authors in the list
          </ButtonMedium>
          <p>
            {authors.map((a) => (
              <div key={a}>{a}</div>
            ))}
          </p>
        </div>

        <div className={styles.average}>
          <div>
            <p>{averagePages}</p>
            <ButtonMedium onClick={handleAveragePages}>
              Click to see average pages
            </ButtonMedium>
          </div>
          <div>
            <p>{averageGrade}</p>
            <ButtonMedium onClick={handleAverageGrade}>
              Click to see average grade
            </ButtonMedium>
          </div>
        </div>
      </div>
      <div>
        <List
          items={readBooks}
          typeToRender={(book: Book) => (
            <div
              key={book.key}
              className={styles.listitem}
              style={{ width: "45vw" }}
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt="Omslagsbild"
                width={250}
                height={300}
              />
              <h2>{book.title}</h2>
              <p>{book.first_publish_year} </p>
              <div className={styles.review}>
                <div
                  className={styles.click}
                  onClick={() => handleSelectedBook(book)}
                >
                  <h1>Click here to write reviews!</h1>
                </div>
                <div className={styles.reviews}>
                  <p>Rating: {`${book.about?.grade}/ out of 5 stars`} </p>
                  <p>Pages: {book.about?.pages}</p>
                  <p>review: {book.about?.review}</p>
                  <ButtonSmall onClick={() => handleRemoveReadBook(book)}>
                    Remove
                  </ButtonSmall>
                </div>
              </div>

              {selectedBook && selectedBook.key === book.key && (
                <Form onSave={handleSaveAboutBookInfo} />
              )}
            </div>
          )}
          className={styles.list}
        />
      </div>
    </div>
  );
};

export default Page;
