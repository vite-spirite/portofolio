/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Yantramanav', 'sans-serif'],
				body: ['Source Sans 3', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
