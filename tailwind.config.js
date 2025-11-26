/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter Display"', 'system-ui', 'sans-serif'],
				body: ['Inter', '"Inter Placeholder"', 'system-ui', 'sans-serif'],
				serif: ['"Instrument Serif"', '"Instrument Serif Placeholder"', 'serif'],
				opensans: ['"AT Open Sans"', '"Open Sans"', 'Arial', 'sans-serif'],
			},

			colors: {},
		},
	},
	plugins: [],
}
