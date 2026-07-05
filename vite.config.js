import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honour a PORT env override (used by the preview tooling) so the dev server
    // binds to the exact assigned port; normal `npm run dev` keeps auto-selecting.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    strictPort: Boolean(process.env.PORT),
  },
  build: {
    target: "es2019",
    sourcemap: false,
  },
});
