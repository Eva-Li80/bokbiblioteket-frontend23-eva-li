import { Author, Book} from "./types";

const apiUrl = `https://openlibrary.org/search.json?q=*&limit=20`;

export async function fetchBooks(): Promise<Book[]> {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data: { docs: Book[] } = await response.json();
        return data.docs;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
  }

  export async function fetchBooksByTitle(title: string): Promise<Book[]> {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  }
  export async function fetchAthurByName(name: string): Promise<Author[]> {
    try {
        const response = await fetch(`https://openlibrary.org/search/authors.json?q=${name}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("Error fetching authors:", error);
      throw error;
    }
  }
