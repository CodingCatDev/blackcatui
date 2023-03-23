<script lang="ts">
	// Docs
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import AppBar from '$lib/components/Layout/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAppBar from '$lib/components/Layout/AppBar/AppBar.svelte?raw&sveld';
	import AjAlt from '../../DocsLogos/AJAlt.svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3 } from '@steeze-ui/heroicons';
	import { Discord, Github, Twitter } from '@steeze-ui/simple-icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Bar',
		description:
			'A header element for the top of your page layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.',
		imports: ['AppBar'],
		source: 'components/Layout/AppBar',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
		components: [{ sveld: sveldAppBar }]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview regionViewport="!text-current">
			<svelte:fragment slot="bcu-previewer-preview">
				<AppBar class="w-full">
					<svelte:fragment slot="bcu-app-bar-lead">
						<span class="lg:!ml-0 w-12 lg:w-16 overflow-hidden">
							<AjAlt />
						</span>
					</svelte:fragment>
					<svelte:fragment slot="bcu-app-bar-trail">
						<div class="flex gap-2">
							<Icon src={Github} theme="solid" class="w-6" />
							<Icon src={Discord} theme="solid" class="w-6" />
							<Icon src={Twitter} theme="solid" class="w-6" />
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-app-bar-headline">
						<h1>Headline</h1>
					</svelte:fragment>
				</AppBar>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="html"
					code={`
<AppBar>
	<svelte:fragment slot="bcu-app-bar-lead">(icon)</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-trail">(actions)</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-headline">(headline)</svelte:fragment>
</AppBar>
`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<p>
			App Bars can be generated with a number of different configurations by mixing and matching
			available slots and props.
		</p>
		<!-- Single Row and Title -->
		<section class="space-y-4">
			<h2>Single Row and Title</h2>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="bcu-previewer-preview">
					<AppBar class="w-full">
						<svelte:fragment slot="bcu-app-bar-lead">
							<span class="lg:!ml-0 w-12 lg:w-16 overflow-hidden">
								<AjAlt />
							</span>
						</svelte:fragment>
						<h2 data-bcu-toc-ignore>Title</h2>
						<svelte:fragment slot="bcu-app-bar-trail">
							<div class="flex gap-2">
								<Icon src={Github} theme="solid" class="w-6" />
								<Icon src={Discord} theme="solid" class="w-6" />
								<Icon src={Twitter} theme="solid" class="w-6" />
							</div>
						</svelte:fragment>
					</AppBar>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<AppBar>
	<svelte:fragment slot="bcu-app-bar-lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="bcu-app-bar-trail">(actions)</svelte:fragment>
</AppBar>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Title Only -->
		<section class="space-y-4">
			<h2>Title Only</h2>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="bcu-previewer-preview">
					<AppBar class="w-full"><h2 data-bcu-toc-ignore>Title</h2></AppBar>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="html" code={`<AppBar>(title)</AppBar>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Using Grid Layout</h2>
			<!-- prettier-ignore -->
			<p>
				The main row utilizes a grid-based layout. Utilize Tailwind's <a href="https://tailwindcss.com/docs/grid-column" target="_blank" rel="noreferrer">grid column</a> utility classes to control column width. Then use
				<a href="https://tailwindcss.com/docs/place-content" target="_blank" rel="noreferrer">place settings</a> to adjust the placement of the slot contents.
			</p>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="bcu-previewer-preview">
					<AppBar
						gridColumns="grid-cols-3"
						slotDefault="place-self-center"
						slotTrail="place-content-end"
						class="w-full"
					>
						<svelte:fragment slot="bcu-app-bar-lead">
							<Icon src={Bars3} theme="solid" class="w-6" />
						</svelte:fragment>
						<h2 data-bcu-toc-ignore>Title</h2>
						<svelte:fragment slot="bcu-app-bar-trail">
							<Icon src={Github} theme="solid" class="w-6" />
						</svelte:fragment>
					</AppBar>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="bcu-app-bar-lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="bcu-app-bar-trail">(actions)</svelte:fragment>
</AppBar>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<p>
				The example above provides an even three column layout with the title centered and actions
				right-aligned.
			</p>
		</section>
	</section>
</DocsShell>
