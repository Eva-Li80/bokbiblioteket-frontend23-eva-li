
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
    clearSelectedAuthor(state) {
      state.selectedAuthor = null;
    },
    addToFavoritAuthor(state, action: PayloadAction<Author>) {
      state.favoritAuthors.push(action.payload);
    },
    removeFavoritAuhor(state, action: PayloadAction<Author>) {
      state.favoritAuthors = state.favoritAuthors.filter(
        (author) =>  author.key !== action.payload.key
      );
    }
    
    
  },
});

export const { setAuthors, addToFavoritAuthor, selectAuthor, removeFavoritAuhor ,clearSelectedAuthor} = authorSlice.actions;
export const authorSliceReducer = authorSlice.reducer;

