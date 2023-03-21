<script lang="ts">
	// Slots
	/**
	 * @slot bcu-button-start-icon - Provides an area for icon like warning triangle
	 * @slot bcu-button-message - Provides a vertical set of text information that fills the available width of the button.
	 * @slot bcu-button-end-icon - Provides an area for icon like send
	 */

	// Types
	import type { CssClasses } from '$lib';

	// Props (base)
	/** Provide classes to set button type. */
	export let variant: CssClasses = 'variant-filled';
	/** Provide classes to set button size. bcu-button-sm | bcu-button-lg | bcu-button-xl */
	export let buttonSize: CssClasses = 'bcu-button';

	// Props (slots)
	/** Classes to apply to the message slot container element */
	export let slotStartIcon: CssClasses = '';
	/** Classes to apply to the message slot container element */
	export let slotMessage: CssClasses = '';
	/** Classes to apply to the message slot container element */
	/** Classes to apply to the message slot container element */
	export let slotEndIcon: CssClasses = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'flex';

	// Reactive Classes
	$: classesBase = `${cBase} ${variant} ${buttonSize} ${$$props.class ?? ''}`;
	$: classesSlotStartIcon = `${slotStartIcon}`;
	$: classesSlotMessage = `${slotMessage}`;
	$: classesSlotEndIcon = `${slotEndIcon}`;
</script>

<button
	class="bcu-button {classesBase}"
	data-testid="bcu-button"
	aria-label={label}
	aria-labelledby={labelledby}
	on:click
>
	<!-- Start Icon -->
	{#if $$slots['bcu-button-start-icon']}
		<div class="bcu-button-icon {classesSlotStartIcon}"><slot name="bcu-button-start-icon" /></div>
	{/if}

	<!-- Slot: message -->
	{#if $$slots['bcu-button-message']}
		<div class="button-message bcu-button-message {classesSlotMessage}">
			<slot name="bcu-button-message" />
		</div>
	{/if}

	<!-- End Icon -->
	{#if $$slots['bcu-button-end-icon']}
		<div class="bcu-button-icon {classesSlotEndIcon}"><slot name="bcu-button-end-icon" /></div>
	{/if}
</button>
