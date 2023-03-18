/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require('@tailwindcss/typography');


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
		},
		
		  
	},
	plugins: [typography],
	darkMode: 'class'
}
