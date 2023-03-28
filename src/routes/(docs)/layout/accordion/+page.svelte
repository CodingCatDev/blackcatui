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
	import Accordion from '$lib/components/Layout/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Layout/Accordion/AccordionItem.svelte';
	// Utilities
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAccordion from '$lib/components/Layout/Accordion/Accordion.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Accordion',
		description:
			'Divide content into collapsible sections, utilizes <a href="/layout/accordion-item">AccordionItem</a>',
		imports: ['Accordion', 'AccordionItem'],
		source: 'components/Layout/Accordion',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
		components: [{ label: 'Accordion', sveld: sveldAccordion }],
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
				<Accordion autocollapse class="p-4" {variant}>
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
					<AccordionItem>
						<svelte:fragment slot="bcu-accordion-item-lead">
							<Icon src={Film} theme="solid" class="w-8" />
						</svelte:fragment>
						<svelte:fragment slot="bcu-accordion-item-summary"
							><p class="font-bold">Movies</p></svelte:fragment
						>
						<svelte:fragment slot="bcu-accordion-item-content">
							<p>This is the content panel for the <strong>movies</strong> item.</p>
							<p>{loremIpsum}</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="bcu-accordion-item-lead">
							<Icon src={Tv} theme="solid" class="w-8" />
						</svelte:fragment>
						<svelte:fragment slot="bcu-accordion-item-summary"
							><p class="font-bold">Television</p></svelte:fragment
						>
						<svelte:fragment slot="bcu-accordion-item-content">
							<p>This is the content panel for the <strong>television</strong> item.</p>
							<p>{loremIpsum}</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="bcu-accordion-item-lead">
							<Icon src={Gamedeveloper} theme="solid" class="w-8" />
						</svelte:fragment>
						<svelte:fragment slot="bcu-accordion-item-summary"
							><p class="font-bold">Games</p></svelte:fragment
						>
						<svelte:fragment slot="bcu-accordion-item-content">
							<p>This is the content panel for the <strong>games</strong> item.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi
								quibusdam odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam,
								nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
							</p>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="flex justify-center gap-4">
					<select bind:value={variant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="html"
					code={`
<Accordion>
<AccordionItem open>
<svelte:fragment slot="bcu-accordion-item-lead">(icon)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-summary">(summary)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-content">(content)</svelte:fragment>
</AccordionItem>
<AccordionItem>
<svelte:fragment slot="bcu-accordion-item-lead">(icon)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-summary">(summary)</svelte:fragment>
<svelte:fragment slot="bcu-accordion-item-content">(content)</svelte:fragment>
</AccordionItem>
<!-- ... -->
</Accordion>
		`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4" />
		<section class="space-y-4">
			<h2>Auto-Collapse Mode</h2>
			<p>
				Enable the <code>autocollapse</code> setting to limit display to one accordion panel at a time.
			</p>
			<CodeBlock language="html" code={`<Accordion autocollapse>...</Accordion>`} />
		</section>
	</section>
</DocsShell>
