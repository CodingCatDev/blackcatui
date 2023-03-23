<script lang="ts">
	// Core
	import DocsLayout from '../DocsLayout/DocsLayout.svelte';
	import Alert from '$lib/components/Feedback/Alert/Alert.svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { ExclamationTriangle, XMark } from '@steeze-ui/heroicons';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header">
		<h1>Missing Implementation</h1>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-detail">
		<Alert variant="variant-ghost-warning" slotIcon="w-8">
			<!-- Icon -->
			<svelte:fragment slot="bcu-alert-icon">
				<Icon src={ExclamationTriangle} theme="solid" class="w-12" />
			</svelte:fragment>

			<!-- Message -->
			<svelte:fragment slot="bcu-alert-message">
				<h3 data-bcu-toc-ignore="">Alert</h3>
				<p>
					Please add this in the <span class="bcu-chip variant-ghost-primary">(docs)</span> route.
				</p>
			</svelte:fragment>
		</Alert>
	</svelte:fragment>
</DocsLayout>
