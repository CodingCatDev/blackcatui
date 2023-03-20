<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, type SubmitFunction } from '$app/forms';

	// Types
	// import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	// import type { DrawerSettings } from '$lib/utilities/Drawer/types';

	// Docs
	import DocsIcon from '../DocsLogos/AJAlt.svelte';

	// Components
	import AppBar from '$lib/components/Layout/AppBar/AppBar.svelte';
	// Utilities
	import LightSwitch from '$lib/components/Utilities/LightSwitch/LightSwitch.svelte';
	import { popup } from '$lib/components/Utilities/Popup/popup';
	// import { modalStore } from '$lib/utilities/Modal/stores';

	// Stores
	import { storeTheme } from '../../stores';
	import AjAlt from '../DocsLogos/AJAlt.svelte';
	// import { drawerStore } from '$lib/utilities/Drawer/stores';

	// Local
	let isOsMac = false;

	// Set Search Shortkey Keys
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// // Drawer Handler
	// function drawerOpen(): void {
	// 	const s: DrawerSettings = { id: 'doc-sidenav' };
	// 	drawerStore.open(s);
	// }

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
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<!-- <button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button> -->
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<AjAlt />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-trail">
		<!-- Explore -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button
				class="btn hover:variant-soft-primary"
				use:popup={{ event: 'click', target: 'features' }}
			>
				<span>Explore</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<!-- prettier-ignore -->
			<div class="card p-4 w-60 shadow-xl" data-popup="features">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/">
								<span class="w-6 text-center">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
										<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
										<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
									</svg>
								  </span>
								<span>Homepage</span>
							</a>
							<a href="/docs/get-started">
								<span class="w-6 text-center">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
										<path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
									  </svg>									  
								</span>
								<span>Documentation</span>
							</a>
							<a href="https://codingcat.dev/blog" target="_blank" rel="noreferrer">
								<span class="w-6 text-center">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
										<path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
									  </svg>
									  
								</span>
								<span>Blog</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Theme -->
		<div>
			<!-- trigger -->
			<button
				class="btn hover:variant-soft-primary"
				use:popup={{ event: 'click', target: 'theme' }}
			>
				<i class="fa-solid fa-palette text-lg md:hidden" />
				<span class="hidden md:inline-block">Theme</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="theme">
				<div class="space-y-4">
					<section class="flex justify-between items-center">
						<h6>Mode</h6>
						<LightSwitch />
					</section>
					<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
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
					<div>
						<a class="btn variant-ghost-surface w-full" href="/docs/generator">Create a Theme</a>
					</div>
				</div>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="hidden sm:inline-flex space-x-4">
			<a class="btn-icon hover:variant-soft-primary" href="https://discord.gg/vM2bagU" target="_blank" rel="noreferrer">
				<svg viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M26.0015 1.9529C24.0021 1.03845 21.8787 0.37198 19.6623 0C19.3833 0.48048 19.0733 1.13144 18.8563 1.64292C16.4989 1.30193 14.1585 1.30193 11.8336 1.64292C11.6166 1.13144 11.2911 0.48048 11.0276 0C8.79575 0.37198 6.67235 1.03845 4.6869 1.9529C0.672601 7.8736 -0.41235 13.6548 0.130124 19.3585C2.79599 21.2959 5.36889 22.4739 7.89682 23.2489C8.51679 22.4119 9.07477 21.5129 9.55525 20.5675C8.64079 20.2265 7.77283 19.808 6.93587 19.312C7.15286 19.1571 7.36986 18.9866 7.57135 18.8161C12.6241 21.1255 18.0969 21.1255 23.0876 18.8161C23.3046 18.9866 23.5061 19.1571 23.7231 19.312C22.8861 19.808 22.0182 20.2265 21.1037 20.5675C21.5842 21.5129 22.1422 22.4119 22.7621 23.2489C25.2885 22.4739 27.8769 21.2959 30.5288 19.3585C31.1952 12.7559 29.4733 7.0212 26.0015 1.9529ZM10.2527 15.8402C8.73376 15.8402 7.49382 14.4608 7.49382 12.7714C7.49382 11.082 8.70276 9.7025 10.2527 9.7025C11.7871 9.7025 13.0425 11.082 13.0115 12.7714C13.0115 14.4608 11.7871 15.8402 10.2527 15.8402ZM20.4373 15.8402C18.9183 15.8402 17.6768 14.4608 17.6768 12.7714C17.6768 11.082 18.8873 9.7025 20.4373 9.7025C21.9717 9.7025 23.2271 11.082 23.1961 12.7714C23.1961 14.4608 21.9872 15.8402 20.4373 15.8402Z" fill="currentColor"/>
				</svg>
			</a>
			<a class="btn-icon hover:variant-soft-primary" href="https://github.com/CodingCatDev/blackcatui" target="_blank" rel="noreferrer">
				<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
			</a>
		</section>

		<!-- Search -->
		<!-- <div class="md:inline md:ml-4">
			<button
				class="btn p-2 px-4 space-x-4 variant-soft hover:variant-soft-primary"
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
				class="btn py-1.5 variant-soft hover:variant-soft-primary hidden sm:inline-block"
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
