<script lang="ts">
	import Alert from '$lib/components/Feedback/Alert/Alert.svelte';
</script>

<h1>Alert</h1>
<Alert alertType="variant-filled-success" slotIcon="w-8">
	<!-- Icon -->
	<svelte:fragment slot="icon">
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
	<svelte:fragment slot="message">
		<h3 data-toc-ignore="">Warning</h3>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in
			neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus.
		</p>
	</svelte:fragment>

	<!-- Message -->
	<svelte:fragment slot="actions">
		<button class="btn variant-filled">Action</button>
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
