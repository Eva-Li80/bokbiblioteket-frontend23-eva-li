import { AboutBook, Book } from "@/app/lib/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<Book[], string>(
  "books/fetchBooksByTitle",
  async (title: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("Error fetching books:", error);
      return rejectWithValue(error as Error);
    }
  }
);


type BookState = {
  books: Book[];
  favoritBooks: Book[];
  status: "loading" | "succeeded" | "failed";
  readBooks: Book[]
};

const initialState: BookState = {
  books: [],
  favoritBooks: [],
  status: "loading",
  readBooks: []
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
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
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setBooks, addToFavoritBooks, removeFavoritBook, addToReadBooks, removeReadBook, addInfoAboutBook} = bookSlice.actions;
export default bookSlice.reducer;
