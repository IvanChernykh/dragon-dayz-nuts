import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://ivanchernykh.github.io/dragon-dayz-nuts/",
  plugins: [react(), tailwindcss()],
});
