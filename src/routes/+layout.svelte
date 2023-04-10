<script lang="ts">
	// Core
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { storeCurrentUrl, storeTheme } from './stores';
	import { storePreview } from './(docs)/DocsThemer/stores';
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
	storePreview.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storePreview ? 'generator' : $storeTheme);
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

	$: slotSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';
	$: ({ currentTheme } = data);

	// Modals
	import Modal from '$lib/components/Utilities/Modal/Modal.svelte';
	import ModalExampleEmbed from './(docs)/utilities/modal/examples/ModalExampleEmbed.svelte';
	import ModalExampleImage from './(docs)/utilities/modal/examples/ModalExampleImage.svelte';
	import ModalExampleList from './(docs)/utilities/modal/examples/ModalExampleList.svelte';
	import type { ModalComponent } from '$lib/components/Utilities/Modal/types';

	// Toast
	import Toast from '$lib/components/Feedback/Toast/Toast.svelte';

	// Registered list of Components for Modals
	const modalComponentRegistry: Record<string, ModalComponent> = {
		// modalSearch: { ref: DocsSearch },
		exampleEmbed: { ref: ModalExampleEmbed },
		exampleImage: { ref: ModalExampleImage },
		exampleList: { ref: ModalExampleList }
	};

	// SEO Metatags
	const metaDefaults = {
		title: 'BlackCatUI — UI Toolkit for Svelte + Tailwind',
		description:
			'BlackCatUI is a purrfect UI Toolkit for building reactive interfaces using Svelte and Tailwind.',
		image:
			'https://media.codingcat.dev/image/upload/f_jpg/dev-codingcatdev-photo/v60h88eohd7ufghkspgo'
	};
	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};
	page.subscribe((page) => {
		// Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		// Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;
	});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta
		name="keywords"
		content="svelte, sveltekit, web, ui, components, reactive, accessibility, typescript, css, open source"
	/>
	<meta name="theme-color" content="#313276" />
	<meta name="author" content="CodingCatDev, LLC" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="BlackCatUI" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.blackcatui.com{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1920" />
	<meta property="og:image:height" content="1080" />

	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@CodingCatDev" />
	<meta name="twitter:creator" content="@CodingCatDev" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />

	<!-- Select Preset Theme CSS DO NOT REMOVE ESCAPES-->
	{@html `\<style\>${currentTheme}}\</style\>`}
</svelte:head>

<!-- Overlays -->
<DocsDrawer navLinks={data.navLinks} />
<Modal components={modalComponentRegistry} />
<Toast />

<!-- App Shell -->
<AppShell
	{slotSidebarLeft}
	regionPage="overflow-y-scroll"
	slotPageFooter="pt-4 bg-surface-50-900-token"
>
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
