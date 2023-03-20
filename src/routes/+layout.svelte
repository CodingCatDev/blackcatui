<script lang="ts">
	// Core
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { storeCurrentUrl } from './stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

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
	import DocsSideNav from './(docs)/DocsSideNav/DocsSideNav.svelte';
	import DocsFooter from './(docs)/DocsFooter/DocsFooter.svelte';
	import AjAlt from './(docs)/DocsLogos/AJAlt.svelte';

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#bcu-app-shell-page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});
</script>

<!-- App Shell -->
<AppShell regionPage="overflow-y-scroll" slotPageFooter="pt-4 bg-surface-50-900-token">
	<!-- Header -->
	<svelte:fragment slot="bcu-app-shell-header">
		<AppBar shadow="shadow-lg">
			<svelte:fragment slot="bcu-app-bar-lead">
				<div class="flex items-center space-x-4">
					<!-- Hamburger Menu -->
					<!-- <button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
						<i class="fa-solid fa-bars text-xl" />
					</button> -->
					<!-- Logo -->
					<a
						class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden flex items-center"
						href="/"
						title="Go to Homepage"
					>
						<AjAlt />
						<div class="text-xl">BlackCatUI</div>
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="bcu-app-shell-sidebar-left">
		<DocsSideNav navLinks={data.navLinks} />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="bcu-app-shell-page-footer"><DocsFooter /></svelte:fragment>
</AppShell>
