import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Message />
    <App />
  </React.StrictMode>
);
