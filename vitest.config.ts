import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        environment: "jsdom",
        pool: "threads",
        deps: {
          optimizer: {
            web: {
              enabled: true,
              include: ["solid-js", "@solidjs/router"],
            },
          },
        },
        exclude: [...configDefaults.exclude, "e2e/*"],
        root: fileURLToPath(new URL("./", import.meta.url)),
      },
    }),
  ),
);
