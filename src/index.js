import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MyBooleanProvider } from "./context";
import "./index.css";
import "./media.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyBooleanProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyBooleanProvider>
  </React.StrictMode>
);
