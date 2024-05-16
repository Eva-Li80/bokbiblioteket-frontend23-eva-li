"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authorSliceReducer } from "./feature/authors/authorSlice";
import bookSliceReducer from "./feature/books/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSliceReducer,
    authors: authorSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


