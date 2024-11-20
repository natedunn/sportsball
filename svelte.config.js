import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: vercel({
			runtime: 'edge',
			images: {
				domains: ['a.espncdn.com']
			}
		}),
		alias: {
			$config: './src/config/*',
			$components: './src/lib/components/*',
			$routes: './src/routes/*',
			$api: './src/routes/api/*',
			$schema: './src/lib/schema/*',
			$server: './src/lib/server/*',
			$utils: './src/lib/utils/*'
		}
	}
};

export default config;
