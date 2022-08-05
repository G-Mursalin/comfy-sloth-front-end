// React
import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./index.css";
// React Routers
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";
// React Redux
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
