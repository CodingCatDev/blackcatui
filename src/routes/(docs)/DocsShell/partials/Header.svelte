<script lang="ts">
	import type { DocsShellSettings } from '../types';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github } from '@steeze-ui/simple-icons';
	import { CodeBracket } from '@steeze-ui/heroicons';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cHeader = 'space-y-10';
	const cChip = 'unstyled bcu-chip variant-soft hover:variant-filled';

	// Local
	const githubSourcePath = 'https://github.com/codingcatdev/blackcatui/tree/master/src'; // FIXME: hardcoded path

	function formatImportSnippet(): string {
		let snippet = ``;
		if (pageData.imports?.length) {
			snippet += `import { ${pageData.imports?.join(', ')} } from '${pageData.package?.name}';`;
		}
		if (pageData.types?.length) {
			snippet += `\nimport type { ${pageData.types?.join(', ')} } from '${
				pageData.package?.name
			}';`;
		}
		return snippet;
	}

	// Reactive
	$: classesHeader = `${cHeader}`;
</script>

<header class="bcu-doc-shell-header {classesHeader}">
	<section class="space-y-4">
		<!-- <span class="bcu-badge variant-soft translate-y-1">{@html pageData.feature}</span> -->
		<h1>{pageData.name}</h1>
		<p>{@html pageData.description}</p>
	</section>
	<!-- Imports & Types -->
	{#if pageData.imports?.length || pageData.types?.length}
		<CodeBlock language="ts" code={formatImportSnippet()} />
	{/if}
	<!-- Element Style Tree -->
	{#if pageData.feature === 'Tailwind' && pageData.stylesheetIncludes?.length}
		<aside class="alert card">
			<div class="alert-message">
				<p>Provided by BlackCatUI's <code>all.css</code> stylesheet.</p>
			</div>
			<a href="/docs/get-started#stylesheets" class="bcu-button bcu-button-sm variant-filled"
				>Reference</a
			>
		</aside>
	{/if}
	<!-- Metadata Chips -->
	<section class="flex flex-wrap gap-2">
		<!-- Package -->
		<!-- {#if pageData.source}
			<a class={cChip} href={pageData.package?.url} target="_blank" rel="noreferrer">
				<i class="fa-brands fa-npm text-[16px]" />
				<span>{pageData.package?.name}</span>
			</a>
		{/if} -->
		<!-- Source -->
		{#if pageData.source}
			<a
				class={cChip}
				href={`${githubSourcePath}/lib/${pageData.source}`}
				target="_blank"
				rel="noreferrer"
			>
				<Icon src={Github} theme="solid" class="w-6" />
				<span>Source</span>
			</a>
		{/if}
		<!-- Doc Source -->
		{#if pageData.docsPath}
			<a
				class={cChip}
				href={`${githubSourcePath}/routes/(docs)${pageData.docsPath}/+page.svelte`}
				target="_blank"
				rel="noreferrer"
			>
				<Icon src={CodeBracket} theme="solid" class="w-6" />
				<span>Page Source</span>
			</a>
		{/if}
		<!-- WAI-ARIA -->
		{#if pageData.aria}
			<a class={cChip} href={pageData.aria} target="_blank" rel="noreferrer">
				<i class="fa-solid fa-universal-access text-[16px]" />
				<span>WAI-ARIA</span>
			</a>
		{/if}
		<!-- Dependencies -->
		{#if pageData.dependencies?.length}
			{#each pageData.dependencies as d}
				<a class={cChip} href={d.url} target="_blank" rel="noreferrer" title="Required Depedency">
					<i class="fa-solid fa-down-left-and-up-right-to-center text-[16px]" />
					<span>{d.label}</span>
				</a>
			{/each}
		{/if}
	</section>
</header>
