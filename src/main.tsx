import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { thema } from "./styles/thema";
import Home from "./pages/Home";
import store from "@/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={thema}>
        <Home />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
