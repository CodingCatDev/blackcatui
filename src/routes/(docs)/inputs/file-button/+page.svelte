<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import FileButton from '$lib/components/Inputs/FileButton/FileButton.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldFileButton from '$lib/components/Inputs/FileButton/FileButton.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Button',
		description: 'Allows you to select files with a single click.',
		imports: ['FileButton'],
		source: 'components/Inputs/FileButton',
		components: [{ sveld: sveldFileButton }],
		restProps: 'input'
	};

	// Local
	let files: FileList;

	// Variant example
	import { variants } from '../../DocsPreview/options';
	import { onMount } from 'svelte';
	let button: string;

	function onChangeHandler(e: Event): void {
		console.log('file data:', e);
		console.log('files:', files);
	}

	onMount(() => {
		button = 'variant-soft-primary';
	});
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<FileButton bind:files name="file" accept="image/*" on:change={onChangeHandler} />
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<p class="!w-full text-center">Monitor your browser's console when adding files.</p>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="html" code={`<FileButton name="files" />`} />
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<p>
				Uses <code>FileList</code> to bind data to an <code>input[type='file']</code>. Accepts all
				attributes, including:
				<code>multiple</code>, <code>accept</code>, and <code>required</code>.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Variant Style</h2>
			<p>
				Use the <code>button</code> property to provide classes for the button, such as variant styles.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<FileButton name="files" {button}>Upload</FileButton>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<FileButton name="files" button="variant-soft-primary">Upload</FileButton>`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="flex justify-center gap-4">
						<select bind:value={button} class="select w-auto">
							{#each variants as vSet}
								<optgroup label={vSet.label}>
									{#each vSet.list as v}
										<option value={v}>{v}</option>
									{/each}
								</optgroup>
							{/each}
						</select>
					</div>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Binding Method</h2>
			<p>Use a <code>FileList</code> to bind the file data.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton ... bind:files />`} />
		</section>
		<section class="space-y-4">
			<h2>On Change Event</h2>
			<p>Use the <code>on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock
				language="ts"
				code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`}
			/>
			<CodeBlock
				language="html"
				code={`<FileButton ... on:change={onChangeHandler}>Upload</FileButton>`}
			/>
		</section>
	</section>
</DocsShell>
