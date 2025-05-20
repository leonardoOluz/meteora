import { Suspense, lazy } from "react";
import PageBase from "@/components/PageBase";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const NossasLojas = lazy(() => import("@/pages/nossasLojas"));
const Categoria = lazy(() => import("@/pages/categoria"));
const Carrinho = lazy(() => import("@/pages/carrinho"));
const Promocoes = lazy(() => import("@/pages/promocao"));
const PageError404 = lazy(() => import("@/pages/pageError404"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageBase />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "nossas-lojas",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <NossasLojas />
          </Suspense>
        ),
      },
      {
        path: "categoria/:categoria",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Categoria />
          </Suspense>
        ),
      },
      {
        path: "carrinho",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Carrinho />
          </Suspense>
        ),
      },
      {
        path: "promocoes",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Promocoes />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <PageError404 />
          </Suspense>
        ),
      },
    ],
  },
]);
