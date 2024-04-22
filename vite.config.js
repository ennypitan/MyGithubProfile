// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env files
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_APP_GITHUB_API_KEY": JSON.stringify(
      process.env.VITE_APP_GITHUB_API_KEY
    ),
  },
});
