<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ExclamationTriangle, XMark } from '@steeze-ui/heroicons';

	// Core
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	// Current Component
	import Alert from '$lib/components/Feedback/Alert/Alert.svelte';
	import sveldAlert from '$lib/components/Feedback/Alert/Alert.svelte?raw&sveld';

	const message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus.';
	// Functions
	function triggerAction(): void {
		alert('The "Action" button was pressed!');
	}

	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Alert',
		description: 'Display alert popup',
		imports: ['Alert'],
		source: 'components/Feedback/Alert',
		components: [{ sveld: sveldAlert }]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<div class="flex flex-col gap-4">
			<h2>Alert</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<Alert {variant} slotIcon="w-8">
						<!-- Message -->
						<svelte:fragment slot="bcu-alert-message">
							<h3 data-bcu-toc-ignore="">Alert</h3>
							<p>{message}</p>
						</svelte:fragment>
					</Alert>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="flex justify-center gap-4">
						<select bind:value={variant} class="select w-auto">
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
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="ts" code={`let visible: boolean = true;`} />
					<CodeBlock
						language="html"
						code={`
<Alert {visible} {variant} slotIcon="w-8">
	<!-- Message -->
	<svelte:fragment slot="bcu-alert-message">
		(message)
	</svelte:fragment>
</Alert>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<div class="flex flex-col gap-4">
			<h2>Alert with Icon</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<Alert {variant} slotIcon="w-8">
						<!-- Icon -->
						<svelte:fragment slot="bcu-alert-icon">
							<Icon src={ExclamationTriangle} theme="solid" class="w-12" />
						</svelte:fragment>

						<!-- Message -->
						<svelte:fragment slot="bcu-alert-message">
							<h3 data-bcu-toc-ignore="">Alert</h3>
							<p>{message}</p>
						</svelte:fragment>
					</Alert>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="flex justify-center gap-4">
						<select bind:value={variant} class="select w-auto">
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
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="ts" code={`let visible: boolean = true;`} />
					<CodeBlock
						language="html"
						code={`
<Alert {visible} {variant} slotIcon="w-8">
	<!-- Icon -->
	<svelte:fragment slot="bcu-alert-icon">
		(icon)
	</svelte:fragment>

	<!-- Message -->
	<svelte:fragment slot="bcu-alert-message">
		(message)
	</svelte:fragment>
</Alert>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<div class="flex flex-col gap-4">
			<h2>Alert with buttons</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<Alert {variant} slotIcon="w-8">
						<!-- Icon -->
						<svelte:fragment slot="bcu-alert-icon">
							<Icon src={ExclamationTriangle} theme="solid" class="w-12" />
						</svelte:fragment>

						<!-- Message -->
						<svelte:fragment slot="bcu-alert-message">
							<h3 data-bcu-toc-ignore="">Alert</h3>
							<p>{message}</p>
						</svelte:fragment>

						<!-- Actions -->
						<svelte:fragment slot="bcu-alert-actions">
							<button class="bcu-button variant-filled" on:click={triggerAction}>Action</button>
							<button class="bcu-button variant-filled">
								<Icon src={XMark} theme="solid" class="w-6" />
							</button>
						</svelte:fragment>
					</Alert>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-footer">
					<div class="flex justify-center gap-4">
						<select bind:value={variant} class="select w-auto">
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
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock language="ts" code={`let visible: boolean = true;`} />
					<CodeBlock
						language="html"
						code={`
<Alert {visible} {variant} slotIcon="w-8">
	<!-- Icon -->
	<svelte:fragment slot="bcu-alert-icon">
		(icon)
	</svelte:fragment>

	<!-- Message -->
	<svelte:fragment slot="bcu-alert-message">
		(message)
	</svelte:fragment>
	<!-- Actions -->
	<svelte:fragment slot="bcu-alert-actions">
		(buttons)
	</svelte:fragment>
</Alert>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
	</section>
</DocsShell>
