import { Author, Book } from "./types";

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
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${title}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();

    const mooreBookInfo =  await Promise.all(data.docs.map(async (book: Book) => {
      try {
        const response = await fetch(`https://openlibrary.org${book.key}.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const bookData = await response.json();
        return {
          ...book,
          description: JSON.stringify(bookData.description),
          subjects: JSON.stringify(bookData.subjects),
                };
      } catch (error) {
        console.error("Error fetching book data:", error);
        throw error;
        
      }
    }));
    const books = mooreBookInfo.filter((book: Book) => book !== null); 
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

export async function fetchAthurByName(name: string): Promise<Author[]> {
  try {
    const response = await fetch(
      `https://openlibrary.org/search/authors.json?q=${name}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();

    const authorsImg = data.docs.map((author: Author) => {
      return {
        ...author,
        imageUrl: `https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`,
      };
    });
    return authorsImg;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
}
