import {
    CssBaseline,
    ThemeOptions,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const theme: ThemeOptions = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
    },
    palette: {
        primary: {
            main: "#3f72af",
        },
        secondary: {
            main: "#dbe2ef",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <App />
        </ThemeProvider>
    </BrowserRouter>
);
