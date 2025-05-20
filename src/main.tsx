import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { thema } from "./styles/thema";
import store from "@/store";
import { Provider } from "react-redux";
import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={thema}>
        <RouterProvider router={router} />
        <ToastContainer position="top-center"/>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
