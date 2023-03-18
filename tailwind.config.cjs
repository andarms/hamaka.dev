/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"primary": "#ff3b30",
				"primary-400": "#ff4f46",
				"primary-100": "#ffa09f",
				"primary-600": "#e53429",
				"primary-900": "#7f1a0f",
				secondary: 'var(--color-secondary)',
			},
		},


	},
	plugins: [typography, forms],
	darkMode: 'class'
}
