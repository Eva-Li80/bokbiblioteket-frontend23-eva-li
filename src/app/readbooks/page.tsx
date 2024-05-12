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
import List from "../components/List";

const Page = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const readBooks = useSelector((state: RootState) => state.book.readBooks);
  const dispatch = useDispatch();
  const [averageGrade, setAverageGrade] = useState(0)
  const [averagePages, setAveragePages] = useState(0)
  const [authors , setAuthors] = useState<string[]>([])

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
  
    const averageGrade = totalGrade / countBooks
    setAverageGrade(averageGrade)
  }

  const handleAveragePages = () => {
    const totalPages = readBooks.reduce(
      (total, book) => total + parseInt(book.about?.pages || "0"),
      0
    );

    const averagePages = totalPages / countBooks
    setAveragePages(averagePages)
  }

  
  const handleAuthors = () => {
    const uniqueAuthors: string[] = []
    readBooks.forEach((book) => {
      if(book.author_name){
        book.author_name.forEach((authors) => {
          if(!uniqueAuthors.includes(authors)){
            uniqueAuthors.push(authors)
          }
        })
      }
    })
    setAuthors(uniqueAuthors)
  }
  






  
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
        <p>
          You have read {countBooks} book/books & total {totalPage} pages
        </p>
        <p>{averagePages}</p>
        <button onClick={handleAveragePages}>average pages</button>
        <p>{averageGrade}</p>
        <button onClick={handleAverageGrade}>average grade</button>
        <p>{authors.map((a) => (
      <div key={a}>
        {a}
      </div>
        ))}</p>
        <button onClick={handleAuthors}>Authors in the list</button>
     
      </div>

      <List
        items={readBooks}
        typeToRender={(book: Book) => (
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
                <button onClick={() => handleRemoveReadBook(book)}>
                  Remove book
                </button>
              </div>
            </div>

            {selectedBook && selectedBook.key === book.key && (
              <Form onSave={handleSaveAboutBookInfo} />
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Page;
