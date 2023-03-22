<script lang="ts">
	// Slots
	/**
	 * @slot bcu-docs-header - Base information, should be common style
	 * @slot bcu-docs-detail - Any information to further show documentation
	 * @slot bcu-docs-aside - advertising and page navigation
	 */

	import TableOfContents from '$lib/components/DataDisplay/TableOfContents/TableOfContents.svelte';
	// Props
	export let sidebar: boolean = true;
	export let tocKey: any = undefined;

	// Classes
	const cBase = 'page-padding flex items-start gap-10';
	const cColLeft = 'page-container-aside';
	const cColRight = 'sticky top-10 hidden xl:block space-y-4 w-72';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesColLeft = `${cColLeft}`;
	$: classesColRight = `${cColRight}`;
</script>

<section class="bcu-docs-layout {classesBase}">
	<div class="bcu-docs-layout-content {classesColLeft}">
		{#if $$slots['bcu-docs-header']}
			<div class="bcu-docs-header"><slot name="bcu-docs-header" /></div>
		{/if}
		{#if $$slots['bcu-docs-detail']}
			<div class="bcu-docs-detail"><slot name="bcu-docs-detail" /></div>
		{/if}
	</div>
	<!-- Aside -->
	{#if sidebar}
		<aside class="bcu-docs-layout-aside {classesColRight}">
			{#if $$slots['bcu-docs-aside']}
				<div class="bcu-docs-slot-header"><slot name="bcu-docs-aside" /></div>
			{/if}
			<!-- Table of Contents -->
			{#key tocKey}
				<TableOfContents target=".bcu-docs-detail" />
			{/key}
		</aside>
	{/if}
</section>
