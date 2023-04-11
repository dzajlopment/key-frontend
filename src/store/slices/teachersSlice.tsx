import { createSlice } from "@reduxjs/toolkit";
import { TeacherModel } from "../../models/teacher";

export const teacherReducer = createSlice({
	name: "teachers",
	initialState: {
		teachers: [] as TeacherModel[],
	},
	reducers: {
		setTeachers: (state, action) => {
			state.teachers = action.payload;
		},
	}
});

export const { setTeachers } = teacherReducer.actions;

export default teacherReducer.reducer;