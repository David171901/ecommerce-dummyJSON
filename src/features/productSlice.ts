import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../interfaces/products";

interface initialState {
  responseProducts: Products;
  isLoadingProducts: boolean;
  errorProducts: boolean;
  responseProductsByCategory: Products;
  isLoadingProductsByCategory: boolean;
  errorProductsByCategory: boolean;
}

const initialState: initialState = {
  responseProducts: {
    products: [],
    total: 0,
    skip: 0,
    limit: 10,
  },
  isLoadingProducts: false,
  errorProducts: false,
  responseProductsByCategory: {
    products: [],
    total: 0,
    skip: 0,
    limit: 10,
  },
  isLoadingProductsByCategory: false,
  errorProductsByCategory: false,
};

export const fetctProducts = createAsyncThunk(
  "products/fetctProducts",
  async () => {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/products`);
    const data = (await res.json()) as Products;
    return data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetctProductsByCategory",
  async (category: string) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_HOST}/products/category/${category}`
    );
    const data = (await res.json()) as Products;
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetctProducts.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(fetctProducts.fulfilled, (state, action) => {
      state.isLoadingProducts = false;
      state.responseProducts = action.payload;
    });
    builder.addCase(fetctProducts.rejected, (state) => {
      state.isLoadingProducts = false;
      state.errorProducts = true;
    });
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.isLoadingProductsByCategory = true;
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      console.log("🚀 ~ file: productSlice.ts:72 ~ builder.addCase ~ action:", action)
      state.isLoadingProductsByCategory = false;
      state.responseProductsByCategory = action.payload;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.isLoadingProductsByCategory = false;
      state.errorProductsByCategory = true;
    });
  },
});

export default productSlice.reducer;
