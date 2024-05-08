"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authorSliceReducer } from "./feature/books/authorSlice";
import bookSlice from "./feature/books/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice,
    authors: authorSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


