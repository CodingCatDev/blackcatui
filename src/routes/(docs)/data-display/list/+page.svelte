<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import List from '$lib/components/DataDisplay/List/List.svelte';
	import ListItem from '$lib/components/DataDisplay/List/ListItem.svelte';
	// Sveld
	import sveldList from '$lib/components/DataDisplay/List/List.svelte?raw&sveld';
	import sveldListItem from '$lib/components/DataDisplay/List/ListItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'List',
		description: 'Interactive list that maintains selection state.',
		imports: ['List', 'ListItem'],
		source: 'components/List',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
		components: [
			{ label: 'List', sveld: sveldList },
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
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="w-full max-w-[480px] card p-4 text-token">
					<label for="" class="space-y-4">
						<List>
							<ListItem bind:group={valueSingle} name="medium" value="books">
								<svelte:fragment slot="bcu-list-lead"
									><i class="fa-solid fa-book w-6 text-center" /></svelte:fragment
								>
								Books
							</ListItem>
							<ListItem bind:group={valueSingle} name="medium" value="movies">
								<svelte:fragment slot="bcu-list-lead"
									><i class="fa-solid fa-film w-6 text-center" /></svelte:fragment
								>
								Movies
							</ListItem>
							<ListItem bind:group={valueSingle} name="medium" value="television">
								<svelte:fragment slot="bcu-list-lead"
									><i class="fa-solid fa-tv w-6 text-center" /></svelte:fragment
								>
								Television
							</ListItem>
						</List>
					</label>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="text-center"><code>Selected: {valueSingle}</code></div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="ts" code={`let valueSingle: string = 'books';`} />
				<CodeBlock
					language="html"
					code={`
<List>
	<ListItem bind:group={valueSingle} name="medium" value="books">Books</ListItem>
	<ListItem bind:group={valueSingle} name="medium" value="movies">Movies</ListItem>
	<ListItem bind:group={valueSingle} name="medium" value="tv">TV</ListItem>
</List>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<p>
				By default the list uses a native <em>radio inputs</em> to ensure only one item is selected at
				a time.
			</p>
		</section>
		<section class="space-y-4">
			<h3>Multiple Selection</h3>
			<p>
				By adding the <code>multiple</code> property, the component uses native
				<em>checkbox inputs</em>, which allows for multi-select.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<List
						active="variant-filled-primary"
						hover="hover:variant-soft-primary"
						multiple
						class="w-full max-w-[480px]"
					>
						<ListItem bind:group={valueMultiple} name="medium" value="books">
							<svelte:fragment slot="bcu-list-lead"
								><i class="fa-solid fa-book w-6 text-center" /></svelte:fragment
							>
							Books
						</ListItem>
						<ListItem bind:group={valueMultiple} name="medium" value="movies">
							<svelte:fragment slot="bcu-list-lead"
								><i class="fa-solid fa-film w-6 text-center" /></svelte:fragment
							>
							Movies
						</ListItem>
						<ListItem bind:group={valueMultiple} name="medium" value="television">
							<svelte:fragment slot="bcu-list-lead"
								><i class="fa-solid fa-tv w-6 text-center" /></svelte:fragment
							>
							Television
						</ListItem>
					</List>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="text-center">
						<code>Selected: {valueMultiple.length ? valueMultiple : 'None'}</code>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="ts" code={`let valueMultiple: string[] = ['books', 'movies'];`} />
					<CodeBlock
						language="html"
						code={`
<List multiple>
	<ListItem bind:group={valueMultiple} name="medium" value="books">Books</ListItem>
	<ListItem bind:group={valueMultiple} name="medium" value="movies">Movies</ListItem>
	<ListItem bind:group={valueMultiple} name="medium" value="tv">TV</ListItem>
</List>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Lead and Trail Slots</h2>
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
		<section class="space-y-4">
			<h2>Native Alternatives</h2>
			<p>
				Consider using the native Select element with either the <code>size</code> or
				<code>multiple</code> attributes set to support single or multiple selection respectively. However,
				please be aware that Safari (macOS) does not support all styles.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<select class="select w-full max-w-[480px]" size="4" value="1">
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
						<option value="4">Option 4</option>
						<option value="5">Option 5</option>
					</select>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<select class="select" size="4" value="1">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</section>
</DocsShell>
