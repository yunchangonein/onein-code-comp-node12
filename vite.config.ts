import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import config from "./src/settings/config.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let name = `${config.prefix}${config.namespace}${config.name}`;
  let fileName = mode === 'debug' ? `onein-code-comp-template.dev` : `onein-code-comp-template.${mode}`
  if (mode === "debug") {
    name = `${config.prefix}${config.namespace}${config.name}${config.debugSuffix}`;
  }
  let defaultExternal = ["vue", "element-plus", "@vueuse/core", "axios"];
  if (mode === "prod") {
    defaultExternal = [...defaultExternal, ...Object.keys(pkg.dependencies)];
  }
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        formats: ["iife", "es"],
        name: name || pkg.name,
        fileName: fileName
      },
      rollupOptions: {
        external: defaultExternal,
        output: {
          globals: {
            vue: "Vue",
            "element-plus": "elementPlus",
            "@vueuse/core": "core",
          },
          extend: true,
        },
      },
    },
  };
});
