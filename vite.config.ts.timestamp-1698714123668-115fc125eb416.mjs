// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/rrrm9/Projects/counties/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.9/node_modules/vite/dist/node/index.js";
import { compression } from "file:///C:/Users/rrrm9/Projects/counties/node_modules/.pnpm/vite-plugin-compression2@0.11.0/node_modules/vite-plugin-compression2/dist/index.mjs";
import dts from "file:///C:/Users/rrrm9/Projects/counties/node_modules/.pnpm/vite-plugin-dts@3.6.3_@types+node@20.8.9_typescript@5.2.2_vite@4.5.0/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\rrrm9\\Projects\\counties";
var vite_config_default = defineConfig({
  build: {
    lib: {
      formats: ["cjs", "es"],
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@rrrm/countries",
      fileName: "index"
    },
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    minify: true
  },
  plugins: [dts({
    insertTypesEntry: true
  }), compression({ exclude: [/\.(br)$/, /\.(gz)$/] })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxycnJtOVxcXFxQcm9qZWN0c1xcXFxjb3VudGllc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccnJybTlcXFxcUHJvamVjdHNcXFxcY291bnRpZXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3Jycm05L1Byb2plY3RzL2NvdW50aWVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIGZvcm1hdHM6IFsnY2pzJywgJ2VzJ10sXHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnQHJycm0vY291bnRyaWVzJyxcclxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICB9LFxyXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICBtaW5pZnk6IHRydWVcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtkdHMoe1xyXG4gICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgfSksIGNvbXByZXNzaW9uKHtleGNsdWRlOiBbL1xcLihicikkLywgL1xcLihneikkL119KV0sXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFIsU0FBUyxlQUFlO0FBQ3BULFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsTUFDckIsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDWCxrQkFBa0I7QUFBQSxFQUNyQixDQUFDLEdBQUcsWUFBWSxFQUFDLFNBQVMsQ0FBQyxXQUFXLFNBQVMsRUFBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
