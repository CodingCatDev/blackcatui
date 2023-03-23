<script lang="ts">
	// Core
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { storeCurrentUrl, storeTheme } from './stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	// Depedency: Highlight JS
	import hljs from 'highlight.js';
	import '$lib/styles/highlight-js.css'; // was: 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/components/DataDisplay/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	// Depedency: Floating UI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '$lib/components/Utilities/Popup/popup';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Global Stylesheets
	import '../app.postcss';

	// Components & Utilities
	import AppShell from '$lib/components/Layout/AppShell/AppShell.svelte';
	import DocsSideNav from './(docs)/DocsSideNav/DocsSideNav.svelte';
	import DocsFooter from './(docs)/DocsFooter/DocsFooter.svelte';
	import DocsAppBar from './(docs)/DocsAppBar/DocsAppBar.svelte';
	import DocsDrawer from './(docs)/DocsDrawer/DocsDrawer.svelte';
	import { browser } from '$app/environment';

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storeTheme);
	}
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
	$: ({ currentTheme } = data);

	// Modals
	import Modal from '$lib/components/Utilities/Modal/Modal.svelte';
	import ModalExampleEmbed from './(docs)/utilities/modal/examples/ModalExampleEmbed.svelte';
	import ModalExampleImage from './(docs)/utilities/modal/examples/ModalExampleImage.svelte';
	import ModalExampleList from './(docs)/utilities/modal/examples/ModalExampleList.svelte';
	import type { ModalComponent } from '$lib/components/Utilities/Modal/types';

	// Registered list of Components for Modals
	const modalComponentRegistry: Record<string, ModalComponent> = {
		// modalSearch: { ref: DocsSearch },
		exampleEmbed: { ref: ModalExampleEmbed },
		exampleImage: { ref: ModalExampleImage },
		exampleList: { ref: ModalExampleList }
	};
</script>

<svelte:head>
	<!-- Select Preset Theme CSS DO NOT REMOVE ESCAPES-->
	{@html `\<style\>${currentTheme}}\</style\>`}
</svelte:head>

<!-- Overlays -->
<DocsDrawer navLinks={data.navLinks} />
<Modal components={modalComponentRegistry} />

<!-- App Shell -->
<AppShell regionPage="overflow-y-scroll" slotPageFooter="pt-4 bg-surface-50-900-token">
	<!-- Header -->
	<svelte:fragment slot="bcu-app-shell-header">
		<DocsAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="bcu-app-shell-sidebar-left">
		<DocsSideNav class="hidden lg:grid w-72 overflow-hidden" navLinks={data.navLinks} />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="bcu-app-shell-page-footer"><DocsFooter /></svelte:fragment>
</AppShell>
