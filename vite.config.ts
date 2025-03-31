import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
       plugins: [tailwindcss(), vue()],
       server: {
              host: "0.0.0.0",
              port: 8080
       },
       resolve: {
              alias: {
                     "@": path.resolve(__dirname, "./src")
              }
       }
});
