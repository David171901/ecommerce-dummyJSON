import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../interfaces/categories";

interface initialState {
  response: Category[];
  isLoading: boolean;
  error: boolean;
}

const initialState: initialState = {
  response: [],
  isLoading: false,
  error: false,
};

export const fetctCategories = createAsyncThunk(
  "categories/fetctCategories",
  async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_HOST}/products/categories`
    );
    const data = (await res.json()) as Category[];
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetctCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetctCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });
    builder.addCase(fetctCategories.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default categorySlice.reducer;
