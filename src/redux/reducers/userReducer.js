import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../Data/users";

const userSlice = createSlice({
	name: "users",
	initialState: users,
	reducers: {
		userReducer: {
			addUsers: (state, action) => {
				state.push(action.payload);
			},
		},
	},
});

export default userSlice.reducers;
