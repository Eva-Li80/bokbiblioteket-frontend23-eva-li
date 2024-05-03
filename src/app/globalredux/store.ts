"use client";

import { configureStore } from "@reduxjs/toolkit";
import { bookSliceReducer } from "./feature/books/bookSlice";



export const store = configureStore({
  reducer: {
    book: bookSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


