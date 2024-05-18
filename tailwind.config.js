/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {}
	},
	daisyui: {
		themes: [
			{
				theme: {
					...require("daisyui/src/theming/themes")["black"],
					"base-content": "#e7e5e4",
					"base-100": "#0e0e0e",
					"base-200": "#1a1a1a",
					"info": "#bae6fd",
					"success": "#a3e635", 
					"warning": "#fbbf24",
					"error": "#ef4444",
					"secondary-content": "#6b6b6b"
					// Custom colors here
				}
			}
		],
	},
	plugins: [require('daisyui')],
};