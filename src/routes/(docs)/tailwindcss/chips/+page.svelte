<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';

	// Types
	import type { ToastSettings } from '$lib/components/Feedback/Toast/types';
	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import { toastStore } from '$lib/components/Feedback/Toast/stores';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Check, Heart, Share } from '@steeze-ui/heroicons';
	import { Checkmarx } from '@steeze-ui/simple-icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Chips',
		description: 'Interactive elements for actions, selection, or filtering.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/chips'],
		source: 'styles/elements/chips.css',
		classes: [
			['<code>bcu-chip</code>', '', 'Provides the standard chip style.'],
			[
				'<code>bcu-chip-[color]</code>',
				'<a href="/docs/colors">Any theme color.</a>',
				'Applies a variant style.'
			],
			['<code>bcu-chip-active</code>', '', 'Sets the default active state.'],
			[
				'<code>bcu-chip-[color]-active</code>',
				'<a href="/docs/colors">Any theme color.</a>',
				'Set a colored active state.'
			],
			['<code>bcu-chip-disabled</code>', '', 'Applies disabled styling.']
		]
	};

	// Local
	let currentVariant = 'variant-filled';
	let color = 'red';
	let flavors: Record<string, boolean> = {
		vanilla: true,
		chocolate: false,
		strawberry: false
	};

	function triggerToast(term: string): void {
		const t: ToastSettings = {
			message: `You selected the <u>${term}</u> action.`,
			background: 'variant-filled-primary'
		};
		toastStore.trigger(t);
	}

	function section(c: string): void {
		color = c;
	}

	function filter(flavor: string): void {
		flavors[flavor] = !flavors[flavor];
	}
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<span class="bcu-chip {currentVariant}">Chip</span>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
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
				<CodeBlock language="html" code={`<span class="bcu-chip variant-filled">Chip</span>`} />
			</svelte:fragment>
		</DocsPreview>

		<p>
			Apply <code>.bcu-chip</code> to any inline element, such as a <em>span</em> or <em>anchor</em>
			tag.
		</p>
		<section class="space-y-4">
			<h2>Action Chips</h2>
			<p>Use chips to create small related set of actions.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<!-- prettier-ignore -->
					<div class="flex justify-center space-x-2">
						<span class="bcu-chip variant-soft hover:variant-filled" on:click={()=>{triggerToast('like')}} on:keypress>
							<Icon src={Heart} theme="solid" class="w-6"></Icon>
							<span>Like</span>
						</span>
						<span class="bcu-chip variant-soft hover:variant-filled" on:click={()=>{triggerToast('share')}} on:keypress>
							<Icon src={Share} theme="solid" class="w-6"></Icon>
							<span>Share</span>
						</span>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<span class="bcu-chip variant-soft hover:variant-filled" on:click={doSomething}>
	<span>(icon)</span>
	<span>Action</span>
</span>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>State</h2>
			<p>
				Dynamically modify chip classes to represent state. See the examples below using this
				technique.
			</p>
			<CodeBlock
				language="ts"
				code={`$: chipStateClass = (someCondition) ? 'variant-filled-primary' : 'variant-soft-primary';`}
			/>
			<CodeBlock language="html" code={`<span class="bcu-chip {chipStateClass}">...</span>`} />
			<!-- Single Selection -->
			<h3>Single Selection</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex justify-center space-x-2">
						{#each ['red', 'blue', 'green'] as c}
							<!-- prettier-ignore -->
							<span
								class="bcu-chip {color === c ? 'variant-filled' : 'variant-soft'}"
								on:click={() => { section(c); }}
								on:keypress
							>
								{#if color === c}
								<span>
									<Icon src={Check} theme="solid" class="w-4"></Icon>
								</span>
								{/if}
								<span>{c}</span>
							</span>
						{/each}
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="ts" code={`let color = 'red';`} />
					<CodeBlock
						language="html"
						code={`
{#each ['red', 'blue', 'green'] as c}
	<span
		class="bcu-chip {color === c ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { section(c); }}
		on:keypress
	>
		{#if color === c}(<span>(icon)</span>){/if}
		<span>{c}</span>
	</span>
{/each}
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Multiple Selection -->
			<h3>Multiple Selection</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex justify-center space-x-2">
						{#each Object.keys(flavors) as f}
							<!-- prettier-ignore -->
							<span
								class="bcu-chip {flavors[f] ? 'variant-filled' : 'variant-soft'}"
								on:click={() => { filter(f); }}
								on:keypress
							>
								{#if flavors[f]}<span>									<Icon src={Check} theme="solid" class="w-4"></Icon>
								</span>{/if}
								<span class="capitalize">{f}</span>
							</span>
						{/each}
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="ts"
						code={`
let flavors: Record<string, boolean> = {
	vanilla: true,
	chocolate: false,
	strawberry: false
};
`}
					/>
					<CodeBlock
						language="html"
						code={`
{#each Object.keys(flavors) as f}
	<span
		class="bcu-chip {flavors[f] ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { filter(f); }}
		on:keypress
	>
		{#if flavors[f]}<span>(icon)</span>{/if}
		<span class="capitalize">{f}</span>
	</span>
{/each}
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</section>
</DocsShell>
