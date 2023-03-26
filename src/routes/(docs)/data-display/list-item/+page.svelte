<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldListItem from '$lib/components/DataDisplay/List/ListItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'List Item',
		description: 'List item used within <a href="/data-display/list">List</a>',
		imports: ['ListItem'],
		source: 'components/DataDisplay/List',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
		components: [
			{
				label: 'ListItem',
				sveld: sveldListItem,
				overrideProps: ['rounded', 'active', 'hover', 'padding']
			}
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Focus the next list item.'],
			['<kbd>Shift + Tab</kbd> ', 'Focus the previous list item.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Toggles the current list item selection.']
		]
	};

	// Local
	let valueSingle: string = 'books';
	let valueMultiple: string[] = ['books', 'movies'];
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<section class="space-y-4">
			<h2>List Item</h2>
			<p>
				Each List item supports a <code>lead</code> and <code>trail</code> slot, which can be useful
				for icons or actions.
			</p>
			<CodeBlock
				language="html"
				code={`
<ListItem bind:group={valueSingle} name="books" value="books">
	<svelte:fragment slot="bcu-list-lead">(icon)</svelte:fragment>
	(label)
	<svelte:fragment slot="bcu-list-trail">(icon)</svelte:fragment>
</ListItem>
			`}
			/>
		</section>
	</section>
</DocsShell>
