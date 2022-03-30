import adapter from '@sveltejs/adapter-static';

const path = process.env.NODE_ENV === 'development' ? '' : '/nomcom-2022';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
	paths: {
		base: path,
		assets: path
	}
};

export default config;
