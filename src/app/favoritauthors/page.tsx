"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Author} from "@/app/lib/types";
import { removeFavoritAuhor } from "@/app/globalredux/feature/books/bookSlice";
import styles from "./favoritauthors.module.scss"

const page = () => {
  const favoriteBooks = useSelector((state: RootState) => state.book.favoritAuthors);
  const dispatch = useDispatch();
  const handleRemoveFavoritAthur = (author: Author) => {
    dispatch(removeFavoritAuhor(author))
  }

  return (
    <div className={styles.favbooks}>
      <h1>Favorit Författare</h1>
      {favoriteBooks.map((author:Author, index: number) => (
        <div key={index} className={styles.listitem}>
          <h2>{author.name}</h2>
          <button onClick={() => handleRemoveFavoritAthur(author)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default page;