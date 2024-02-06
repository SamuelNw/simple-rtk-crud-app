import { Grid, TextField, Button, Stack, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userReducer";

export default function Create() {
	const navigate = useNavigate();

	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const { register, handleSubmit } = form;

	const onSubmit = (data) => {
		dispatch(
			addUser({
				id: users[users.length - 1].id + 1,
				name: data.name,
				email: data.email,
			}),
		);
		navigate("/");
	};

	return (
		<Grid>
			<Typography variant="h6" sx={{ pb: 2 }}>
				Add a New User
			</Typography>

			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Stack spacing={2} width={360}>
					<TextField
						label="Name"
						type="text"
						{...register("name", {
							required: "Name is required",
						})}
					/>
					<TextField
						label="Email"
						type="email"
						{...register("email", {
							required: "Email is required",
						})}
					/>
					<Button
						type="submit"
						variant="contained"
						color="success"
					>
						Create User
					</Button>
				</Stack>
			</form>
		</Grid>
	);
}
