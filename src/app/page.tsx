import styles from "./home.module.css"
import { fetchBooks } from "./lib/getApi";
import { Book } from "./lib/types";
import Card from "./ui/Card";

export default async function Home() {
  const books: Book[] = await fetchBooks();

  return (
    <main className={styles.biblioteket}>
      <h1>Förslag på böcker i bokarkivet</h1>
      <ul className={styles.biblioteket}>
        {books.map((book: Book, index: number) => (
          <li key={index}>
            <p>{book.title}</p>
            <Card title="test">
              <h3>{book.title}</h3>
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
