import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { thema } from "./styles/thema";
import Home from "./pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={thema}>
      <Home />
    </ThemeProvider>
  </StrictMode>
);
