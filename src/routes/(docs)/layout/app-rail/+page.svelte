<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	// Docs
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import AppRail from '$lib/components/Layout/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/Layout/AppRail/AppRailTile.svelte';
	// Utilities
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAppRail from '$lib/components/Layout/AppRail/AppRail.svelte?raw&sveld';

	// Stores
	const storeValue: Writable<number> = writable(1);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Rail',
		description:
			'A side navigation rail component that utliizes <a href="/layout/app-rail-tile">AppRailTile</a>',
		imports: ['AppRail'],
		source: 'components/Layout/AppRail',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ label: 'AppRail', sveld: sveldAppRail }],
		restProps: 'AppRailTile'
	};

	function logger(): void {
		console.log('App rail click event fired.');
	}
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview regionViewport="!text-current">
			<svelte:fragment slot="bcu-previewer-preview">
				<div
					class="card bg-surface-50-900-token rounded-none h-[480px] grid grid-cols-[auto_1fr] w-full"
				>
					<AppRail selected={storeValue}>
						<!-- Lead -->
						<svelte:fragment slot="bcu-app-rail-lead">
							<AppRailTile on:click={logger}>
								<i class="fa-solid fa-bars text-2xl" />
							</AppRailTile>
						</svelte:fragment>
						<!-- Default -->
						<AppRailTile label="Tile 1" value={1}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 2" value={2}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 3" value={3}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<!-- Trail -->
						<svelte:fragment slot="bcu-app-rail-trail">
							<AppRailTile
								tag="a"
								href="https://github.com/"
								target="_blank"
								title="Trail slot tile."
							>
								<i class="fa-brands fa-github text-2xl" />
							</AppRailTile>
						</svelte:fragment>
					</AppRail>
					<div class="grid place-content-center place-items-center">
						<span class="badge variant-soft">Selected Tile: {$storeValue}</span>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="ts"
					code={`
const storeValue: Writable<number> = writable(0);
`}
				/>
				<CodeBlock
					language="html"
					code={`
<AppRail selected={storeValue}>
	<AppRailTile label="Tile 1" value={0}>(icon)</AppRailTile>
	<AppRailTile label="Tile 2" value={1}>(icon)</AppRailTile>
	<AppRailTile label="Tile 3" value={2}>(icon)</AppRailTile>
</AppRail>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</section>
</DocsShell>
