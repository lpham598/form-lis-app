import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Get the root element from the DOM
const container = document.getElementById("root");
const root = createRoot(container!); // '!' non-null assertion operator if you are sure 'root' is not null

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
