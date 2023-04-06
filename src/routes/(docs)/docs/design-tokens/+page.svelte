<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';

	import Flow from './flow.png';
	import Pairing from './pairing.png';

	// Types
	import type { TableSource } from '$lib/components/DataDisplay/Table/types';
	// Components
	import Table from '$lib/components/DataDisplay/Table/Table.svelte';

	// Local
	const headings = ['Class', 'Values', 'Description'];
	const vColorsAll = '<a href="/docs/colors">Theme Colors</a>';
	const vPairings = '<a href="/docs/design-tokens#color-pairing-chart">Color Pairing</a>';
	const vCorners = 'tl | tr | bl | br';
	const descPairings = 'Pairing values can be 50-900 or 900-50 format.';

	// Tables
	const tableBackgrounds: TableSource = {
		head: headings,
		body: [
			[
				'<code>.bg-[color]-backdrop-token</code>',
				vColorsAll,
				'Background styles for modal backdrops.'
			],
			[
				'<code>.bg-[color]-hover-token</code>',
				vColorsAll,
				'Background styles for hoverable elements.'
			],
			[
				'<code>.bg-[color]-active-token</code>',
				vColorsAll,
				'Background styles for active selected elements.'
			],
			['<code>.bg-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableBorderRadius: TableSource = {
		head: headings,
		body: [
			[
				'<code>.rounded-token</code>',
				'',
				'Border radius for small elements: buttons, badges, chips, etc.'
			],
			[
				'<code>.rounded-[corner]-token</code>',
				vCorners,
				'Corner border radius styles for small elements.'
			],
			[
				'<code>.rounded-container-token</code>',
				'',
				'Border radius for large elements, such as cards and textareas'
			],
			[
				'<code>.rounded-[corner]-container-token</code>',
				vCorners,
				'Corner border radius styles large small elements.'
			]
		]
	};
	const tableBorder: TableSource = {
		head: headings,
		body: [
			['<code>.border-token</code>', '', "Implements your theme's configured border size."],
			[
				'<code>.border-[color]-[pairings]-token</code>',
				`${vColorsAll}<br>${vPairings}`,
				descPairings
			]
		]
	};
	const tableFills: TableSource = {
		head: headings,
		body: [
			['<code>.fill-token</code>', '', 'The default responsive light/dark mode fill color.'],
			[
				'<code>.fill-on-[color]-token</code>',
				vColorsAll,
				'Provides an accessible foreground color.'
			]
		]
	};
	const tableRings: TableSource = {
		head: headings,
		body: [
			[
				'<code>.ring-outline-token</code>',
				'',
				'Creates a subtle transparent outline like Card elements.'
			],
			['<code>.ring-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableText: TableSource = {
		head: headings,
		body: [
			[
				'<code>.font-heading-token</code>',
				'',
				"Implements your theme's configured heading text size."
			],
			['<code>.font-token</code>', '', "Implements your theme's configured base text size."],
			['<code>.text-token</code>', '', "Implements your theme's configured base text color."],
			[
				'<code>.text-on-[color]-token</code>',
				vColorsAll,
				'Provides an accessible foreground color.'
			],
			['<code>.text-[color]-[pairings]-token</code>', `${vColorsAll}<br>${vPairings}`, descPairings]
		]
	};
	const tableMisc: TableSource = {
		head: headings,
		body: [
			[
				'<code>accent-[color]-token</code>',
				vColorsAll,
				'Provides an input <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color" target="_blank">accent-color</a>.'
			]
		]
	};
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header">
		<div class="flex flex-col gap-10">
			<h1>Colors</h1>
			<p>
				BlackCatUI themes extend Tailwind's color palette and can be used anywhere within your
				project.
			</p>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<section class="space-y-4">
				<p class="!text-xl">
					BlackCatUI utilizes a simple but powerful <strong>design token</strong> system to implement
					theme settings in elements and components. These represent the defaults for most elements and
					components, which means they auto-adapt based on your theme with minimal configuration out
					of the box. Best of all you can use these within your custom components as well!
				</p>
			</section>
			<section class="space-y-4">
				<h2>Theme Flow</h2>
				<p>
					Below is a visualization of how BlackCatUI uses your theme to control your UI. We start
					with your theme's CSS variables, then construct design token classes based on these
					variables, next components utilize these design token classes, then finally you construct
					your pages with sets of elements and components.
				</p>
				<div class="bcu-card variant-ghost-primary">
					<img class="rounded-container-token shadow-lg" src={Flow} alt="flow" />
				</div>
			</section>
			<section class="space-y-4">
				<h2>Color Pairing Chart</h2>
				<p>
					Below is a visualization of color pairings in BlackCatUI. This is how we balance light and
					dark mode for your themes in practice. For example, the <em>surface</em> color swatch 50
					is the lightest available color, so we utilize that for your light theme background color.
					While swatch 900 is the darkest, so vice versa. These two colors form a pair. We then
					generate design token classes for
					<code>.bg-surface-50-900-token</code>
					and <code>bg-surface-900-50-token</code> that automaticallys switch between these in light/dark
					mode respectively.
				</p>
				<div class="bcu-card variant-ghost-primary">
					<img class="rounded-container-token shadow-lg" src={Pairing} alt="pairing" />
				</div>
			</section>
			<hr />
			<!-- Backgrounds -->
			<section class="space-y-4">
				<h2>Backgrounds</h2>
				<Table source={tableBackgrounds} />
			</section>
			<!-- Border Radius -->
			<section class="space-y-4">
				<h2>Border Radius</h2>
				<Table source={tableBorderRadius} />
			</section>
			<!-- Borders -->
			<section class="space-y-4">
				<h2>Borders</h2>
				<Table source={tableBorder} />
			</section>
			<!-- Fills -->
			<section class="space-y-4">
				<h2>SVG Fill Color</h2>
				<Table source={tableFills} />
			</section>
			<!-- Rings -->
			<section class="space-y-4">
				<h2>Rings</h2>
				<p>Utilities for creating outline rings with box-shadows.</p>
				<Table source={tableRings} />
			</section>
			<!-- Text -->
			<section class="space-y-4">
				<h2>Text</h2>
				<Table source={tableText} />
			</section>
			<!-- Accent -->
			<section class="space-y-4">
				<h2>Accent</h2>
				<Table source={tableMisc} />
			</section>
		</section>
	</svelte:fragment>
</DocsLayout>
