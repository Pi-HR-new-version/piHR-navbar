// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteNavbar",
      filename: "remoteEntry.js",
      remotes: {
        auth: "http://localhost:5010/assets/remoteEntry.js",
      },
      exposes: {
        "./RemoteNavbar": "./src/components/navigation/navbar",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],

  // build: {
  //   modulePreload: false,
  //   target: "esnext",
  //   minify: false,
  //   cssCodeSplit: false,
  // },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});
