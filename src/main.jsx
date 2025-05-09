import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App.jsx";
import LpRoutes from "./routes/LpRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <Router>{LpRoutes()}</Router>
);
