"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeReadBook } from "@/app/globalredux/feature/slices/bookSlice";
import Link from "next/link";
import styles from "./readbooks.module.scss"
const page = () => {
  const readBooks = useSelector((state: RootState) => state.book.readBooks);
  const dispatch = useDispatch();

  const handleRemoveReadBook = (book: Book) => {
    dispatch(removeReadBook(book))
  }

  return (
    <div className={styles.favbooks}>
      <h1>Lästa Böcker</h1>
      {readBooks.map((book: Book, index: number) => (
        <div key={index} className={styles.listitem}>
          <Link href="/search/searchlistbooks">
          <h2>{book.title}</h2>
          </Link>
          <button onClick={() => handleRemoveReadBook(book)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default page;
