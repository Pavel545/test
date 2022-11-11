import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/main";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
