<script lang="ts">
	// Core
	import DocsLayout from '../DocsLayout/DocsLayout.svelte';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h1>Missing Implementation</h1>
				<p>Please implement me.</p>
			</div>
		</section>
	</svelte:fragment>
</DocsLayout>
