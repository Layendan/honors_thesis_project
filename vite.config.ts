import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, Plugin } from 'vite';

const viteServerConfig: Plugin = {
	name: 'add headers',
	configureServer: (server) => {
		server.middlewares.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET');
			res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
			res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
			next();
		});
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), viteServerConfig],
};

export default config;
