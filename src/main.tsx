import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
