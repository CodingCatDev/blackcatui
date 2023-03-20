<script lang="ts">
	// Slots
	/**
	 * @slot bcu-docs-header - Base information, should be common style
	 * @slot bcu-docs-detail - Any information to further show documentation
	 * @slot bcu-docs-aside - advertising and page navigation
	 */

	import TableOfContents from '$lib/components/DataDisplay/TableOfContents/TableOfContents.svelte';
</script>

<section class="bcu-docs-layout page-padding flex items-start gap-10 relative">
	<div class="bcu-docs-layout-content page-container-aside">
		{#if $$slots['bcu-docs-header']}
			<div class="bcu-docs-header"><slot name="bcu-docs-header" /></div>
		{/if}
		{#if $$slots['bcu-docs-detail']}
			<div class="bcu-docs-detail"><slot name="bcu-docs-detail" /></div>
		{/if}
	</div>
	<aside class="bcu-docs-layout-aside sticky top-10 hidden xl:block space-y-4 w-72">
		{#if $$slots['bcu-docs-aside']}
			<div class="bcu-docs-slot-header"><slot name="bcu-docs-aside" /></div>
		{/if}
		<TableOfContents target=".bcu-docs-detail" />
	</aside>
</section>
