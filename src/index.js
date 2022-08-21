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
// AUth0
import { Auth0Provider } from "@auth0/auth0-react";

// React Redux
import { store } from "./store/store";
import { Provider } from "react-redux";
// Create a client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-golam-mursalin-360.us.auth0.com
// 8ds6wX7jjKFwugpb8SZXg32qTDvf9P0d
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-golam-mursalin-360.us.auth0.com"
      clientId="8ds6wX7jjKFwugpb8SZXg32qTDvf9P0d"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
