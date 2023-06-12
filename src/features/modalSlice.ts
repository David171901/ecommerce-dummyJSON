import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/products";

interface initialState {
  product: Product;
  isModalVisible: boolean;
}

const initialState: initialState = {
  product: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
  isModalVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData(state, action) {
      state.product = action.payload;
    },
    setIsModalVisible(state, action) {
      state.isModalVisible = action.payload;
    },
  },
});

export const { setModalData, setIsModalVisible } = modalSlice.actions;
export default modalSlice.reducer;
