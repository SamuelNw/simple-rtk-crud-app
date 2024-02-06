import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, CssBaseline } from "@mui/material";

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
					alignItems: "center",
					backgroundColor: "#f2f1f0",
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
					</Routes>
				</BrowserRouter>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
