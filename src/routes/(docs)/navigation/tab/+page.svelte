<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldTab from '$lib/components/Navigation/Tab/Tab.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tab',
		description:
			'Use tabs to quickly switch between different views, used in <a href="/navigation/tab-group/">Tab Group</a>.',
		imports: ['Tab'],
		source: 'components/Tab',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/',
		components: [
			{
				label: 'Tab',
				sveld: sveldTab,
				overrideProps: ['active', 'hover', 'flex', 'padding', 'rounded']
			}
		]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<CodeBlock language="ts" code={`let tabSet: number = 0;`} />
		<CodeBlock
			language="html"
			code={`
<TabGroup>
<Tab bind:group={tabSet} name="tab1" value={0}>(label)</Tab>
`}
		/>
		<section class="space-y-4">
			<h2>Using Svelte Stores</h2>
			<p>
				You may optionally choose to use Svelte writable stores to control your tab group state.
				Note the use of the <code>$</code> sign within the <code>bind:group</code> property. Pair
				this with Skeleton's
				<a href="/utilities/local-storage-stores">Local Storage Store</a> for automatic persistence.
			</p>
			<CodeBlock
				language="ts"
				code={`import { writable, type Writable } from 'svelte/store';\n\nconst tabSet: Writable<number> = writable(0);`}
			/>
			<CodeBlock
				language="ts"
				code={`<Tab bind:group={$tabSet} name="tab1" value={0}>(label)</Tab>`}
			/>
		</section>
	</section>
</DocsShell>
