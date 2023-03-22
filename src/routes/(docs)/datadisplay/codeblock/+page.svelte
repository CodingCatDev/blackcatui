<script lang="ts">
	// Core
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	// Current Component
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import sveldCodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Code Blocks',
		description:
			'Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> syntax highlighting.',
		imports: ['CodeBlock'],
		stylesheets: ['highlight-js'],
		source: 'utilities/CodeBlock',
		components: [{ sveld: sveldCodeBlock }],
		dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<div class="flex flex-col gap-4">
			<h2>Image Avatars</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="w-full space-y-4">
						<CodeBlock language="html" code={`<div>This is meta</div>`} />
						<CodeBlock language="css" code={`.blackcatui { color: #bada55; }`} />
						<CodeBlock language="ts" code={`const blackcatui: string = 'awesome';`} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<CodeBlock language="html" code={\`<div>This is meta</div>\`}></CodeBlock>`}
					/>
					<CodeBlock
						language="html"
						code={`<CodeBlock language="css" code={\`.blackcatui { color: #bada55; }\`}></CodeBlock>`}
					/>
					<CodeBlock
						language="html"
						code={`<CodeBlock language="ts" code={\`const blackcatui: string = 'awesome';\`}></CodeBlock>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<section class="space-y-4">
			<h2>Install Highlight.js</h2>
			<p>
				<a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> is a required
				dependency to enable syntax highlighting.
			</p>
			<CodeBlock language="console" code={`npm install highlight.js`} />
		</section>
		<section class="space-y-4">
			<h2>Configure Your Project</h2>
			<p>
				Apply the following changes to your app's root component in <code
					>/src/routes/+layout.svelte</code
				>.
			</p>
			<CodeBlock language="ts" code={`import hljs from 'highlight.js';`} />
			<p>
				Import any <a
					href="https://github.com/highlightjs/highlight.js/tree/main/src/styles"
					target="_blank"
					rel="noreferrer">Highlight.js CSS theme</a
				> of your choice.
			</p>
			<CodeBlock language="ts" code={`import 'highlight.js/styles/github-dark.css';`} />
			<p>Finally, import the CodeBlock's writable store and pass a referenced to Highlight.js.</p>
			<CodeBlock
				language="ts"
				code={`import { storeHighlightJs } from '@codingcatdev/blackcatui';\n\nstoreHighlightJs.set(hljs);`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Supported Languages</h2>
			<!-- prettier-ignore -->
			<p>
				Syntax highlighting will appear when a valid <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank" rel="noreferrer">language alias</a> is provided to the CodeBlock's <code>language</code> prop.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>
				Uses <code>pre-wrap</code> by default to support keyboard-only navigation. Please be mindful
				of color contrast when customizing the design.
			</p>
		</section>
	</section>
</DocsShell>
