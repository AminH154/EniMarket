import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreProviderContext from "./context/StoreProviderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProviderContext>
      <App />
    </StoreProviderContext>
  </BrowserRouter>
);
reportWebVitals();
