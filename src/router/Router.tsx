import { Suspense, lazy } from "react";
import PageBase from "@/components/PageBase";
import { createBrowserRouter } from "react-router-dom";
import LazyLoader from "@/components/LazyLoader";

const Home = lazy(() => import("@/pages/home"));
const NossasLojas = lazy(() => import("@/pages/nossasLojas"));
const Categoria = lazy(() => import("@/pages/categoria"));
const Carrinho = lazy(() => import("@/pages/carrinho"));
const Promocoes = lazy(() => import("@/pages/promocao"));
const Novidades = lazy(() => import("@/pages/novidades"));
const PageError404 = lazy(() => import("@/pages/pageError404"));
const Login = lazy(() => import("@/pages/login"));
const Busca = lazy(() => import("@/pages/buscas"));
const Cadastro = lazy(() => import("@/pages/cadastro"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageBase />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "nossas-lojas",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <NossasLojas />
          </Suspense>
        ),
      },
      {
        path: "categoria/:categoria",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Categoria />
          </Suspense>
        ),
      },
      {
        path: "carrinho",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Carrinho />
          </Suspense>
        ),
      },
      {
        path: "promocoes",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Promocoes />
          </Suspense>
        ),
      },
      {
        path: "novidades",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Novidades />
          </Suspense>
        ),
      },
      {
        path: "seach-products",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Busca />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "cadastro",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Cadastro />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <PageError404 />
          </Suspense>
        ),
      },
    ],
  },
]);
