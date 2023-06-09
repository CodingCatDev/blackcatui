<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';

	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	import Switch from '$lib/components/Inputs/Switch/Switch.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Placeholders',
		description: 'Provides "skeleton" placeholders that can display while content loads.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/placeholders'],
		source: 'styles/elements/placeholders.css',
		classes: [
			['<code>placeholder</code>', '-', 'Applies the default placeholder style.'],
			['<code>placeholder-circle</code>', '-', 'Applies the circular placeholder style.']
		]
	};

	// Local
	let animate = true;
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<section class="card w-full">
					<div class="card-header flex justify-between items-center">
						<div class="flex justify-center items-center space-x-4" class:animate-pulse={animate}>
							<div class="placeholder-circle w-16" />
							<div class="placeholder-circle w-14" />
							<div class="placeholder-circle w-10" />
						</div>
					</div>
					<div class="p-4 space-y-4" class:animate-pulse={animate}>
						<div class="placeholder" />
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="placeholder" />
						<div class="placeholder" />
					</div>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="text-center">
					<Switch bind:checked={animate} name="animated" accent="bg-secondary-500">Animated</Switch>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="html" code={`<div class="placeholder" />`} />
			</svelte:fragment>
		</DocsPreview>

		<p>
			Apply the <code>.placeholder</code> class to any <em>div</em> element.
		</p>
		<!-- Layout -->
		<div class="space-y-4">
			<h2>Layout</h2>
			<!-- prettier-ignore -->
			<p>
				Use the <a href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind column and gap classes</a> to adjust column amount and gap spacing.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<section class="card w-full">
						<div class="p-4 space-y-4" class:animate-pulse={animate}>
							<div class="placeholder" />
							<div class="grid grid-cols-3 gap-8">
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
							</div>
							<div class="grid grid-cols-4 gap-4">
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
							</div>
						</div>
					</section>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="placeholder" />
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</div>
</section>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Circular -->
		<div class="space-y-4">
			<h2>Circular</h2>
			<p>
				Apply the <code>.placeholder-circle</code> class and set a width to define the diameter.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="placeholder-circle w-16" class:animate-pulse={animate} />
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="html" code={`<div class="placeholder-circle w-16" />`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Animated -->
		<div class="space-y-4">
			<h2>Animated</h2>
			<p>Apply the <code>.animate-pulse</code> utility class provided by Tailwind.</p>
			<CodeBlock language="html" code={`<div class="placeholder animate-pulse" />`} />
		</div>
	</section>
</DocsShell>
