import PageBase from "@/components/PageBase";
import Carrinho from "@/pages/carrinho";
import CategoriaPage from "@/pages/home/CategoriaPage";
import Home from "@/pages/home";
import LayoutHomeBase from "@/pages/home/LayoutHomeBase";
import { createBrowserRouter } from "react-router-dom";
import Pagina404 from "@/pages/Pagina404";
import Promocoes from "@/pages/Promocoes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageBase />,
    children: [
      {
        path: "",
        element: <LayoutHomeBase />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "categoria/:categoria",
            element: <CategoriaPage />,
          },
          {
            path: "promocoes",
            element: <Promocoes />,
          }
        ],
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      },
      {
        path: "*",
        element: <Pagina404 />,
      },
    ],
  },
]);
