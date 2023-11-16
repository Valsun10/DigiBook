import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookService from "./BookService";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  isCompleted: false,
  errorMessage: "",
  searchInputValue: "",
};

export const getAllBooks = createAsyncThunk(
  "book/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await bookService.getAllBooks(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSearch = createAsyncThunk(
  "book/Search",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const searchInputValue = thunkAPI.getState().books.searchInputValue;
      return await bookService.fetchSearch(searchInputValue, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setSearchInputValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCompleted = true;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isCompleted = true;
      })
      .addCase(fetchSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCompleted = true;
        state.books = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isCompleted = true;
      });
  },
});

export const { reset, setSearchInputValue } = bookSlice.actions;
export default bookSlice.reducer;
