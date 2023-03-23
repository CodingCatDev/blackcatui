<script lang="ts">
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	// Components
	import RadioGroup from '$lib/components/Inputs/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Inputs/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldRadioGroup from '$lib/components/Inputs/Radio/RadioGroup.svelte?raw&sveld';
	import sveldRadioItem from '$lib/components/Inputs/Radio/RadioItem.svelte?raw&sveld';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3BottomLeft, Bars3, Bars3BottomRight } from '@steeze-ui/heroicons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Radio Group',
		description: 'Capture feedback limited to a small set of options.',
		imports: ['RadioGroup', 'RadioItem'],
		source: 'components/Radio',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/',
		restProps: 'RadioItem input',
		components: [
			{ label: 'RadioGroup', sveld: sveldRadioGroup },
			{
				label: 'RadioItem',
				sveld: sveldRadioItem,
				overrideProps: ['padding', 'hover', 'accent', 'color', 'fill', 'rounded']
			}
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable RadioItem.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable RadioItem.'],
			[
				'<kbd>Space</kbd> or <kbd>Enter</kbd>',
				'Checks the focused radio button if it is not already checked'
			]
		]
	};

	// Local
	let justify: number = 0;
	let timeHorz: string = 'months';
	let timeVert: string = 'Millennia';
	let timeNames = ['Millennia', 'Epochs', 'Eras', 'Eons'];
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<RadioGroup class="text-token">
					<RadioItem bind:group={justify} name="justify" value={0}>
						<Icon src={Bars3BottomLeft} theme="solid" class="w-6" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify" value={1}>
						<Icon src={Bars3} theme="solid" class="w-6" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify" value={2}>
						<Icon src={Bars3BottomRight} theme="solid" class="w-6" />
					</RadioItem>
				</RadioGroup>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="text-center"><code>selected: {justify}</code></div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="ts" code={`let value: number = 0;`} />
				<CodeBlock
					language="html"
					code={`
<RadioGroup>
	<RadioItem bind:group={value} name="justify" value={0}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={2}>(label)</RadioItem>
</RadioGroup>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
		<section class="space-y-4">
			<p>
				This component acts as a wrapper around native HTML radio inputs. Bind the <em>group</em>,
				then set <em>value</em> and <em>name</em>
				as follows.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>
				The radio group supports variant styles for <code>active</code> and <code>hover</code> properties.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={timeHorz} name="time" value="months">Months</RadioItem>
						<RadioItem bind:group={timeHorz} name="time" value="years">Years</RadioItem>
					</RadioGroup>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">...</RadioGroup>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Vertical</h2>
			<p>Set <em>display</em> to <code>flex-col</code> for a vertical layout.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<RadioGroup rounded="rounded-container-token" display="flex-col">
						{#each timeNames as name, i}
							<RadioItem bind:group={timeVert} label={name} {name} value={name}>{name}</RadioItem>
						{/each}
					</RadioGroup>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<RadioGroup rounded="rounded-container-token" display="flex-col">...</RadioGroup>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Full Width</h2>
			<p>Set <em>display</em> to <code>flex</code> to stretch and fill the full width.</p>
			<CodeBlock language="html" code={`<RadioGroup display="flex">...</RadioGroup>`} />
		</section>
		<section class="space-y-4">
			<h2>Radio Attributes</h2>
			<p>
				The Radio Item component supports Svelte's <code>$$restProps</code>, which allows for
				<em>required</em>, <em>disabled</em>, and any other valid radio input attributes. Please
				note these settings are applied per item.
			</p>
			<CodeBlock language="html" code={`<RadioItem ... required disabled />`} />
		</section>
	</section>
</DocsShell>
