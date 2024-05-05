"use client";
import { Author } from "@/app/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthorState = {
  selectedAuthor: Author | null
  authors: Author[]
  favoritAuthors: Author[]
};

const initialState: AuthorState = {
  selectedAuthor: null,
  authors: [],
  favoritAuthors: []
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    setAuthors(state, action: PayloadAction<Author[]>) {
      state.authors = action.payload;
    },
    selectAuthor(state, action: PayloadAction<Author | null>){
      state.selectedAuthor = action.payload
    },
    addToFavoritAuthor(state, action: PayloadAction<Author>) {
      state.favoritAuthors.push(action.payload);
    },
    removeFavoritAuhor(state, action: PayloadAction<Author>){
      const removeAuthor = action.payload;
      state.favoritAuthors = state.favoritAuthors.filter((author) => author.id !== removeAuthor.id)
     }
  },
});

export const { setAuthors, addToFavoritAuthor, selectAuthor, removeFavoritAuhor } = authorSlice.actions;
export const authorSliceReducer = authorSlice.reducer;


