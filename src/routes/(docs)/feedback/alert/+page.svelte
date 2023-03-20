<script lang="ts">
	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';

	// Current Component
	import Alert from '$lib/components/Feedback/Alert/Alert.svelte';
	const message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus.';
	// Functions
	function triggerAction(): void {
		alert('The "Action" button was pressed!');
	}
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2>Alert</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<Alert {variant} slotIcon="w-8">
							<!-- Message -->
							<svelte:fragment slot="bcu-alert-message">
								<h3 data-toc-ignore="">Alert</h3>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-8 h-8 text-surface-900"
								>
									<path
										fill-rule="evenodd"
										d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
										clip-rule="evenodd"
									/>
								</svg>
							</svelte:fragment>

							<!-- Message -->
							<svelte:fragment slot="bcu-alert-message">
								<h3 data-toc-ignore="">Alert</h3>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-8 h-8 text-surface-900"
								>
									<path
										fill-rule="evenodd"
										d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
										clip-rule="evenodd"
									/>
								</svg>
							</svelte:fragment>

							<!-- Message -->
							<svelte:fragment slot="bcu-alert-message">
								<h3 data-toc-ignore="">Alert</h3>
								<p>{message}</p>
							</svelte:fragment>

							<!-- Actions -->
							<svelte:fragment slot="bcu-alert-actions">
								<button class="btn variant-filled" on:click={triggerAction}>Action</button>
								<button class="btn variant-filled">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
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
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-aside">Show list here</svelte:fragment>
</DocsLayout>
