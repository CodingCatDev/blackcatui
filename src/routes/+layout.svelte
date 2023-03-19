<script lang="ts">
	// Depedency: Highlight JS
	import hljs from 'highlight.js';
	import '$lib/styles/highlight-js.css'; // was: 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/components/DataDisplay/CodeBlock/stores';
	storeHighlightJs.set(hljs);

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
<AppShell regionPage="overflow-y-scroll" slotPageFooter="pt-4 bg-surface-50-900-token">
	<!-- Header -->
	<svelte:fragment slot="bcu-app-shell-header">
		<AppBar shadow="shadow-lg">Header</AppBar>
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="bcu-app-shell-sidebar-left">Sidebar</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="bcu-app-shell-page-footer">Footer</svelte:fragment>
</AppShell>
