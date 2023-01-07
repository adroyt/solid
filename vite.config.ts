import type { UserConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import unocss from "unocss/vite";

const config: UserConfig = {
  plugins: [unocss(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },

  resolve: {
    alias: {
      "~": "/src",
    },
  },
};

export default config;
