<script lang="ts">
	// Theme
	import '$lib/themes/theme-blackcatui.css';
	// BlackCatUI Stylesheets
	import '$lib/styles/all.css';
	// Global Stylesheets
	import '../app.postcss';

	// Components & Utilities
	import AppShell from '$lib/components/Layout/AppShell/AppShell.svelte';
</script>

<!-- App Shell -->
<AppShell regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header">Header</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">Sidebar</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">Footer</svelte:fragment>
</AppShell>
