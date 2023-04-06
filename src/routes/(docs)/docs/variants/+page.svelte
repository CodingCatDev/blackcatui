<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	// Utilities
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header">
		<div class="space-y-4">
			<h1>Themes</h1>
			<p>Learn more about customizing BlackCatUI themes.</p>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<section class="space-y-4">
				<h2>Usage</h2>
				<p>
					Implement using <code>.variant-[style]-[color]</code>. Automatically applies an accessible
					text or SVG fill color.
				</p>
				<CodeBlock language="html" code={`<div class="variant-filled-primary">primary</div>`} />
			</section>
			<!-- Filled -->
			<section class="space-y-4">
				<h2>Filled</h2>
				<DocsPreview background="neutral">
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
							<div class="bcu-card variant-filled-primary p-4 capitalize">primary</div>
							<div class="bcu-card variant-filled-secondary p-4 capitalize">secondary</div>
							<div class="bcu-card variant-filled-tertiary p-4 capitalize">tertiary</div>
							<div class="bcu-card variant-filled-success p-4 capitalize">success</div>
							<div class="bcu-card variant-filled-warning p-4 capitalize">warning</div>
							<div class="bcu-card variant-filled-error p-4 capitalize">error</div>
							<div class="col-span-3 bcu-card variant-filled-surface p-4 capitalize">surface</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock language="html" code={`<div class="variant-filled-primary">primary</div>`} />
						<CodeBlock
							language="html"
							code={`<div class="variant-filled-secondary">secondary</div>`}
						/>
						<CodeBlock
							language="html"
							code={`<div class="variant-filled-tertiary">tertiary</div>`}
						/>
						<CodeBlock language="html" code={`<div class="variant-filled-success">success</div>`} />
						<CodeBlock language="html" code={`<div class="variant-filled-warning">warning</div>`} />
						<CodeBlock language="html" code={`<div class="variant-filled-error">error</div>`} />
						<CodeBlock language="html" code={`<div class="variant-filled-surface">surface</div>`} />
					</svelte:fragment>
				</DocsPreview>
			</section>
			<!-- Ghost -->
			<section class="space-y-4">
				<h2>Ghost</h2>
				<DocsPreview background="neutral">
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
							<div class="bcu-card variant-ghost-primary p-4 capitalize">primary</div>
							<div class="bcu-card variant-ghost-secondary p-4 capitalize">secondary</div>
							<div class="bcu-card variant-ghost-tertiary p-4 capitalize">tertiary</div>
							<div class="bcu-card variant-ghost-success p-4 capitalize">success</div>
							<div class="bcu-card variant-ghost-warning p-4 capitalize">warning</div>
							<div class="bcu-card variant-ghost-error p-4 capitalize">error</div>
							<div class="col-span-3 bcu-card variant-ghost-surface p-4 capitalize">surface</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock language="html" code={`<div class="variant-ghost-primary">primary</div>`} />
						<CodeBlock
							language="html"
							code={`<div class="variant-ghost-secondary">secondary</div>`}
						/>
						<CodeBlock
							language="html"
							code={`<div class="variant-ghost-tertiary">tertiary</div>`}
						/>
						<CodeBlock language="html" code={`<div class="variant-ghost-success">success</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ghost-warning">warning</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ghost-error">error</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ghost-surface">surface</div>`} />
					</svelte:fragment>
				</DocsPreview>
			</section>
			<!-- Soft -->
			<section class="space-y-4">
				<h2>Soft</h2>
				<DocsPreview background="neutral">
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
							<div class="bcu-card variant-soft-primary p-4 capitalize">primary</div>
							<div class="bcu-card variant-soft-secondary p-4 capitalize">secondary</div>
							<div class="bcu-card variant-soft-tertiary p-4 capitalize">tertiary</div>
							<div class="bcu-card variant-soft-success p-4 capitalize">success</div>
							<div class="bcu-card variant-soft-warning p-4 capitalize">warning</div>
							<div class="bcu-card variant-soft-error p-4 capitalize">error</div>
							<div class="col-span-3 bcu-card variant-soft-surface p-4 capitalize">surface</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock language="html" code={`<div class="variant-soft-primary">primary</div>`} />
						<CodeBlock
							language="html"
							code={`<div class="variant-soft-secondary">secondary</div>`}
						/>
						<CodeBlock language="html" code={`<div class="variant-soft-tertiary">tertiary</div>`} />
						<CodeBlock language="html" code={`<div class="variant-soft-success">success</div>`} />
						<CodeBlock language="html" code={`<div class="variant-soft-warning">warning</div>`} />
						<CodeBlock language="html" code={`<div class="variant-soft-error">error</div>`} />
						<CodeBlock language="html" code={`<div class="variant-soft-surface">surface</div>`} />
					</svelte:fragment>
				</DocsPreview>
			</section>
			<!-- Ringed -->
			<section class="space-y-4">
				<h2>Ringed</h2>
				<DocsPreview background="neutral">
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
							<div class="bcu-card variant-ringed-primary p-4 capitalize">primary</div>
							<div class="bcu-card variant-ringed-secondary p-4 capitalize">secondary</div>
							<div class="bcu-card variant-ringed-tertiary p-4 capitalize">tertiary</div>
							<div class="bcu-card variant-ringed-success p-4 capitalize">success</div>
							<div class="bcu-card variant-ringed-warning p-4 capitalize">warning</div>
							<div class="bcu-card variant-ringed-error p-4 capitalize">error</div>
							<div class="col-span-3 bcu-card variant-ringed-surface p-4 capitalize">surface</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock language="html" code={`<div class="variant-ringed-primary">primary</div>`} />
						<CodeBlock
							language="html"
							code={`<div class="variant-ringed-secondary">secondary</div>`}
						/>
						<CodeBlock
							language="html"
							code={`<div class="variant-ringed-tertiary">tertiary</div>`}
						/>
						<CodeBlock language="html" code={`<div class="variant-ringed-success">success</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ringed-warning">warning</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ringed-error">error</div>`} />
						<CodeBlock language="html" code={`<div class="variant-ringed-surface">surface</div>`} />
					</svelte:fragment>
				</DocsPreview>
			</section>
			<!-- Glass -->
			<section class="space-y-4">
				<h2>Glass</h2>
				<p>
					Adds a frosted glass style effect. Perfect for overlapping busy or animated backgrounds.
				</p>
				<DocsPreview background="neutral" regionViewport="!p-0" swatchButton={false}>
					<svelte:fragment slot="bcu-previewer-preview">
						<div
							class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold p-4 md:p-10 text-white"
							style="background: url('https://media.codingcat.dev/image/upload/q_auto,f_auto/main-codingcatdev-photo/xena-blackcatui.jpg') center center no-repeat; background-size: cover;"
						>
							<div class="bcu-card variant-glass-primary p-4 capitalize">primary</div>
							<div class="bcu-card variant-glass-secondary p-4 capitalize">secondary</div>
							<div class="bcu-card variant-glass-tertiary p-4 capitalize">tertiary</div>
							<div class="bcu-card variant-glass-success p-4 capitalize">success</div>
							<div class="bcu-card variant-glass-warning p-4 capitalize">warning</div>
							<div class="bcu-card variant-glass-error p-4 capitalize">error</div>
							<div class="col-span-3 bcu-card variant-glass-surface p-4 capitalize">surface</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock language="html" code={`<div class="variant-glass-primary">primary</div>`} />
						<CodeBlock
							language="html"
							code={`<div class="variant-glass-secondary">secondary</div>`}
						/>
						<CodeBlock
							language="html"
							code={`<div class="variant-glass-tertiary">tertiary</div>`}
						/>
						<CodeBlock language="html" code={`<div class="variant-glass-success">success</div>`} />
						<CodeBlock language="html" code={`<div class="variant-glass-warning">warning</div>`} />
						<CodeBlock language="html" code={`<div class="variant-glass-error">error</div>`} />
						<CodeBlock language="html" code={`<div class="variant-glass-surface">surface</div>`} />
					</svelte:fragment>
				</DocsPreview>
			</section>
		</section>
	</svelte:fragment>
</DocsLayout>
