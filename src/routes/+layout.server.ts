import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const modules = import.meta.glob('../lib/components/**/*.svelte');

	const navLinks: { group: string; path: string; items?: { item: string; path: string }[] }[] = [
		{
			group: 'Docs',
			path: 'docs',
			items: [
				{ item: 'Introduction', path: 'intro' },
				{ item: 'Get Started', path: 'get-started' },
				{ item: 'Quickstart', path: 'quickstart' },
				{ item: 'Themes', path: 'themes' },
				{ item: 'Colors', path: 'colors' },
				{ item: 'Styling', path: 'styling' },
				{ item: 'Design Tokens', path: 'design-tokens' },
				{ item: 'Variants', path: 'variants' },
				{ item: 'Theme Generator', path: 'theme-generator' },
				{ item: 'Contributing', path: 'contributing' }
			]
		},
		{
			group: 'Tailwind CSS',
			path: 'tailwindcss',
			items: [
				{ item: 'Core', path: 'core' },
				{ item: 'Typography', path: 'get-started' },
				{ item: 'Forms', path: 'forms' },
				{ item: 'Alerts', path: 'alerts' },
				{ item: 'Badges', path: 'badges' },
				{ item: 'Breadcrumbs', path: 'breadcrumbs' },
				{ item: 'Buttons', path: 'buttons' },
				{ item: 'Cards', path: 'cards' },
				{ item: 'Chips', path: 'chips' },
				{ item: 'Lists', path: 'lists' },
				{ item: 'Placeholders', path: 'placeholders' },
				{ item: 'Tables', path: 'tables' },
				{ item: 'Gradient Headings', path: 'gradient-headings' },
			]
		}
	];
	for (const path in modules) {
		const splitPath = path.split('/');
		const groupPath =
			splitPath
				.at(-3)
				?.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
				.toLowerCase() || '';
		const group =
			splitPath
				.at(-3)
				?.replace(/([A-Z])/g, ' $1')
				.slice(1) || '';
		const itemPath =
			splitPath
				.at(-1)
				?.replace('.svelte', '')
				?.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()) || '';
		const item = splitPath
			.at(-1)
			?.replace('.svelte', '')
			?.replace(/([A-Z])/g, ' $1')
			.slice(1);
		const groupIndex = navLinks.findIndex((n) => n.group === group);
		if (item) {
			if (groupIndex > 0) {
				navLinks[groupIndex]?.items
					? navLinks[groupIndex].items?.push({ item, path: itemPath })
					: (navLinks[groupIndex].items = [{ item, path: itemPath }]);
			} else {
				navLinks.push({ group, path: groupPath, items: [{ item, path: itemPath }] });
			}
		}
	}
	let theme = cookies.get('bcu-theme');
	// If no theme, set theme to skeleton
	if (!theme) {
		cookies.set('bcu-theme', 'blackcatui', { path: '/' });
		theme = 'blackcatui';
	}
	// Imports theme as a string
	const themes = import.meta.glob(`$lib/themes/*.css`, { as: 'raw' });
	return {
		currentTheme: themes[`/src/lib/themes/theme-${theme}.css`](),
		navLinks
	};
}) satisfies LayoutServerLoad;
