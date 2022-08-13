// React
import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./index.css";
// React Routers
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// React Redux
import { store } from "./store/store";
import { Provider } from "react-redux";
// Create a client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
