import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/products";

interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

interface initialState {
  cart: CartItem[];
  totalItems: number;
  totalAmount: number;
}

const fetchCartFromLocalStorage = (): CartItem[] => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

const saveCartToLocalStorage = (data: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState: initialState = {
  cart: fetchCartFromLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            const newQuantity = item.quantity + action.payload.quantity;
            const newTotalPrice = newQuantity * item.price;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newTotalPrice,
            };
          }
          return item;
        });
        state.cart = updatedCart;
        saveCartToLocalStorage(state.cart);
      } else {
        state.cart.push(action.payload);
        saveCartToLocalStorage(state.cart);
      }
    },
    removeFromCart(state, action) {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = updatedCart;
      saveCartToLocalStorage(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },
    // toggleCartQty(state, action) {
    //   const tempCart = state.cart.map((item) => {
    //     if (item.id === action.payload.id) {
    //       let tempQty = item.quantity;
    //       let tempTotalPrice = item.totalPrice;
    //       if (action.payload.type === "INC") {
    //         tempQty++;
    //         tempTotalPrice = tempQty * item.price;
    //       }
    //       if (action.payload.type === "DEC") {
    //         tempQty--;
    //         if (tempQty < 1) tempQty = 1;
    //         tempTotalPrice = tempQty * item.price;
    //       }
    //       return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
    //     }
    //     return item;
    //   });
    //   state.cart = tempCart;
    //   saveCartToLocalStorage(state.cart);
    // },
    getCartTotal(state) {
      state.totalAmount = state.cart.reduce((total, item) => {
        return (total += item.totalPrice);
      }, 0);
      state.totalItems = state.cart.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  getCartTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
