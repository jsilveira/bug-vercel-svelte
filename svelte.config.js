import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
				}
			}
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	preprocess: [preprocess({
	})]
};

export default config;
