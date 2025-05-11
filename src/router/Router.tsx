import PageBase from "@/components/PageBase";
import Carrinho from "@/pages/carrinho";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Categoria from "@/pages/categoria";
import Promocoes from "@/pages/promocao";
import NossasLojas from "@/pages/nossasLojas";
import PageError404 from "@/pages/pageError404";
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
        path: "nossas-lojas",
        element: <NossasLojas />,
      },
      {
        path: "categoria/:categoria",
        element: <Categoria />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      },
      {
        path: "promocoes",
        element: <Promocoes />,
      },
      {
        path: "*",
        element: <PageError404 />,
      },
    ],
  },
]);
