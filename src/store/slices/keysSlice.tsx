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
		},
		markKeyAsReturned: (state, action) => {
			const key = state.keys.find(key => key.name === action.payload);

			if (key)
				key.takenBy = null;
			else
				console.error(`Key ${action.payload} not found`);
		},
		borrowKey: (state, action) => {
			const key = state.keys.find(key => key.name === action.payload.name);

			if (key)
				key.takenBy = action.payload.teacherName;
			else
				console.error(`Key ${action.payload.keyName} not found`);
		}
	}
});

export const { setKeys, markKeyAsReturned, borrowKey } = keysSlice.actions;

export default keysSlice.reducer;