import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, CssBaseline } from "@mui/material";
import Create from "./components/Create";
import Update from "./components/Update";

const theme = createTheme({
	typography: {
		fontFamily: "Nunito",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid
				container
				component="main"
				sx={{
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					backgroundColor: "#f2f1f0",
					p: 4,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/create"
							element={<Create />}
						/>
						<Route
							path="/update/:id"
							element={<Update />}
						/>
					</Routes>
				</BrowserRouter>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
