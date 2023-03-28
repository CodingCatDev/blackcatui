<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { BookOpen, Film, Tv } from '@steeze-ui/heroicons';
	import { Gamedeveloper } from '@steeze-ui/simple-icons';

	//Core
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';

	// Components
	import AccordionItem from '$lib/components/Layout/Accordion/AccordionItem.svelte';
	// Utilities
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAccordionItem from '$lib/components/Layout/Accordion/AccordionItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Accordion Item',
		description: 'Used in <a href="/layout/accordion">Accordion</a>',
		imports: ['AccordionItem'],
		source: 'components/Layout/Accordion',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
		components: [
			{
				label: 'AccordionItem',
				sveld: sveldAccordionItem,
				overrideProps: [
					'padding',
					'hover',
					'rounded',
					'regionControl',
					'regionPanel',
					'regionCaret'
				]
			}
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Focus the next accordion item.'],
			['<kbd>Shift + Tab</kbd> ', 'Focus the previous accordion item.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Toggles the item panel open or closed.']
		]
	};

	// Local
	const loremIpsum =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.';
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<AccordionItem open>
					<svelte:fragment slot="bcu-accordion-item-lead">
						<Icon src={BookOpen} theme="solid" class="w-8" />
					</svelte:fragment>
					<svelte:fragment slot="bcu-accordion-item-summary"
						><p class="font-bold">Books</p></svelte:fragment
					>
					<svelte:fragment slot="bcu-accordion-item-content">
						<p>This is the content panel for the <strong>books</strong> item.</p>
						<p>{loremIpsum}</p>
					</svelte:fragment>
				</AccordionItem>
			</svelte:fragment>

			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="html"
					code={`
<AccordionItem open>
<svelte:fragment slot="bcu-accordion-item-lead">(icon)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-summary">(summary)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-content">(content)</svelte:fragment>
</AccordionItem>
		`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<h2>Open on Load</h2>
			<p>
				Set the visible items on load with <code>open</code>. When using <code>autocollapse</code> mode,
				this is limited to a single item.
			</p>
			<CodeBlock language="html" code={`<AccordionItem open>...</AccordionItem>`} />
		</section>
	</section>
</DocsShell>
