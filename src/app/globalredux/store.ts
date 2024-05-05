"use client";
import { configureStore } from "@reduxjs/toolkit";

import { authorSliceReducer } from "./feature/slices/authorSlice";
import bookSlice from "./feature/slices/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice,
    authors: authorSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


