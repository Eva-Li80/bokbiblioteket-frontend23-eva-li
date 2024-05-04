"use client";
import { Author, Book } from "@/app/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  books: Book[];
  selectedBook: Book | null
  selectedAuthor: Author | null
  favoritBooks: Book[]
  authors: Author[]
  favoritAuthors: Author[]
};

const initialState: BookState = {
  books: [] ,
  selectedBook: null,
  selectedAuthor: null,
  favoritBooks: [],
  authors: [],
  favoritAuthors: []
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    setAuthors(state, action: PayloadAction<Author[]>) {
      state.authors = action.payload;
    },
    selectBook(state, action: PayloadAction<Book>){
      state.selectedBook = action.payload
    },
    selectAuthor(state, action: PayloadAction<Author>){
      state.selectedAuthor = action.payload
    },
    addToFavoritBooks(state, action: PayloadAction<Book>) {
      state.favoritBooks.push(action.payload);
    },
    addToFavoritAuthor(state, action: PayloadAction<Author>) {
      state.favoritAuthors.push(action.payload);
    },
    removeFavoritBook(state, action: PayloadAction<Book>){
     const removeBook = action.payload;
     state.favoritBooks = state.favoritBooks.filter((book) => book.id !== removeBook.id)
    },
    removeFavoritAuhor(state, action: PayloadAction<Author>){
      const removeAuthor = action.payload;
      state.favoritAuthors = state.favoritAuthors.filter((author) => author.id !== removeAuthor.id)
     }
  },
});

export const { setBooks, addToFavoritBooks, selectBook, removeFavoritBook, setAuthors, addToFavoritAuthor, selectAuthor, removeFavoritAuhor } = bookSlice.actions;
export const bookSliceReducer = bookSlice.reducer;
