import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import { LanguageProvider } from "./context/languageConext";

import App from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
