import { configureStore } from "@reduxjs/toolkit";
import keysReducer from "./slices/keysSlice";
import teacherReducer from "./slices/teachersSlice";

const store = configureStore({
	reducer: {
		keys: keysReducer,
		teachers: teacherReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
