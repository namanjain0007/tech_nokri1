// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StateByContext from "./Context/StateByContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <StateByContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateByContext>
  // </StrictMode>
);
