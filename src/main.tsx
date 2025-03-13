import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import App from "./app";
import { LanguageProvider } from "./context/languageConext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
