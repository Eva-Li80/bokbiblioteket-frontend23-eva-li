"use client"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Book } from "@/app/lib/types";
import { setBooks, selectBook, addToFavoritBooks } from "@/app/globalredux/feature/books/bookSlice";
import { fetchBooksByTitle } from "@/app/lib/getApi";


const FavoritBook = () => {
  const books = useSelector((state: RootState) => state.book.books);
  const selectedBook = useSelector((state: RootState) => state.book.selectedBook);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchBook = async () => {
    try {
      const filteredBooks = await fetchBooksByTitle(search);
      dispatch(setBooks(filteredBooks as Book[]));
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    searchBook();
  }, [dispatch]);

  const handleBookClick = (book: Book) => {
    dispatch(selectBook(book)); 
  };
  
  const handleAddBook = (book: Book) => {
    dispatch(addToFavoritBooks(book)); 
    setSearch("")
  };

  const handleSearchClick = () => {
    searchBook(); 
  };

  
  

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleSearchClick}>Search</button>
      {selectedBook ? (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>First sentence: {selectedBook.first_sentence}</p>
          <img
            src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={200}
            height={250}
          />
          <p>Author name: {selectedBook.author_name}</p>
          <p>Year: {selectedBook.first_publish_year}</p>
          <p>Publisher: {selectedBook.publisher}</p>
          <button onClick={() => handleAddBook(selectedBook)}>add book</button>
        </div>
      ) : (
        <div>
          {books.map((book: Book, index: number) => (
            <div key={index} onClick={() => handleBookClick(book)}>
              <h2>{book.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritBook;
