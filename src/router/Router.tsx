import PageBase from "@/components/PageBase";
import CategoriaPage from "@/pages/categoriaPage";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageBase />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categoria/:categoria",
        element: <CategoriaPage />,
      },
    ],
  },
]);
