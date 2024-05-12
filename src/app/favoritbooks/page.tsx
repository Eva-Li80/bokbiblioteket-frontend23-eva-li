"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeFavoritBook } from "@/app/globalredux/feature/books/bookSlice";
import styles from "./favoritbooks.module.scss";
import BookDetails from "../components/BookDetails";
import List from "../components/List";

const page = () => {
  const favoriteBooks = useSelector(
    (state: RootState) => state.book.favoritBooks
  );
  const dispatch = useDispatch();

  const handleRemoveFavoritBook = (book: Book) => {
    dispatch(removeFavoritBook(book));
  };

  return (
    <div className={styles.favbooks}>
      <h1>Favorit Böcker</h1>
      <List
        items={favoriteBooks}
        typeToRender={(book: Book) => (
          <div>
          <BookDetails key={book.key} book={book} />
          <button onClick={() => handleRemoveFavoritBook(book)}>Remove</button>
          </div>
        )}
      />
    </div>
  );
};

export default page;
