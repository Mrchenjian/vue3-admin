import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { fileURLToPath, URL } from "node:url";
import path from "path";

// 组件按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		UnoCSS(),
		AutoImport({
			// 解析 api
			resolvers: [ElementPlusResolver()],
			imports: ["vue", "vue-router","pinia"],
		}),
		Components({
			// 解析组件
			resolvers: [ElementPlusResolver()],
			//所有的组件自动加载
			dirs: ["src/components","src/layout/components"],
		}),
	],

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
