<script lang="ts">
	// Docs
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun, Moon } from '@steeze-ui/heroicons';

	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Buttons',
		description: 'Provides a robust set of button styles, including preset variants.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/buttons'],
		source: 'styles/elements/buttons.css',
		classes: [
			['<code>.bcu-button</code>', '-', 'Creates a text button using a button or anchor.'],
			[
				'<code>.bcu-button-icon</code>',
				'-',
				'Creates a text icon button using a button or anchor.'
			],
			[
				'<code>.bcu-button-[value]</code>',
				'sm | base | lg | xl',
				'Canned button sizes that define padding and text sizes.'
			],
			[
				'<code>.bcu-button-icon-[value]</code>',
				'sm | base | lg | xl',
				'Canned icon button sizes that define padding and text sizes.'
			]
		]
	};

	// Local:
	let currentVariant = 'variant-filled';
	const href = '/elements/buttons';

	// Reactive
	$: props = {
		tag: 'button',
		variant: 'variant-filled-primary',
		size: '',
		disabled: false
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="flex gap-4">
					<button type="button" class="bcu-button-icon {currentVariant}">
						<Icon src={Sun} theme="solid" class="w-8" />
					</button>
					<button type="button" class="bcu-button {currentVariant}">Button</button>
					<button type="button" class="bcu-button {currentVariant}">
						<Icon src={Sun} theme="solid" class="w-8" />
						<span>Button</span>
					</button>
				</div>
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
				<CodeBlock
					language="html"
					code={`
<button type="button" class="bcu-button-icon ${currentVariant}">(icon)</button>
<button type="button" class="bcu-button ${currentVariant}">Button</button>
<button type="button" class="bcu-button ${currentVariant}">
	<span>(icon)</span>
	<span>Button</span>
</button>
`}
				/>
				<CodeBlock
					language="html"
					code={`
<a href="/" class="bcu-button-icon ${currentVariant}">(icon)</a>
<a href="/" class="bcu-button ${currentVariant}">a</a>
<a href="/" class="bcu-button ${currentVariant}">
	<span>(icon)</span>
	<span>Anchor</span>
</a>
`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<p>
			Use <code>.bcu-button</code> to add basic button styles to any anchor or button element.
			Replace with
			<code>.bcu-button-icon</code>
			for an icon button. Mix buttons with any arbitrary background color or variant style classes, such
			as <code>.variant-[style]-[themeColor]</code>.
		</p>
		<section class="space-y-4">
			<h2>Sizes</h2>
			<p>A number of canned size presets are available via <code>.bcu-button-[size]</code>.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="space-y-4">
						<div class="flex justify-center items-center gap-4">
							<button type="button" class="bcu-button bcu-button-sm variant-filled">sm</button>
							<button type="button" class="bcu-button variant-filled">base</button>
							<button type="button" class="bcu-button bcu-button-lg variant-filled">lg</button>
							<button type="button" class="bcu-button bcu-button-xl variant-filled">xl</button>
						</div>
						<hr />
						<div class="flex justify-center items-center gap-4">
							<button type="button" class="bcu-button-icon bcu-button-icon-sm variant-filled">
								<Icon src={Sun} theme="solid" class="w-8" />
							</button>
							<button type="button" class="bcu-button-icon variant-filled">
								<Icon src={Sun} theme="solid" class="w-8" />
							</button>
							<button type="button" class="bcu-button-icon bcu-button-icon-lg variant-filled">
								<Icon src={Sun} theme="solid" class="w-8" />
							</button>
							<button type="button" class="bcu-button-icon bcu-button-icon-xl variant-filled">
								<Icon src={Sun} theme="solid" class="w-8" />
							</button>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<button type="button" class="bcu-button bcu-button-sm variant-filled">sm</button>
<button type="button" class="bcu-button variant-filled">base</button>
<button type="button" class="bcu-button bcu-button-lg variant-filled">lg</button>
<button type="button" class="bcu-button bcu-button-xl variant-filled">xl</button>
`}
					/>
					<CodeBlock
						language="html"
						code={`
<button type="button" class="bcu-button-icon bcu-button-icon-sm variant-filled">(icon)</button>
<button type="button" class="bcu-button-icon variant-filled">(icon)</button>
<button type="button" class="bcu-button-icon bcu-button-icon-lg variant-filled">(icon)</button>
<button type="button" class="bcu-button-icon bcu-button-icon-xl variant-filled">(icon)</button>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Button Groups</h2>
			<p>
				Groups related anchors or buttons. Pairs with any variant style. Horizontal and vertical
				options are provided.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="bcu-button-group variant-filled">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<div class="bcu-button-group variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`}
					/>
					<!-- prettier-ignore -->
					<p>Customize the vertical dividers using <a href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind's arbitrary variant syntax</a>.</p>
					<CodeBlock
						language="html"
						code={`<div class="bcu-button-group variant-ghost-primary [&>*+*]:border-red-500">...</div>`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="bcu-button-group-vertical variant-filled">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<div class="bcu-button-group-vertical variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>SvelteKit Link Options</h2>
			<!-- prettier-ignore -->
			<p>
				While using native anchor elements, you can take advantage of <a href="https://kit.svelte.dev/docs/link-options" target="_blank" rel="noreferrer">SvelteKit's Link Options</a> such as a <em>prefetch</em>.
			</p>
			<CodeBlock
				language="html"
				code={`<a href="/" class="bcu-button variant-filled" data-sveltekit-preload-data="hover">Button</a>`}
			/>
		</section>
	</section>
</DocsShell>
