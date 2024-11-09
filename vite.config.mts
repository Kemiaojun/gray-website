import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";

// 为 Element Plus 按需引入样式。
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import * as path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  envDir: resolve("env"),
  server: {
    host: "0.0.0.0",
    port: 5174,
    hmr: true,
    proxy: {
      // 第一个代理后端地址
      "/website-api": {
        target: "https://61.111.251.180",
        // target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定图标存放的文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定 symbolId 格式
      symbolId: "icon-[name]",
    }),
    vueJsx(),
    visualizer({
      emitFile: false,
      filename: "stats.html", // 分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
    // ElementPlus 按需引入的插件
    AutoImport({
      imports: [
        "vue", // 自动导入 vue API，例如 ref、reactive
        "vue-router", // 自动导入 vue-router 的 API，例如 useRoute、useRouter
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/config.scss";',
      },
    },
  },
  build: {
    outDir: "dist",
    // 警告大小, 单位kb
    // chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
