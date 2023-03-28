<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import ProgressCircle from '$lib/components/Feedback/ProgressCircle/ProgressCircle.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldProgressCircle from '$lib/components/Feedback/ProgressCircle/ProgressCircle.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Progress Circle',
		description: 'Displays a circular indicator showing the progress or completion of a task.',
		imports: ['ProgressCircle'],
		source: 'components/ProgressCircle',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
		components: [{ sveld: sveldProgressCircle }]
	};

	// Reactive
	$: props = { value: 50, max: 100, step: 10 };
	$: strokeProps = { value: 100, max: 400, step: 20 };
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<ProgressCircle value={props.value} width="w-48">{props.value}%</ProgressCircle>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-footer">
				<div class="w-48 mx-auto">
					<input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock language="ts" code={`let value: number = 50; // %`} />
				<CodeBlock language="html" code={`<ProgressCircle {value}>{value}%</ProgressCircle>`} />
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<h2>Styling</h2>
			<p>
				Use the <code>stroke</code> <code>meter</code> or <code>track</code>properties to style the
				circle.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="grid w-full grid-cols-2 gap-2 text-center sm:grid-cols-3 lg:grid-cols-6">
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-primary-500"
								track="stroke-primary-500/30"
								width="w-full"
							/>
							<p>Primary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-secondary-500"
								track="stroke-secondary-500/30"
								width="w-full"
							/>
							<p>Secondary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-tertiary-500"
								track="stroke-tertiary-500/30"
								width="w-full"
							/>
							<p>Tertiary</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-success-500"
								track="stroke-success-500/30"
								width="w-full"
							/>
							<p>Success</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-warning-500"
								track="stroke-warning-500/30"
								width="w-full"
							/>
							<p>Warning</p>
						</div>
						<div class="p-4 space-y-2">
							<ProgressCircle
								stroke={strokeProps.value}
								meter="stroke-error-500"
								track="stroke-error-500/30"
								width="w-full"
							/>
							<p>Error</p>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="w-48 mx-auto">
						<input
							type="range"
							min="20"
							max={strokeProps.max}
							step={strokeProps.step}
							bind:value={strokeProps.value}
						/>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`<ProgressCircle ... stroke={${strokeProps.value}} meter="stroke-primary-500" track="stroke-primary-500/30" />`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Indeterminate</h2>
			<p>Remove the <code>value</code> property or set to <code>undefined</code>.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<ProgressCircle width="w-28" />
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="html" code={`<ProgressCircle />`} />
					<CodeBlock language="html" code={`<ProgressCircle value={undefined} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<hr />
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<!-- prettier-ignore -->
			<p>
				This component is treated as an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank" rel="noreferrer">ARIA meter</a>.
			</p>
		</section>
	</section>
</DocsShell>
