<script lang="ts">
	import { fade, type FadeParams } from 'svelte/transition';

	// Visibility
	/** Provide set visible. */
	export let visible: boolean = true;
	export let transitionFade: FadeParams = { duration: 200 };

	// Slots
	/**
	 * @slot bcu-alert-icon - Provides an area for icon like warning triangle
	 * @slot bcu-alert-message - Provides a vertical set of text information that fills the available width of the alert.
	 * @slot bcu-alert-actions - Provides a trailing area to house interactive action buttons.
	 */

	// Types
	import type { CssClasses } from '$lib';

	// Props (base)
	/** Provide classes to set alert type. */
	export let variant: CssClasses = 'variant-filled';

	// Props (slots)
	/** Classes to apply to the message slot container element */
	export let slotIcon: CssClasses = '';
	/** Classes to apply to the message slot container element */
	export let slotMessage: CssClasses = '';
	/** Classes to apply to the message slot container element */
	export let slotActions: CssClasses = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'flex';

	// Reactive Classes
	$: classesBase = `${cBase} ${variant} ${$$props.class ?? ''}`;
	$: classesSlotIcon = `${slotIcon}`;
	$: classesSlotMessage = `${slotMessage}`;
	$: classesSlotActions = `${slotActions}`;
</script>

{#if visible}
	<aside
		class="alert {classesBase}"
		data-testid="bcu-alert"
		role="alert"
		aria-label={label}
		aria-labelledby={labelledby}
		transition:fade|local={transitionFade}
	>
		<!-- Icon -->
		{#if $$slots['bcu-alert-icon']}
			<div class="bcu-alert-icon {classesSlotIcon}"><slot name="bcu-alert-icon" /></div>
		{/if}

		<!-- Slot: message -->
		{#if $$slots['bcu-alert-message']}
			<div class="alert-message bcu-alert-message {classesSlotMessage}">
				<slot name="bcu-alert-message" />
			</div>
		{/if}

		<!-- Actions -->
		{#if $$slots['bcu-alert-actions']}
			<div class="alert-actions bcu-alert-actions {classesSlotActions}">
				<slot name="bcu-alert-actions" />
			</div>
		{/if}
	</aside>
{/if}
