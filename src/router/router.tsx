import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout"; // Import RootLayout
import App from "../app";
import Contact from "../pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
