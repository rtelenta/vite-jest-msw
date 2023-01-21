import { getEnvs } from "getEnvs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (getEnvs().DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
