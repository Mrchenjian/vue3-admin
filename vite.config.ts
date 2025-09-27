import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from 'unocss/vite'
import { fileURLToPath, URL } from "node:url";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(),UnoCSS()],

	// 配置路径别名  方式一、
	// resolve: {
	// 	alias: {
	// 		'@': fileURLToPath(new URL('./src', import.meta.url))
	// 	}
	// }
	// 配置路径别名  方式二、
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src"),
			},
		],
	},
});
