import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import { LanguageProvider } from "./context/languageConext";
import { RouterProvider } from "react-router-dom";
import router from "./router/router"; // Import the router instance

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} /> {/* Pass the router here */}
    </LanguageProvider>
  </StrictMode>
);
