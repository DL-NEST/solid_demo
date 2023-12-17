import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command, mode }) => {
  console.log(`CMD = ${command} Mode = ${mode}`);
  const env = loadEnv(mode, process.cwd());
  console.log(`env:${env}`);
  return {
    base: "./",
    plugins: [solid()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
