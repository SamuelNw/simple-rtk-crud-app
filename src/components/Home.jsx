import {
	Grid,
	Box,
	Paper,
	Typography,
	Button,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/reducers/userReducer";

export default function Home() {
	const users = useSelector((state) => state.users);

	const dispatch = useDispatch();

	function handleClick(id) {
		dispatch(
			deleteUser({
				id: id,
			}),
		);
	}

	return (
		<Grid>
			<Box sx={{ pb: 2 }}>
				<Typography variant="h4" sx={{ pb: 2 }}>
					User Management with React and Redux
				</Typography>
				<Link to="/create">
					<Button
						variant="contained"
						color="success"
					>
						Create User
					</Button>
				</Link>
			</Box>

			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="right">
								ID
							</TableCell>
							<TableCell align="right">
								NAME
							</TableCell>
							<TableCell align="right">
								EMAIL
							</TableCell>
							<TableCell align="right">
								ACTIONS
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{users.map((user, index) => (
							<TableRow key={index}>
								<TableCell align="right">
									{
										user.id
									}
								</TableCell>
								<TableCell align="left">
									{
										user.name
									}
								</TableCell>
								<TableCell align="right">
									{
										user.email
									}
								</TableCell>
								<TableCell align="right">
									<Link
										to={`/update/${user.id}`}
									>
										<Button
											variant="contained"
											color="secondary"
											size="small"
											sx={{
												mx: 2,
											}}
										>
											Edit
										</Button>
									</Link>
									<Button
										variant="contained"
										color="error"
										size="small"
										onClick={() =>
											handleClick(
												user.id,
											)
										}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}
