<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h1>Introduction</h1>
				<p>
					A powerful UI toolkit built using
					<a rel="noreferrer" href="https://svelte.dev/">Svelte</a>
					and
					<a rel="noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a>
					. Create adaptive, accessible design systems for your web apps.
				</p>
			</div>
		</section>
	</svelte:fragment>
</DocsLayout>
