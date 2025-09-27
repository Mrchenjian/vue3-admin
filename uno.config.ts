import {
	defineConfig,
	presetAttributify,
	presetWind3,
	transformerDirectives,
} from "unocss";

export default defineConfig({
	presets: [
		presetAttributify({
			/* preset 选项 */
		}),
		presetWind3(),
		// ...自定义 presets
	],
  // apply 写法
	transformers: [transformerDirectives()],
});
