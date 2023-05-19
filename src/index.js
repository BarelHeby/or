import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "react-bootstrap";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
