<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun } from '@steeze-ui/heroicons';

	// Components
	import Avatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Badges',
		description: 'Provides a robust set of non-interactive badge styles.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/badges'],
		source: 'styles/elements/badges.css',
		classes: [
			['<code>bcu-badge</code>', '-', 'Provides the standard Badge style.'],
			['<code>bcu-badge-icon</code>', '-', 'Provides the Icon Badge style.']
		]
	};

	// Local
	let currentVariant = 'variant-filled';
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<span class="bcu-badge {currentVariant}">Badge</span>
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
				<CodeBlock language="html" code={`<span class="bcu-badge variant-filled">Badge</span>`} />
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<h2>Icon Badge</h2>
			<p>
				Replace <code>.badge</code> with <code>.bcu-badge-icon</code> for a badge based on an icon.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<span class="bcu-badge-icon variant-filled">
						<Icon src={Sun} class="w-4" />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<span class="bcu-badge-icon variant-filled"> (icon) </span>`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<section class="space-y-4">
				<h2>Overlapping</h2>
				<p>Use Tailwind styles to overlap another element with an Icon Badge.</p>
				<DocsPreview background="neutral">
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="relative inline-block">
							<span class="bcu-badge-icon variant-filled-warning absolute -top-0 -right-0 z-10"
								>2</span
							>
							<Avatar
								src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
								alt="Xena"
								class="bcu-avatar-xs"
							/>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock
							language="html"
							code={`
<div class="relative inline-block">
	<span class="bcu-badge-icon variant-filled-warning absolute -top-0 -right-0 z-10">2</span>
	<Avatar />
</div>
					`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</section>
		</section>
	</section>
</DocsShell>
