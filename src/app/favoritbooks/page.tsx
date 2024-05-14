"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeFavoritBook } from "@/app/globalredux/feature/books/bookSlice";
import styles from "./favoritbooks.module.scss";
import BookDetails from "../components/Details/BookDetails";
import List from "../components/List/List";

const page = () => {
  const favoriteBooks = useSelector(
    (state: RootState) => state.book.favoritBooks
  );
  const dispatch = useDispatch();

  const handleRemoveFavoritBook = (book: Book) => {
    dispatch(removeFavoritBook(book));
  };

  return (
    <div className={styles.favorites}>
      <h1 className={styles.favbook}>Favorite books</h1>
      <List
        items={favoriteBooks}
        typeToRender={(book: Book) => (
          <div className={styles.detailscontainer}>
            <BookDetails
              key={book.key}
              book={book}
              showDescription={false}
              showpublisher={false}
              showGenre={false}
              onClick={() => handleRemoveFavoritBook(book)}
              className={styles.details}
            />
          </div>
        )}
        className={styles.list}
      />
    </div>
  );
};

export default page;
