import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import ThemeProvider from "./utils/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
