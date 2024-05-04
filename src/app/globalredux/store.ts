"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookSliceReducer } from "./feature/slices/bookSlice";
import { authorSliceReducer } from "./feature/slices/authorSlice";

export const store = configureStore({
  reducer: {
    book: bookSliceReducer,
    authors: authorSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


