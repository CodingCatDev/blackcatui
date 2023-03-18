<script lang="ts">
	// Theme
	import '$lib/themes/theme-blackcatui.css';
	// BlackCatUI Stylesheets
	import '$lib/styles/all.css';
	// Global Stylesheets
	import '../app.postcss';

	// Components & Utilities
	import AppShell from '$lib/components/Layout/AppShell/AppShell.svelte';
	import AppBar from '$lib/components/Layout/AppBar/AppBar.svelte';
</script>

<!-- App Shell -->
<AppShell regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header"><AppBar shadow="shadow-xl">Header</AppBar></svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">Sidebar</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">Footer</svelte:fragment>
</AppShell>
