<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, Swatch } from '@steeze-ui/heroicons';
	import { Discord, Github } from '@steeze-ui/simple-icons';

	// Types
	// import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	import type { DrawerSettings } from '$lib/components/Navigation/Drawer/types';

	// Components
	import AppBar from '$lib/components/Layout/AppBar/AppBar.svelte';
	// Utilities
	import LightSwitch from '$lib/components/Utilities/LightSwitch/LightSwitch.svelte';
	import { popup } from '$lib/components/Utilities/Popup/popup';
	// import { modalStore } from '$lib/utilities/Modal/stores';

	// Stores
	import { storeTheme } from '../../stores';
	import AjAlt from '../DocsLogos/AJAlt.svelte';
	import { drawerStore } from '$lib/components/Navigation/Drawer/stores';

	// Local
	let isOsMac = false;

	// Set Search Shortkey Keys
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	// // Search
	// function triggerSearch(): void {
	// 	const d: ModalSettings = {
	// 		type: 'component',
	// 		component: 'modalSearch',
	// 		position: 'item-start'
	// 	};
	// 	modalStore.trigger(d);
	// }

	// // Keyboard Shortcut (CTRL/⌘+K) to Focus Search
	// function onWindowKeydown(e: KeyboardEvent): void {
	// 	if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
	// 		// Prevent default browser behavior of focusing URL bar
	// 		e.preventDefault();
	// 		// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
	// 		$modalStore.length ? modalStore.close() : triggerSearch();
	// 	}
	// }

	const themes = [
		{ type: 'blackcatui', name: 'BlackCatUI', icon: '😸' },
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' }
	];

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				const theme = result.data?.theme as string;
				storeTheme.set(theme);
			}
		};
	};
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<!-- <svelte:window on:keydown|stopPropagation={onWindowKeydown} /> -->

<AppBar shadow="shadow-xl">
	<svelte:fragment slot="bcu-app-bar-lead">
		<div class="flex items-center gap-2">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="w-10 lg:!hidden" aria-label="Open Drawer">
				<Icon src={Bars3} theme="solid" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-12 lg:w-16 overflow-hidden" href="/" title="Go to Homepage">
				<AjAlt />
			</a>
			<!-- Title -->
			<a
				class="text-primary-700 dark:text-primary-500 hover:brightness-110 hidden sm:block sm:text-xl md:text-3xl"
				href="/"
			>
				BlackCatUI
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-trail">
		<!-- Theme -->
		<div>
			<!-- trigger -->
			<button
				class="bcu-button hover:variant-soft-primary"
				aria-label="Popup Showing Theme Options"
				use:popup={{ event: 'click', target: 'theme' }}
			>
				<Icon src={Swatch} theme="solid" class="w-8" />
				<span class="hidden md:inline-block">Theme</span>
			</button>
			<!-- popup -->
			<div class="bcu-card p-4 w-60 shadow-xl" data-popup="theme">
				<div class="space-y-4">
					<section class="flex justify-between items-center">
						<h6>Mode</h6>
						<LightSwitch />
					</section>
					<nav class="bcu-docs-list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
						<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
							<ul>
								{#each themes as { icon, name, type }}
									<li>
										<button
											class="option w-full h-full"
											type="submit"
											name="theme"
											value={type}
											class:bg-primary-active-token={$storeTheme === type}
										>
											<span>{icon}</span>
											<span>{name}</span>
										</button>
									</li>
								{/each}
							</ul>
						</form>
					</nav>
				</div>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="hidden sm:inline-flex sm:gap-2">
			<a class="bcu-button-icon hover:variant-soft-primary" href="https://discord.gg/vM2bagU" target="_blank" rel="noreferrer">
				<Icon src={Discord} theme="solid" />
			</a>
			<a class="bcu-button-icon hover:variant-soft-primary" href="https://github.com/CodingCatDev/blackcatui" target="_blank" rel="noreferrer">
				<Icon src={Github} theme="solid" />
			</a>
		</section>

		<!-- Search -->
		<!-- <div class="md:inline md:ml-4">
			<button
				class="bcu-button p-2 px-4 space-x-4 variant-soft hover:variant-soft-primary"
				on:click={triggerSearch}
			>
				<i class="fa-solid fa-magnifying-glass" />
				<span class="hidden md:inline-block badge variant-soft">{isOsMac ? '⌘' : 'Ctrl'}+K</span>
			</button>
		</div> -->

		<!-- Sponsor -->
		<div>
			<!-- trigger -->
			<a
				class="bcu-button py-1.5 variant-soft hover:variant-soft-primary hidden md:inline-block"
				href="https://github.com/sponsors/codingcatdev"
				target="_blank"
				rel="noreferrer"
			>
				<i class="fa-solid fa-heart" />
				<span class="hidden md:inline-block">Sponsor</span>
			</a>
		</div>
	</svelte:fragment>
</AppBar>
