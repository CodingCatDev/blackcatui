<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { CheckCircle } from '@steeze-ui/heroicons';

	// Core
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	// Current Component
	import Button from '$lib/components/Inputs/Button/Button.svelte';
	import sveldButton from '$lib/components/Feedback/Alert/Alert.svelte?raw&sveld';

	const message = 'Button'; // Functions
	function triggerAction(): void {
		alert('The "Action" button was pressed!');
	}
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Button',
		description: 'Display Button with Icons',
		imports: ['Button'],
		source: 'components/Inputs/Button',
		components: [{ sveld: sveldButton }]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<div class="flex flex-col gap-4">
			<h2>Icon Button</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<Button
						{variant}
						class="aspect-square"
						slotStartIcon="w-8 h-8 aspect-square"
						on:click={triggerAction}
					>
						<!-- Start Icon -->
						<svelte:fragment slot="bcu-button-start-icon">
							<Icon src={CheckCircle} theme="solid" />
						</svelte:fragment>
					</Button>
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
					<CodeBlock
						language="html"
						code={`
<!-- Start Icon -->
<Button {variant} slotIcon="w-8" on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
</Button>

<!-- Message -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
</Button>

<!-- Start Icon / Message -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
</Button>

<!-- Message / End Icon -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-end-icon">
		(svg)
	</svelte:fragment>
</Button>

<!-- Start Icon / Message / End Icon -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-end-icon">
		(svg)
	</svelte:fragment>
</Button>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>

			<h2>Button</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex gap-8">
						<Button {variant} on:click={triggerAction}>
							<!-- Message -->
							<svelte:fragment slot="bcu-button-message">
								{message}
							</svelte:fragment>
						</Button>
						<Button {variant} slotIcon="w-8" on:click={triggerAction}>
							<!-- Start Icon -->
							<svelte:fragment slot="bcu-button-start-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
										clip-rule="evenodd"
									/>
								</svg>
							</svelte:fragment>
							<!-- Message -->
							<svelte:fragment slot="bcu-button-message">
								{message}
							</svelte:fragment>
						</Button>
						<Button {variant} slotIcon="w-8" on:click={triggerAction}>
							<!-- Message -->
							<svelte:fragment slot="bcu-button-message">
								{message}
							</svelte:fragment>
							<!-- End Icon -->
							<svelte:fragment slot="bcu-button-end-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
										clip-rule="evenodd"
									/>
								</svg>
							</svelte:fragment>
						</Button>
						<Button {variant} slotIcon="w-8" on:click={triggerAction}>
							<!-- Start Icon -->
							<svelte:fragment slot="bcu-button-start-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z"
									/>
								</svg>
							</svelte:fragment>
							<!-- Message -->
							<svelte:fragment slot="bcu-button-message">
								{message}
							</svelte:fragment>
							<!-- End Icon -->
							<svelte:fragment slot="bcu-button-end-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"
									/>
								</svg>
							</svelte:fragment>
						</Button>
					</div>
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
					<CodeBlock
						language="html"
						code={`
<!-- Start Icon -->
<Button {variant} slotIcon="w-8" on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
</Button>

<!-- Message -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
</Button>

<!-- Start Icon / Message -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
</Button>

<!-- Message / End Icon -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-end-icon">
		(svg)
	</svelte:fragment>
</Button>

<!-- Start Icon / Message / End Icon -->
<Button {variant} on:click={triggerAction}>
	<svelte:fragment slot="bcu-button-start-icon">
		(svg)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-message">
		(message)
	</svelte:fragment>
	<svelte:fragment slot="bcu-button-end-icon">
		(svg)
	</svelte:fragment>
</Button>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
	</section>
</DocsShell>
