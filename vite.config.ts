import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/herofolio/" : "/",
    build: { outDir: "build" },
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
        manifest: {
          name: 'Herofolio',
          short_name: 'Herofolio',
          start_url: '/herofolio/',
          scope: '/herofolio/',
          display: 'standalone',
          theme_color: '#000000',
          background_color: '#ffffff',
          icons: [
            {
              src: 'logo192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'logo512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    server: { port: 3000 },
  };
});
