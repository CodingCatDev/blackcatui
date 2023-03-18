import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@codingcatdev/blackcatui': path.resolve('./src/lib/index.ts'),
			$docs: path.resolve('./src/docs')
		}
	}
	// package: {
	// 	// strip test files from packaging
	// 	files: (filepath) => {
	// 		return filepath.indexOf('test') == -1 ? true : false;
	// 	}
	// }
};

export default config;
