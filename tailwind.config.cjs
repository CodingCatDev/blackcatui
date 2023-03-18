const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/forms'),
		...require('./src/lib/tailwind/blackcatui.cjs')({ intellisense: false })
	],
	theme: {
		extend: {}
	}
};
