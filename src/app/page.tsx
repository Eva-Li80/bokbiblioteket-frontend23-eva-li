import styles from "./librarystart.module.scss";
import { fetchBooks } from "./lib/getApi";
import { Book } from "./lib/types";
import Card from "./components/Card/Card";

export default async function Home() {
  const books: Book[] = await fetchBooks();

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Top 10 from the archive...</h1>
      </div>
      <ul className={styles.library}>
        {books.map((book: Book, index: number) => (
          <li key={index} className={styles.books}>
            <Card>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt="Omslagsbild"
                width={200}
                height={250}
              />
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
