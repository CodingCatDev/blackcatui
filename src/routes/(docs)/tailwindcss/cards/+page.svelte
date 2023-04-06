<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';

	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	import { variants } from '../../DocsPreview/options';
	// Components
	import Avatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Cards',
		description: 'Provides container elements that wrap and separate content',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/cards'],
		source: 'styles/tailwindcss/cards.css',
		classes: [
			['<code>.bcu-card</code>', '-', 'Adds basic card styling to any block element.'],
			['<code>.bcu-card-header</code>', '-', 'The header region of the card.'],
			['<code>.bcu-card-footer</code>', '-', 'The footer region of the card.'],
			['<code>.bcu-card-hover</code>', '-', 'Provides an animated hover effect.'],
			[
				'<code>.variant-glass-[color]</code>',
				'primary | secondary | tertiary | success | warning | error | surface',
				'A semi-transparent glass variation.'
			]
		]
	};

	// Local
	let currentVariant = 'bg-initial';
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
					<!-- Minimal -->
					<div class="bcu-card {currentVariant} p-4 flex justify-center items-center">
						<span>Minimal</span>
					</div>
					<!-- Detailed -->
					<a class="bcu-card {currentVariant} card-hover overflow-hidden" href="/tailwindcss/cards">
						<header>
							<img
								src="https://media.codingcat.dev/image/upload/q_auto,f_auto/main-codingcatdev-photo/xena-blackcatui.jpg"
								class="bg-black/50 w-full bg-cover object-cover rounded"
								alt="Post"
							/>
						</header>
						<div class="p-4 space-y-4">
							<h6>Announcements</h6>
							<h3 data-toc-ignore>BlackCatUI is Awesome!</h3>
							<article>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur
									provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste
									beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
								</p>
							</article>
						</div>
						<hr class="opacity-50" />
						<footer class="p-4 flex justify-start items-center space-x-4">
							<Avatar src="https://i.pravatar.cc/160?img=48" width="w-8" />
							<div class="flex-auto flex justify-between items-center">
								<h6 class="font-bold">By Alex</h6>
								<small>On {new Date().toLocaleDateString()}</small>
							</div>
						</footer>
					</a>
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
				<CodeBlock language="html" code={`<div class="bcu-card p-4">Basic</div>`} />
				<CodeBlock language="html" code={`<a href="/" class="bcu-card p-4">Link</a>`} />
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<h2>Headers and Footers</h2>
			<p>
				Segment your card using the included <code>.bcu-card-header</code> and
				<code>.bcu-card-footer</code>
				classes.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="w-full text-token">
						<div class="bcu-card">
							<header class="bcu-card-header">
								<div class="bcu-card variant-soft p-4 text-center">Header</div>
							</header>
							<section class="p-4">
								<div class="bcu-card variant-soft p-4 text-center">Content</div>
							</section>
							<footer class="bcu-card-footer">
								<div class="bcu-card variant-soft p-4 text-center">Footer</div>
							</footer>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<div class="bcu-card">
	<header class="bcu-card-header">(header)</header>
	<section class="p-4">(content)</section>
	<footer class="bcu-card-footer">(footer)</footer>
</div>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Interactive</h2>
			<p>
				Anchor cards have an inherent hover style. Add <code>.bcu-card-hover</code> to provide an additional
				3D hover effect.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="w-full text-token">
						<a class="block bcu-card bcu-card-hover p-4 text-center" href="/tailwindcss/cards"
							>Hover Me!</a
						>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<a class="block bcu-card bcu-card-hover p-4" href="/tailwindcss/cards">Hover Me!</a>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</section>
</DocsShell>
