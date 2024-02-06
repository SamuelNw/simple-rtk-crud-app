import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../Data/users";

const userSlice = createSlice({
	name: "users",
	initialState: users,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
		},
		updateUser: (state, action) => {
			const { id, name, email } = action.payload;
			const userToUpdate = state.find(
				(user) => user.id == id,
			);
			if (userToUpdate) {
				userToUpdate.name = name;
				userToUpdate.email = email;
			}
		},
		deleteUser: (state, action) => {
			const { id } = action.payload;
			return state.filter((user) => user.id != id);
		},
	},
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
