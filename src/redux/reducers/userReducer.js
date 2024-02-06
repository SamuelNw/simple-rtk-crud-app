import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../Data/users";

const userSlice = createSlice({
	name: "users",
	initialState: users,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
