"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Author } from "@/app/lib/types";
import styles from "./favoritauthors.module.scss";
import { removeFavoritAuhor } from "../globalredux/feature/books/authorSlice";
import List from "../components/List";
import AuthorDetails from "../components/AuthorDetails";

const page = () => {
  const favoriteAuthors = useSelector((state: RootState) => state.authors.favoritAuthors);
  const dispatch = useDispatch();

  const handleRemoveFavoritAthur = (author: Author) => {
    dispatch(removeFavoritAuhor(author));
  };

  return (
    <div className={styles.favbooks}>
      <h1>Favorit Författare</h1>
      <List
        items={favoriteAuthors}
        typeToRender={(author: Author) => (
          <div>
          <AuthorDetails key={author.key} author={author} />
          <button onClick={() => handleRemoveFavoritAthur(author)}>Remove</button>
          </div>
        )}
      />
    </div>
  );
};

export default page;
