<script lang="ts">
	import Drawer from '$lib/components/Navigation/Drawer/Drawer.svelte';
	import DocsSideNav from '../DocsSideNav/DocsSideNav.svelte';
	import { drawerStore } from '$lib/components/Navigation/Drawer/stores';

	export let navLinks: { group: string; path: string; items?: { item: string; path: string }[] }[];

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<DocsSideNav embedded={true} {navLinks} />
	{:else if $drawerStore.id === 'demo'}
		<!-- Drawer Doc Demos -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				{#if $drawerStore.meta}<h2>{$drawerStore.meta}</h2>{/if}
				<h4>Drawer: <span class="capitalize">{$drawerStore.position}</span></h4>
				<span class="block">Tap outside the drawer to close.</span>
			</div>
		</div>
	{:else}
		<!-- Fallback Error -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				<p>Invalid <code>$drawerStore.id</code> provided.</p>
			</div>
		</div>
	{/if}
</Drawer>
