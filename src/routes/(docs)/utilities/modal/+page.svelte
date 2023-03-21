<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { CheckCircle } from '@steeze-ui/heroicons';

	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';

	// Current Component
	import Button from '$lib/components/Inputs/Button/Button.svelte';
	import type { ModalSettings } from '$lib/components/Utilities/Modal/types';
	import { modalStore } from '$lib/components/Utilities/Modal/stores';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2>Button</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="flex flex-col md:flex-row gap-2 md:gap-2">
							<Button
								{variant}
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'Hello Skeleton',
										body: 'This modal example includes a title, body, and image.',
										image:
											'https://res.cloudinary.com/demo/image/upload/fl_awebp/kitten_fighting.webp'
									});
								}}
							>
								<!-- Message -->
								<svelte:fragment slot="bcu-button-message">
									<Button>
										<svelte:fragment slot="bcu-button-message">Demo</svelte:fragment>
									</Button>
								</svelte:fragment>
							</Button>
							<Button
								{variant}
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'Hello Skeleton',
										body: 'This simple alert modal uses <code>type: alert</code>.'
									});
								}}
							>
								<!-- Message -->
								<svelte:fragment slot="bcu-button-message">
									<Button>
										<svelte:fragment slot="bcu-button-message">Alert</svelte:fragment>
									</Button>
								</svelte:fragment>
							</Button>
							<Button
								{variant}
								on:click={() => {
									modalStore.trigger({
										type: 'confirm',
										title: 'Please Confirm',
										body: 'Are you sure you wish to proceed?',
										response: (r) => {
											if (r) console.log('response:', r);
										}
									});
								}}
							>
								<!-- Message -->
								<svelte:fragment slot="bcu-button-message">
									<Button>
										<svelte:fragment slot="bcu-button-message">Confirm</svelte:fragment>
									</Button>
								</svelte:fragment>
							</Button>
						</div>
					</svelte:fragment>
				</DocsPreview>
			</div>
		</section>
	</svelte:fragment>
</DocsLayout>
