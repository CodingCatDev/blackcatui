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
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord text-lg" />
			</a>
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github text-lg" />
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
			<button
				class="btn py-1.5 variant-soft hover:variant-soft-primary hidden sm:inline-block"
				use:popup={{ event: 'click', target: 'sponsor' }}
			>
				<i class="fa-solid fa-heart" />
				<span class="hidden md:inline-block">Sponsor</span>
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="sponsor">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-solid fa-mug-saucer" /></span>
								<span>Ko-Fi</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-github" /></span>
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-patreon" /></span>
								<span>Patreon</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>
	</svelte:fragment>
</AppBar>
