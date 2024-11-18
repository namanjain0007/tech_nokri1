import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   server: {
//     historyApiFallback: true, // ensures the app handles client-side routing
//   },
//   build: {
//     rollupOptions: {
//       input: "/index.html", // make sure your input is correct
//     },
//   },
// });
