// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// package.json
var package_default = {
  name: "onein-code-comp-node12",
  private: true,
  version: "0.0.0",
  type: "module",
  files: [
    "dist"
  ],
  main: "./dist/onein-code-comp-template.umd.cjs",
  module: "./dist/onein-code-comp-template.js",
  scripts: {
    dev: "vite",
    preview: "vite preview",
    "build:prod": "vite build --mode prod",
    "build:dev": "vite build --mode dev",
    "build:debug": "vite build --mode debug",
    "watch:debug": 'onchange -i "src/**/*.js" "src/**/*.ts" "src/**/*.vue" -- node src/scripts/debug.js',
    deploy: "node src/scripts/build-zip.js",
    "deploy:debug": "node src/scripts/build-zip.js debug",
    upload: "node src/scripts/upload.js"
  },
  dependencies: {
    "@vueuse/core": "^10.3.0",
    "element-plus": "^2.3.8",
    vue: "3.2.13"
  },
  devDependencies: {
    "@types/node": "^20.4.5",
    "@vitejs/plugin-vue": "^2.3.4",
    archiver: "^5.3.1",
    chalk: "^4.1.2",
    execa: "^5.1.0",
    onchange: "^7.1.0",
    ora: "^5.4.1",
    sass: "^1.64.2",
    typescript: "^4.5.4",
    vite: "^2.9.15",
    "vue-tsc": "^0.34.7"
  }
};

// src/settings/config.json
var config_default = {
  name: "todo",
  label: "\u4EE3\u529E\u7EC4\u4EF6",
  prefix: "Oc",
  namespace: "",
  debugSuffix: "debug",
  debugUrl: "https://admin.n.onein.cn/ns/",
  appId: "ddf19075-2df0-4d52-8a19-821ae002fe80",
  platform: "pc"
};

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  let name = `${config_default.prefix}${config_default.namespace}${config_default.name}`;
  let fileName = mode === "debug" ? `onein-code-comp-template.dev` : `onein-code-comp-template.${mode}`;
  if (mode === "debug") {
    name = `${config_default.prefix}${config_default.namespace}${config_default.name}${config_default.debugSuffix}`;
  }
  let defaultExternal = ["vue", "element-plus", "@vueuse/core", "axios"];
  if (mode === "prod") {
    defaultExternal = [...defaultExternal, ...Object.keys(package_default.dependencies)];
  }
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve("D:\\oneingit\\onein-code-comp-node12", "src/lib/index.ts"),
        formats: ["iife", "es"],
        name: name || package_default.name,
        fileName
      },
      rollupOptions: {
        external: defaultExternal,
        output: {
          globals: {
            vue: "Vue",
            "element-plus": "elementPlus",
            "@vueuse/core": "core"
          },
          extend: true
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vc3JjL3NldHRpbmdzL2NvbmZpZy5qc29uXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGxldCBuYW1lID0gYCR7Y29uZmlnLnByZWZpeH0ke2NvbmZpZy5uYW1lc3BhY2V9JHtjb25maWcubmFtZX1gO1xuICBsZXQgZmlsZU5hbWUgPSBtb2RlID09PSAnZGVidWcnID8gYG9uZWluLWNvZGUtY29tcC10ZW1wbGF0ZS5kZXZgIDogYG9uZWluLWNvZGUtY29tcC10ZW1wbGF0ZS4ke21vZGV9YFxuICBpZiAobW9kZSA9PT0gXCJkZWJ1Z1wiKSB7XG4gICAgbmFtZSA9IGAke2NvbmZpZy5wcmVmaXh9JHtjb25maWcubmFtZXNwYWNlfSR7Y29uZmlnLm5hbWV9JHtjb25maWcuZGVidWdTdWZmaXh9YDtcbiAgfVxuICBsZXQgZGVmYXVsdEV4dGVybmFsID0gW1widnVlXCIsIFwiZWxlbWVudC1wbHVzXCIsIFwiQHZ1ZXVzZS9jb3JlXCIsIFwiYXhpb3NcIl07XG4gIGlmIChtb2RlID09PSBcInByb2RcIikge1xuICAgIGRlZmF1bHRFeHRlcm5hbCA9IFsuLi5kZWZhdWx0RXh0ZXJuYWwsIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpXTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFt2dWUoKV0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcmVzb2x2ZShcIkQ6XFxcXG9uZWluZ2l0XFxcXG9uZWluLWNvZGUtY29tcC1ub2RlMTJcIiwgXCJzcmMvbGliL2luZGV4LnRzXCIpLFxuICAgICAgICBmb3JtYXRzOiBbXCJpaWZlXCIsIFwiZXNcIl0sXG4gICAgICAgIG5hbWU6IG5hbWUgfHwgcGtnLm5hbWUsXG4gICAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZVxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IGRlZmF1bHRFeHRlcm5hbCxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50LXBsdXNcIjogXCJlbGVtZW50UGx1c1wiLFxuICAgICAgICAgICAgXCJAdnVldXNlL2NvcmVcIjogXCJjb3JlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHRlbmQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsTUFBSSxPQUFPLEdBQUcsZUFBTyxTQUFTLGVBQU8sWUFBWSxlQUFPO0FBQ3hELE1BQUksV0FBVyxTQUFTLFVBQVUsaUNBQWlDLDRCQUE0QjtBQUMvRixNQUFJLFNBQVMsU0FBUztBQUNwQixXQUFPLEdBQUcsZUFBTyxTQUFTLGVBQU8sWUFBWSxlQUFPLE9BQU8sZUFBTztBQUFBLEVBQ3BFO0FBQ0EsTUFBSSxrQkFBa0IsQ0FBQyxPQUFPLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRSxNQUFJLFNBQVMsUUFBUTtBQUNuQixzQkFBa0IsQ0FBQyxHQUFHLGlCQUFpQixHQUFHLE9BQU8sS0FBSyxnQkFBSSxZQUFZLENBQUM7QUFBQSxFQUN6RTtBQUNBLFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxJQUNmLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxRQUNILE9BQU8sUUFBUSx3Q0FBd0Msa0JBQWtCO0FBQUEsUUFDekUsU0FBUyxDQUFDLFFBQVEsSUFBSTtBQUFBLFFBQ3RCLE1BQU0sUUFBUSxnQkFBSTtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFVBQ04sU0FBUztBQUFBLFlBQ1AsS0FBSztBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsVUFDbEI7QUFBQSxVQUNBLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
