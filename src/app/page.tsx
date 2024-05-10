import styles from "./biblioteket.module.scss";
import { fetchBooks } from "./lib/getApi";
import { Book } from "./lib/types";
import Card from "./components/Card";

export default async function Home() {
  const books: Book[] = await fetchBooks();

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Book proposal from the archive...</h1>
      </div>
      <ul className={styles.biblioteket}>
        {books.map((book: Book, index: number) => (
          <li key={index} className={styles.books}>
            <Card title={book.title}>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt="Omslagsbild"
                width={180}
                height={230}
              />
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
