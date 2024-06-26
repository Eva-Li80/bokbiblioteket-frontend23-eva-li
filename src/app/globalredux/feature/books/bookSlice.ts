import { AboutBook, Book } from "@/app/lib/types";
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  books: Book[];
  favoritBooks: Book[];
  readBooks: Book[]
  selectedBook: Book | null
};

const initialState: BookState = {
  books: [],
  favoritBooks: [],
  readBooks: [],
  selectedBook: null
  
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    selectBook(state, action: PayloadAction<Book | null>){
      state.selectedBook = action.payload
    },
    clearSelectedBook(state) {
      state.selectedBook = null;
    },
  
    addToFavoritBooks(state, action: PayloadAction<Book>) {
      state.favoritBooks.push(action.payload);
    },
    removeFavoritBook(state, action: PayloadAction<Book>) {
      state.favoritBooks = state.favoritBooks.filter(
        (book) => book.key !== action.payload.key
      );
    },
    addToReadBooks(state, action: PayloadAction<Book>) {
      state.readBooks.push(action.payload);
    },
    removeReadBook(state, action: PayloadAction<Book>) {
      state.readBooks = state.readBooks.filter(
        (book) => book.key !== action.payload.key
      );
    },
    addInfoAboutBook: (state, action: PayloadAction<AboutBook>) => {
      state.readBooks = state.readBooks.map((info) => {
        if (info.key === action.payload.key) {
          return {
            ...info,
            about: {
              grade: action.payload.grade,
              review: action.payload.review,
              pages: action.payload.pages,
              key: action.payload.key
            }

          };
        } else {
          return info;
        }
      });
    },
    
  },
  
});

export const { setBooks, addToFavoritBooks, removeFavoritBook, addToReadBooks, removeReadBook, addInfoAboutBook, selectBook, clearSelectedBook} = bookSlice.actions;
export default bookSlice.reducer;
