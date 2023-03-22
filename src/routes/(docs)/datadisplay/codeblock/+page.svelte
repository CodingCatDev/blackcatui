<script lang="ts">
	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	let variant = 'variant-filled-error';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2>Image Avatars</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="w-full space-y-4">
							<CodeBlock language="html" code={`<div>This is meta</div>`} />
							<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
							<CodeBlock language="ts" code={`const skeleton: string = 'awesome';`} />
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock
							language="html"
							code={`<CodeBlock language="html" code={\`<div>This is meta</div>\`}></CodeBlock>`}
						/>
						<CodeBlock
							language="html"
							code={`<CodeBlock language="css" code={\`.skeleton { color: #bada55; }\`}></CodeBlock>`}
						/>
						<CodeBlock
							language="html"
							code={`<CodeBlock language="ts" code={\`const skeleton: string = 'awesome';\`}></CodeBlock>`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</div>
		</section>
	</svelte:fragment>
</DocsLayout>
