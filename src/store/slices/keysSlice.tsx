import { createSlice } from "@reduxjs/toolkit";
import { KeyModel } from "../../models/key";

export const keysSlice = createSlice({
	name: "keys",
	initialState: {
		keys: [] as KeyModel[],
	},
	reducers: {
		setKeys: (state, action) => {
			state.keys = action.payload;
		}
	}
});

export const { setKeys } = keysSlice.actions;

export default keysSlice.reducer;