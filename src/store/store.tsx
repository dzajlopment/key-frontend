import { configureStore } from "@reduxjs/toolkit";
import keysReducer from "./slices/keysSlice";

const store = configureStore({
	reducer: {
		keys: keysReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
