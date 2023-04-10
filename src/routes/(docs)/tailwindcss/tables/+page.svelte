<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';

	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	import TabGroup from '$lib/components/Navigation/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Navigation/Tab/Tab.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Tables',
		description: 'Provides a set of styles for native HTML table elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tables'],
		source: 'styles/elements/tables.css',
		classes: [
			[
				'<code>.bcu-table-container</code>',
				'-',
				'Apply to a wrapping parent element to enable responsive scrolling.'
			],
			['<code>.bcu-table</code>', '-', 'Apply to a native HTML table element to add table styles.'],
			[
				'<code>.bcu-table-compact</code>',
				'-',
				'Apply to the native HTML element to set shorter row spacing.'
			],
			[
				'<code>.bcu-table-comfortable</code>',
				'-',
				'Apply to the native HTML element to set taller row spacing.'
			],
			[
				'<code>.bcu-table-hover</code>',
				'-',
				'Apply to a table element to enable a subtle hover effect on rows.'
			],
			[
				'<code>.bcu-table-interactive</code>',
				'-',
				'Apply to a table element to enable a visible hover effect and pointer cursor.'
			],
			[
				'<code>.bcu-table-sort-asc</code>',
				'-',
				'Apply to a table heading cell to add a down arrow indicating ascending sort.'
			],
			[
				'<code>.bcu-table-sort-dsc</code>',
				'-',
				'Apply to a table heading cell to add an up arrow indicating desending sort.'
			],
			[
				'<code>.bcu-table-row-checked</code>',
				'-',
				'Apply to a table body row to indicate selection state.'
			],
			[
				'<code>.bcu-table-cell-fit</code>',
				'-',
				'Apply to a table cell to auto-fit to the content widths.'
			]
		]
	};

	// Local
	let tabSet: number = 0;
	const tableArr = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];
	const totalWeight = tableArr.reduce((accumulator, obj) => accumulator + obj.weight, 0);
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="bcu-table-container text-token">
					<table class="bcu-table bcu-table-hover">
						<thead>
							<tr>
								<th>Position</th>
								<th>Name</th>
								<th>Symbol</th>
								<th>Weight</th>
							</tr>
						</thead>
						<tbody>
							{#each tableArr as row}
								<tr>
									<td>{row.position}</td>
									<td>{row.name}</td>
									<td>{row.symbol}</td>
									<td><span class="badge variant-soft-primary">{row.weight}</span></td>
								</tr>
							{/each}
						</tbody>
						<tfoot>
							<tr>
								<th colspan="3">Total Weight</th>
								<td>{totalWeight}</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="html"
					code={`
<!-- Responsive Container (recommended) -->
<div class="bcu-table-container">
	<!-- Native Table Element -->
	<table class="bcu-table bcu-table-hover">
		<thead>
			<tr>
				<th>Position</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.position}</td>
					<td>{row.name}</td>
					<td>{row.symbol}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot>
	</table>
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<p>
			Wrap a <code>.bcu-table-container</code> element around any native HTML table with the
			<code>.bcu-table</code> class applied to create a responsive table.
		</p>
		<!-- Options -->
		<section class="space-y-4">
			<h2>Options</h2>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabSet} name="tab1" value={0}>Spacing</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>Hover</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>Selection</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Fit Width</Tab>
				<Tab bind:group={tabSet} name="tab3" value={4}>Sorting</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="bcu-tab-group-panel">
					{#if tabSet === 0}
						<!-- Spacing -->
						<p>
							Apply classes <code>.bcu-table-compact</code> or <code>.bcu-table-comfortable</code>
							to the
							<em>table</em> for tighter or looser row spacing.
						</p>
						<CodeBlock language="html" code={`<table class="bcu-table-compact">...</table>`} />
					{:else if tabSet === 1}
						<!-- Hover -->
						<p>
							Apply the <code>.bcu-table-hover</code> class to add a subtle hover style which can be
							helpful when scanning data horizontally. You can also use the
							<code>.bcu-table-interactive</code> class if the table rows is intended to be interactive
							on click. Avoid using both classes.
						</p>
						<CodeBlock language="html" code={`<table class="bcu-table-hover">...</table>`} />
						<CodeBlock language="html" code={`<table class="bcu-table-interactive">...</table>`} />
					{:else if tabSet === 2}
						<!-- Selection -->
						<p>
							Apply the <code>.bcu-table-row-checked</code> class to a table body row to indicate an
							active selection state.
						</p>
						<CodeBlock language="html" code={`<tr class="bcu-table-row-checked">...</tr>`} />
					{:else if tabSet === 3}
						<!-- Fit -->
						<p>
							Use the <code>.bcu-table-cell-fit</code> class on a cell element to fit the cell to the
							content widths. This can be useful for small columns that contain elements such as avatars
							or IDs. Be sure to apply to both the table header and table cell.
						</p>
						<CodeBlock language="html" code={`<th class="bcu-table-cell-fit">Avatar</th>`} />
						<CodeBlock language="html" code={`<td class="bcu-table-cell-fit">(avatar)</td>`} />
					{:else if tabSet === 4}
						<!-- Sorting -->
						<p>
							Apply <code>.bcu-table-sort-asc</code> or <code>.bcu-table-sort-dsc</code> to the
							<em>table head</em> elements to sort by ascending or descending order respectively.
						</p>
						<CodeBlock language="html" code={`<th class="bcu-table-sort-asc">Skeleton</th>`} />
						<CodeBlock language="html" code={`<th class="bcu-table-sort-dsc">Skeleton</th>`} />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		<!-- See Also -->
		<section class="space-y-4">
			<h2>See Also</h2>
			<div class="card p-4 space-y-4">
				<div
					class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
				>
					<p>A simple data-driven table component.</p>
					<a class="bcu-button variant-ghost-surface" href="/data-display/table"
						>Tables Component &rarr;</a
					>
				</div>
			</div>
		</section>
	</section>
</DocsShell>
