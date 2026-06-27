import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    preview: {
      allowedHosts: [
        "om-s-portfolio-main.onrender.com",
      ],
    },
  },
});