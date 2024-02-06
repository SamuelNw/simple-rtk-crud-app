import { Grid, TextField, Button, Stack, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/userReducer";
import { useParams } from "react-router";

export default function Update() {
	const navigate = useNavigate();

	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const { id } = useParams();

	const existingUser = users.filter((entry) => entry.id == id);
	const { name, email } = existingUser[0];

	const form = useForm({
		defaultValues: {
			name: name,
			email: email,
		},
	});

	const { register, handleSubmit } = form;

	const onSubmit = (data) => {
		dispatch(
			updateUser({
				id: id,
				name: data.name,
				email: data.email,
			}),
		);
		navigate("/");
	};

	return (
		<Grid>
			<Typography variant="h6" sx={{ pb: 2 }}>
				Update User Details
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
						color="primary"
					>
						Update
					</Button>
				</Stack>
			</form>
		</Grid>
	);
}
