import {
    CssBaseline,
    ThemeOptions,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
    </ThemeProvider>
);
