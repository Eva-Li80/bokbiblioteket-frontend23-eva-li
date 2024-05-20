"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Author } from "@/app/lib/types";
import styles from "./favoritauthors.module.scss";
import { removeFavoritAuhor } from "../globalredux/feature/authors/authorSlice";
import List from "../components/List/List";
import AuthorDetails from "../components/Details/AuthorDetails";

const Page = () => {
  const favoriteAuthors = useSelector((state: RootState) => state.authors.favoritAuthors);
  const dispatch = useDispatch();

  const handleRemoveFavoritAthur = (author: Author) => {
    dispatch(removeFavoritAuhor(author));
  };

  return (
    <div className={styles.favorites}>
      <h1 className={styles.favauthor}>Favorite Authors</h1>
      <List
        items={favoriteAuthors}
        typeToRender={(author: Author) => (
          <div className={styles.detailscontainer}>
            <AuthorDetails key={author.key} author={author} className={styles.details} onClick={handleRemoveFavoritAthur} />
          </div>
        )} className={styles.list}      />
    </div>
  );
};
export default Page;