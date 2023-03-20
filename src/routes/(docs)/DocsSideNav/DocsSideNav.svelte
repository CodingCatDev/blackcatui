<script lang="ts">
	import { storeCurrentUrl } from '../../stores';

	export let navLinks: [{ group: string; path: string; items?: [{ item: string; path: string }] }];
	$: classesActive = (href: string) =>
		$storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '';
</script>

<!-- Nav Links -->
<section class="p-4 pb-20 space-y-4 overflow-y-auto">
	{#each navLinks as navLink}
		<!-- Title -->
		<div class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">
			{navLink.group}
		</div>
		{#if navLink?.items && navLink?.items?.length > 0}
			<!-- Navigation List -->
			<nav class="list-nav">
				<ul>
					{#each navLink.items as item}
						<a
							href={`/${navLink.path}${item?.path ? '/' + item?.path : ''}`}
							class={classesActive(item.path)}
							data-sveltekit-preload-data="hover"
						>
							<span class="flex-auto">{item.item}</span>
						</a>
					{/each}
				</ul>
			</nav>
		{/if}
		<!-- Divider -->
		<hr class="!my-6 opacity-50" />
	{/each}
</section>
