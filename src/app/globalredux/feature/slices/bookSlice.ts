import { Book } from "@/app/lib/types";
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

// const apiUrl = `https://openlibrary.org/search.json?author=tolkien&sort=new`;


// export const fetchBooks = createAsyncThunk<Book[], void, { rejectValue: Error }>(
//   "books/fetchBooks",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(apiUrl); 
//       if (!response.ok) {
//         throw new Error('Failed to fetch books');
//       }
//       const data = await response.json();
//       return data.docs;
//     } catch (err) {
//       return rejectWithValue(err as Error);
//     }
//   }
// );

type BookState = {
  books: Book[];
  selectedBook: Book | null;
  favoritBooks: Book[];
  status: "loading" | "succeeded" | "failed";
  readBooks: Book[]
};

const initialState: BookState = {
  books: [],
  selectedBook: null,
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
    selectBook(state, action: PayloadAction<Book | null>) {
      state.selectedBook = action.payload;
    },
    addToFavoritBooks(state, action: PayloadAction<Book>) {
      state.favoritBooks.push(action.payload);
    },
    removeFavoritBook(state, action: PayloadAction<Book>) {
      state.favoritBooks = state.favoritBooks.filter(
        (book) => book.id !== action.payload.id
      );
    },
    addToReadBooks(state, action: PayloadAction<Book>) {
      state.readBooks.push(action.payload);
    },
    removeReadBook(state, action: PayloadAction<Book>) {
      state.readBooks = state.readBooks.filter(
        (book) => book.id !== action.payload.id
      );
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

export const { setBooks, addToFavoritBooks, selectBook, removeFavoritBook, addToReadBooks, removeReadBook } = bookSlice.actions;
export default bookSlice.reducer;
