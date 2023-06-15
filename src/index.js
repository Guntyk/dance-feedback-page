import ReactDOM from "react-dom/client";
import PeopleProvider from "./context";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PeopleProvider>
    <App />
  </PeopleProvider>
);
