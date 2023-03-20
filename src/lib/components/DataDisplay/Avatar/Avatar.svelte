<script lang="ts">
	// Slots
	/**
	 * @slot bcu-avatar-message - Provides a vertical set of text information that fills the available width of the alert.
	 */

	// Types
	import type { CssClasses } from '$lib';

	// Props (base)
	/** Provide classes. */
	export let variant: CssClasses = 'variant-filled';
	export let src = '';
	export let alt = '';

	// Props (slots)
	/** Classes to apply to the message slot container element */
	export let slotMessage: CssClasses = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'flex relative items-center justify-center shrink-0 overflow-hidden';

	// Reactive Classes
	$: classesBase = `${cBase} ${variant} ${$$props.class ?? ''}`;
	$: classesSlotMessage = `${slotMessage}`;
</script>

<!-- Slot: message -->
{#if $$slots['bcu-avatar-message']}
	<div
		class="avatar {classesBase} {classesSlotMessage}"
		aria-label={label}
		aria-labelledby={labelledby}
	>
		<slot name="bcu-avatar-message" />
	</div>
{:else}
	<div
		class="avatar {classesBase} text-center object-cover text-transparent"
		aria-label={label}
		aria-labelledby={labelledby}
	>
		<img {src} {alt} />
	</div>
{/if}
