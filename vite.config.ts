import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep favicon files in their original structure
          if (assetInfo.name && assetInfo.name.includes("favicon")) {
            return "favicon/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
