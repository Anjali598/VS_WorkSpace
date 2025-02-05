import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Todo from "./Todo";
//import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Todo />
  </React.StrictMode>
);

// root.render(
//   <HashRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/todo" element={<Todo />} />
//     </Routes>
//   </HashRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
