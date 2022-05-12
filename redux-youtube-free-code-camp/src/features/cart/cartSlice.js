import { createSlice } from "@reduxjs/toolkit";
import db from "../../db";

const initialState = {
	cartItems: [...db],
	amount: 4,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			console.log(action);
		},
	},
});

// console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
