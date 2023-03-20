import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const modules = import.meta.glob('../lib/components/**/*.svelte');

	const navLinks: [{ group: string; path: string; items?: [{ item: string; path: string }] }] = [
		{ group: 'Home', path: '' }
	];
	for (const path in modules) {
		const splitPath = path.split('/');
		const groupPath = splitPath.at(-3)?.toLowerCase() || '';
		const group =
			splitPath
				.at(-3)
				?.replace(/([A-Z])/g, ' $1')
				.slice(1) || '';
		const itemPath = splitPath.at(-1)?.replace('.svelte', '')?.toLowerCase() || '';
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
	console.log(JSON.stringify(navLinks));
	return {
		navLinks
	};
}) satisfies LayoutServerLoad;
