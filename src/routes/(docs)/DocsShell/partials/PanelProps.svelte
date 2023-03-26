<script lang="ts">
	// Types
	import type { DocsShellSettings } from '../types';
	// Sveld Mapper
	import { sveldMapperProps } from '../sveldMapper';
	// Components
	import Table from '$lib/components/DataDisplay/Table/Table.svelte';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="bcu-doc-shell-properties {classesBase}">
	<!-- RestProps -->
	{#if pageData.restProps}
		<aside class="bcu-alert variant-ghost-warning">
			<!-- prettier-ignore -->
			<div class="bcu-alert-message">
				<p>This component implements <a href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank" rel="noreferrer">restProps</a>. This passes all extra attributes to the component's <code>{pageData.restProps}</code> elements.</p>
			</div>
		</aside>
	{/if}
	<!-- Tables -->
	{#if pageData.components}
		{#each pageData.components as comp}
			{#if comp.sveld.props.length > 0}
				{@const tableSource = sveldMapperProps(comp)}
				<section class="space-y-4">
					{#if comp.label}<h2>{comp.label}</h2>{/if}
					{#if comp.descProps}<div>{@html comp.descProps}</div>{/if}
					{#if tableSource.body.length > 0}
						<Table source={tableSource} />
					{/if}
					{#if comp.overrideProps}
						<div>
							<em
								>{comp.label} can override:
								<span class="text-primary-500">{comp.overrideProps.join(', ')}</span>.</em
							>
						</div>
					{/if}
				</section>
			{/if}
		{/each}
	{/if}
</div>
