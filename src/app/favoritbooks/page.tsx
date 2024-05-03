"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { removeFavoritBook } from "@/app/globalredux/feature/books/bookSlice";

const page = () => {
  const favoriteBooks = useSelector((state: RootState) => state.book.favoritBooks);
  const dispatch = useDispatch();

  const handleRemoveFavoritBook = (book: Book) => {
    dispatch(removeFavoritBook(book))
  }

  return (
    <div>
      <h1>Favorit Böcker</h1>
      {favoriteBooks.map((book: Book, index: number) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <button onClick={() => handleRemoveFavoritBook(book)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default page;
