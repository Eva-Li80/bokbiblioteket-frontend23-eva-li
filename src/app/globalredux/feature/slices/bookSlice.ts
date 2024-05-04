"use client";
import { Author, Book } from "@/app/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  books: Book[];
  selectedBook: Book | null
  favoritBooks: Book[]
};

const initialState: BookState = {
  books: [] ,
  selectedBook: null,
  favoritBooks: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    selectBook(state, action: PayloadAction<Book>){
      state.selectedBook = action.payload
    },
    addToFavoritBooks(state, action: PayloadAction<Book>) {
      state.favoritBooks.push(action.payload);
    },
    removeFavoritBook(state, action: PayloadAction<Book>){
     const removeBook = action.payload;
     state.favoritBooks = state.favoritBooks.filter((book) => book.id !== removeBook.id)
    },
  },
});

export const { setBooks, addToFavoritBooks, selectBook, removeFavoritBook} = bookSlice.actions;
export const bookSliceReducer = bookSlice.reducer;
