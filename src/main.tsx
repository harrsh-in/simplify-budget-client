import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Fragment } from "react";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Fragment>
    <CssBaseline />

    <App />
  </Fragment>
);
