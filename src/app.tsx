import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/contact";
import RootLayout from "./layout/RootLayout";
import FirstPage from "./pages/FirstPage/firstPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <FirstPage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
