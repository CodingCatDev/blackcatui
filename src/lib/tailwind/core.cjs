// The BlackCatUI Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// BlackCatUI Docs: https://www.BlackCatUI.dev/docs/get-started

const plugin = require('tailwindcss/plugin');

// BlackCatUI Theme Modules
const themeColors = require('./theme/colors.cjs');
// BlackCatUI Design Token Modules
const tokensBackgrounds = require('./tokens/backgrounds.cjs');
const tokensBorders = require('./tokens/borders.cjs');
const tokensBorderRadius = require('./tokens/border-radius.cjs');
const tokensFills = require('./tokens/fills.cjs');
const tokensText = require('./tokens/text.cjs');
const tokensRings = require('./tokens/rings.cjs');

module.exports = plugin(
	({ addUtilities }) => {
		addUtilities({
			// Implement BlackCatUI design token classes
			...tokensBackgrounds(),
			...tokensBorders(),
			...tokensBorderRadius(),
			...tokensFills(),
			...tokensText(),
			...tokensRings()
		});
	},
	{
		theme: {
			extend: {
				// Implement BlackCatUI theme colors
				colors: themeColors()
			}
		}
	}
);
