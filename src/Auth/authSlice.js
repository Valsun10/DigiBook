import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

let token;

try {
  token = JSON.parse(localStorage.getItem("token"));
} catch (err) {
  console.log("Unauthorized");
}

const initialState = {
  token: token ? token : null,
  isLoading: false,
  errorMessage: "",
  isCompleted: false,
  isError: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      return await authService.register(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.isCompleted = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.errorMessage = null;
        state.isCompleted = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isCompleted = false;
        state.isError = true;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isCompleted = true;
        state.errorMessage = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isCompleted = true;
        state.errorMessage = action.payload;
        state.isError = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.isLoading = false;
        state.isCompleted = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
