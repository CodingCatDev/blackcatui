<script lang="ts">
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	// Components
	import RadioGroup from '$lib/components/Inputs/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Inputs/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldRadioItem from '$lib/components/Inputs/Radio/RadioItem.svelte?raw&sveld';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3BottomLeft, Bars3, Bars3BottomRight } from '@steeze-ui/heroicons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Radio Item',
		description: 'Item for <a href="/inputs/radio-group/">RadioGroup</a>',
		imports: ['RadioItem'],
		source: 'components/Inputs/Radio',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/',
		restProps: 'RadioItem input',
		components: [
			{
				label: 'RadioItem',
				sveld: sveldRadioItem,
				overrideProps: ['padding', 'hover', 'accent', 'color', 'fill', 'rounded']
			}
		]
	};
</script>

<DocsShell {settings}>
	<section class="space-y-4">
		<h2>Radio Attributes</h2>
		<p>
			The Radio Item component supports Svelte's <code>$$restProps</code>, which allows for
			<em>required</em>, <em>disabled</em>, and any other valid radio input attributes. Please note
			these settings are applied per item.
		</p>
		<CodeBlock language="html" code={`<RadioItem ... required disabled />`} />
	</section>
</DocsShell>
