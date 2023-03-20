<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<header class="space-y-4">
					<h1>Get Started</h1>
					<p>
						Please be aware that BlackCatUI currently only supports Svelte applications built using
						SvelteKit. We recommend at least moderate experience with
						<a rel="noreferrer" href="https://svelte.dev/tutorial/basics">Svelte</a>
						,
						<a rel="noreferrer" href="https://learn.svelte.dev/tutorial/welcome-to-svelte">
							SvelteKit
						</a>
						, and
						<a rel="noreferrer" href="https://tailwindcss.com/docs/utility-first"> Tailwind CSS </a>
						before your proceed.
					</p>
				</header>
				<hr />
				<section class="space-y-4">
					<h2>Install BlackCatUI</h2>
				</section>
				<p>
					If you have an existing SvelteKit application, skip to installing the Skeleton package
					from NPM. Otherwise let's begin by creating a new
					<a rel="noreferrer" href="https://kit.svelte.dev/docs/creating-a-project"
						>SvelteKit project</a
					>.
				</p>
			</div>
			<CodeBlock
				language="console"
				code={`
npm create svelte@latest my-skeleton-app
cd my-skeleton-app
npm install
				`}
			/>
			<p>
				Install the
				<a rel="noreferrer" href="https://www.npmjs.com/package/@codingcatdev/blackcatui">
					BlackCatUI package
				</a>
				from NPM.
			</p>
			<CodeBlock
				language="console"
				code={`
npm i @skeletonlabs/skeleton --save-dev
				`}
			/>
		</section>
	</svelte:fragment>
</DocsLayout>
