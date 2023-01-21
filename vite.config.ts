import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig(({ command }) => {
  const plugins = [react(), tsconfigPaths()];

  if (command === "serve") {
    return {
      // plugins: [...plugins, basicSsl()],
      plugins: [...plugins],
    };
  }

  return {
    plugins,
  };
});
