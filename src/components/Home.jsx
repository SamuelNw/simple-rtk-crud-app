import { Grid, Box, Typography, Button } from "@mui/material";

export default function Home() {
	return (
		<Grid>
			<Box>
				<Typography variant="h4">
					User Management with React and Redux
				</Typography>
				<Button variant="contained">Create User</Button>
			</Box>
		</Grid>
	);
}
