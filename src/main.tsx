import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import Header from "./components/header/header.tsx";
import Start from "./pages/start/start.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header></Header>
    <Start></Start>
  </StrictMode>
);
