<script lang="ts">
	export let navLinks: { group: string; path: string; items?: { item: string; path: string }[] }[];

	// Stores
	import { storeCurrentUrl } from '../../stores';
	import { drawerStore } from '$lib/components/Navigation/Drawer/stores';

	// Props
	export let embedded = false;

	// ListItem Click Handler
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		drawerStore.close();
	}

	$: classesBase = `p-4 pb-20 space-y-4 overflow-y-auto ${$$props.class ?? ''}`;
	$: classesActive = (navLink: string, href: string) => {
		const splits = $storeCurrentUrl?.split('/');
		const navHref = splits?.at(-1);
		const navGroupLink = splits?.at(-2);

		if (splits?.at(-3) === 'docs') {
			// Check for deep docs example: /docs/contributing/requirements
			return navGroupLink === href ? 'bg-primary-active-token' : '';
		}

		return navLink === navGroupLink && navHref === href ? 'bg-primary-active-token' : '';
	};
</script>

<!-- Nav Links -->
<section class={classesBase}>
	{#each navLinks as navLink}
		<!-- Title -->
		<div class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">
			{navLink.group}
		</div>
		{#if navLink?.items && navLink?.items?.length > 0}
			<!-- Navigation List -->
			<nav class="bcu-docs-list-nav">
				<ul>
					{#each navLink.items as item}
						<li on:click={onListItemClick} on:keypress>
							<a
								href={`/${navLink.path}${item?.path ? '/' + item?.path : ''}`}
								class={classesActive(navLink.path, item.path)}
								data-sveltekit-preload-data="hover"
							>
								<span class="flex-auto">{item.item}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
		<!-- Divider -->
		<hr class="!my-6 opacity-50" />
	{/each}
</section>
