<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	// Docs
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import AppRailTile from '$lib/components/Layout/AppRail/AppRailTile.svelte';
	// Utilities
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAppRail from '$lib/components/Layout/AppRail/AppRail.svelte?raw&sveld';
	import sveldAppRailTile from '$lib/components/Layout/AppRail/AppRailTile.svelte?raw&sveld';

	// Stores
	const storeValue: Writable<number> = writable(1);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Rail',
		description: 'A tile that works well with <a href="/layout/app-rail">AppRail</a>',
		imports: ['AppRail'],
		source: 'components/Layout/AppRailTile',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ label: 'AppRailTile', sveld: sveldAppRailTile }],
		restProps: 'AppRailTile'
	};

	function logger(): void {
		console.log('App rail click event fired.');
	}
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<section class="space-y-4">
			<h2>Anchor Tiles</h2>
			<p>
				Use <code>tag="a"</code> to convert any tile to an anchor link, then append
				<em>href, target, rel</em>, and other attributes as needed.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="bg-surface-100-800-token overflow-hidden w-24">
						<AppRailTile
							tag="a"
							href="/layout/app-rail#anchor-tiles"
							label="Tile 1"
							class="bg-primary-hover-token text-token"
						>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<AppRailTile tag="a" href="/my/page/route">(icon)</AppRailTile>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Page State</h2>
			<!-- prettier-ignore -->
			<p>
				To set an active state for an anchor link, compare the tile <em>href</em> URL to the active page URL using
				<a href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">$page.url.pathname</a>. Then set a background color or other visual indicator via the Svelte class syntax.
			</p>
			<CodeBlock language="ts" code={`import { page } from '$app/stores';`} />
			<CodeBlock
				language="html"
				code={`
<AppRailTile tag="a" href={tileUrl} class="{tileUrl === $page.url.pathname ? '!bg-primary-500' : ''}">
    (icon)
</AppRailTile>
`}
			/>
		</section>
	</section>
</DocsShell>
