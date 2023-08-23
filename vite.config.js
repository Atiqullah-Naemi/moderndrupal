import { defineConfig } from "vite";

export default defineConfig({
  root: "",
  build: {
    outDir: "assets",
    assetsDir: "",
    rollupOptions: {
      input: {
        index: "src/app.js",
      },
      output: {
        assetFileNames: "app.css",
        entryFileNames: "app.js",
      },
    },
  },
});
