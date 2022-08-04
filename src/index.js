// React
import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./index.css";
// React Routers
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
