<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';

	// Types
	import type { TableSource } from '$lib/components/DataDisplay/Table/types';
	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	import { writable, type Writable } from 'svelte/store';

	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header">
		<div class="flex flex-col gap-10">
			<h1>Styling</h1>
			<p>This covers basic techniques for styling BlackCatUI components.</p>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<section class="space-y-4">
				<h2>Via Component Props</h2>
				<p>
					This is the recommended manner to style most components. Each component provides a set of
					style <em>props</em> (read: properties) that allow you to override the default style classes.
					See a list of available options under the "Props" tab per each feature in BlackCatUI.
				</p>
				<CodeBlock
					language="html"
					code={`<ExampleComponent background="bg-secondary-500 md:bg-primary-500">BlackCatUI</ExampleComponent>`}
				/>
				<div class="bcu-alert variant-ringed-secondary flex gap-1">
					TIP: You may provide multiple utility classes per each prop, as well as use variations
					such as <code>dark:bg-green-500</code>.
				</div>
			</section>

			<section class="space-y-4">
				<h2>Via the Class Attribute</h2>
				<p>
					If a style prop is not available, you can still provide arbitrary utility classes via a
					standard <code>class</code> attribute. These styles are always applied to the parent element
					in the component template.
				</p>
				<CodeBlock
					language="html"
					code={`<ExampleComponent class="text-3xl px-10 py-5">BlackCatUI</ExampleComponent>`}
				/>
			</section>

			<hr />

			<section class="space-y-4">
				<h2>Tailwind's Arbitrary Variants</h2>
				<p>
					If you need to target deeper than the parent element, we recommend using <a
						href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants"
						target="_blank"
						rel="noreferrer">Tailwind's arbitrary variant syntax</a
					>.
				</p>
				<CodeBlock
					language="html"
					code={`<ExampleComponent class="[&>.foo-label]:p-4">...</ExampleComponent>`}
				/>
				<p>
					This will affect the Parent > .foo-label element and apply a Tailwind class of <code
						>p-4</code
					>.
				</p>
			</section>

			<hr />

			<section class="space-y-4">
				<h2>Global Styles Overrides</h2>
				<p>
					BlackCatUI components include selector classes, such as <code>.avatar-image</code> within
					the
					<a href="/data-display/avatar">Avatar component</a>. Please note that selector classes are
					always the first listed.
				</p>
				<CodeBlock language="html" code={`<img class="avatar-image ...">...</img>`} />
				<p>
					Use these selector classes to target global style overrides to all instances of this
					feature in your global stylesheet.
				</p>
				<CodeBlock language="css" code={`.avatar-image { @apply border-2 border-red-500; }`} />
				<blockquote>
					In some cases you may need to use <code>!</code>
					<a
						href="https://tailwindcss.com/docs/configuration#important-modifier"
						target="_blank"
						rel="noreferrer">important</a
					> or style light and dark mode variants to give precedence.
				</blockquote>
			</section>
		</section>
	</svelte:fragment>
</DocsLayout>
