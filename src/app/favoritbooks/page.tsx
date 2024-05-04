"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeFavoritBook } from "@/app/globalredux/feature/slices/bookSlice";
import styles from "./favoritbooks.module.scss"
import Link from "next/link";
const page = () => {
  const favoriteBooks = useSelector((state: RootState) => state.book.favoritBooks);
  const dispatch = useDispatch();

  const handleRemoveFavoritBook = (book: Book) => {
    dispatch(removeFavoritBook(book))
  }

  return (
    <div className={styles.favbooks}>
      <h1>Favorit Böcker</h1>
      {favoriteBooks.map((book: Book, index: number) => (
        <div key={index} className={styles.listitem}>
          <Link href="/search/searchlistbooks">
          <h2>{book.title}</h2>
          </Link>
          <button onClick={() => handleRemoveFavoritBook(book)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default page;
