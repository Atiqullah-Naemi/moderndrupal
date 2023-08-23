import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    assetsDir: "assets",
    cssCodeSplit: false,
    sourcemap: false,
    ssr: false,
    rollupOptions: {
      treeshake: true,
      input: {
        app: "./src/main.tsx",
      },
      output: {
        entryFileNames: "assets/app.js",
      },
    },
  },
});
