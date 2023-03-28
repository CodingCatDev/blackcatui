<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import FileDropzone from '$lib/components/Inputs/FileDropzone/FileDropzone.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldFileDropzone from '$lib/components/Inputs/FileDropzone/FileDropzone.svelte?raw&sveld';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { DocumentArrowUp } from '@steeze-ui/heroicons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Dropzone',
		description: 'Allow upload of files with drag and drop.',
		imports: ['FileDropzone'],
		source: 'components/FileDropzone',
		components: [{ sveld: sveldFileDropzone }],
		restProps: 'input'
	};

	// Local
	let files: FileList;

	function onChangeHandler(e: any): void {
		console.log('file data:', e);
		console.log('files:', files);
	}
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="space-y-4 w-full text-token">
					<FileDropzone bind:files name="files-example-one" on:change={onChangeHandler} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<p class="!w-full text-center">Monitor your browser's console when adding files.</p>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="html" code={`<FileDropzone name="files" />`} />
			</svelte:fragment>
		</DocsPreview>

		<p>
			Uses <code>input[type='file']</code> and allows for all native input features and
			accessibility. Including <code>multiple</code>,
			<code>accept</code>, and <code>required</code>.
		</p>
		<div class="space-y-4">
			<h2>Customization</h2>
			<p>
				Customize the component with the available <code>icon</code>, <code>message</code>, and
				<code>meta</code> slots.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="space-y-4 w-full">
						<FileDropzone name="files-example-two" accept="image/*" on:change={onChangeHandler}>
							<svelte:fragment slot="lead">
								<Icon src={DocumentArrowUp} theme="solid" class="w-12" />
							</svelte:fragment>
							<svelte:fragment slot="bcu-file-dropzone-meta"
								>PNG, JPG, and GIF allowed.</svelte:fragment
							>
						</FileDropzone>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<FileDropzone name="files">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="message">(message)</svelte:fragment>
	<svelte:fragment slot="meta">(meta)</svelte:fragment>
</FileDropzone>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<div class="space-y-4">
			<h2>Binding Method</h2>
			<p>Use a <code>FileList</code> to bind the file data.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileDropzone ... bind:files />`} />
		</div>
		<div class="space-y-4">
			<h2>On Change Event</h2>
			<p>Use the <code>on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock
				language="ts"
				code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`}
			/>
			<CodeBlock
				language="html"
				code={`<FileDropzone ... on:change={onChangeHandler}>Upload</FileDropzone>`}
			/>
		</div>
	</section>
</DocsShell>
