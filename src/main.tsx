import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import { LanguageProvider } from "./context/languageConext";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
