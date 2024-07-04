/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],)],
// });

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.js",
  },
});

// import { defineConfig } from "vitest";
// // import react from "@vitejs/plugin-react-swc";
// import react from "@vitejs/plugin-react";
// console.log("Loaded vitest config");
// export default defineConfig({
// base: "./",
// plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
// plugins: [react()],
// test: {
//   globals: true,
//   environment: "jsdom",
//   setupFiles: "./tests/setupTests.js",
// },
// });
