<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import Switch from '$lib/components/Inputs/Switch/Switch.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldSlideToggle from '$lib/components/Inputs/Switch/Switch.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Switch',
		description: 'Switches toggle the state of a single setting on or off.',
		imports: ['Switch'],
		source: 'components/Inputs/Switch',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
		components: [{ sveld: sveldSlideToggle }],
		restProps: 'input'
	};

	// Local
	let checkedValue = false;
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<Switch name="slider" checked />
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="ts" code={`let value: boolean = false;`} />
				<CodeBlock language="html" code={`<Switch name="slide" bind:checked={value} />`} />
			</svelte:fragment>
		</DocsPreview>

		<p>This component provides an alternative UI for a checkbox input element.</p>
		<section class="space-y-4">
			<h2>Labeled</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex items-center gap-4">
						<Switch name="slider-label" bind:checked={checkedValue}>
							<span class="inline-block w-[100px] text-center"
								>Powered {checkedValue ? 'On' : 'Off'}</span
							>
						</Switch>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<Switch name="slider-label" checked>(label)</Switch>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Customized</h2>
			<p>
				Slide toggles styles and colors can be easily customized with the <code>active</code> and
				<code>size</code> properties.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex items-center gap-4">
						<Switch name="slider-small" checked active="bg-primary-500" size="lg" />
						<Switch name="slider-base" checked active="bg-secondary-500" />
						<Switch name="slider-large" checked active="bg-tertiary-500" size="sm" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<Switch name="slider-large" checked active="bg-primary-500" size="lg" />`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Checkbox Attributes</h2>
			<p>
				This component supports Svelte's <code>$$restProps</code>, which allows for
				<em>required</em>, <em>disabled</em>, and any other valid checkbox input attributes.
			</p>
			<CodeBlock language="html" code={`<Switch ... required disabled />`} />
		</section>
	</section>
</DocsShell>
