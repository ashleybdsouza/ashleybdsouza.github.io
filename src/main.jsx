import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/theme.css";
import { Buffer } from "buffer";
import { HashRouter } from "react-router-dom";
window.Buffer = Buffer;

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

if (redirect) {
  window.history.replaceState(null, null, redirect);
}
