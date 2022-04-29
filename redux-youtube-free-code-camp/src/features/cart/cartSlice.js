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
});

export default cartSlice.reducer;
