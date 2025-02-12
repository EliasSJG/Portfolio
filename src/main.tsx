import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
