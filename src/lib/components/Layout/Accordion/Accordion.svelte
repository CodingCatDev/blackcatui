<script lang="ts">
	// Slots:
	// NOTE: we cannot describe the default slot.

	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '$lib';

	// Props
	/** Set the auto-collapse mode. */
	export let autocollapse = false;
	/** Set the drawer animation duration in milliseconds. */
	export let duration = 200; // ms

	export let variant: CssClasses = 'variant-filled';

	// Props (parent)
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (childen)
	/** Provide classes to set the accordion item padding styles. */
	export let padding: CssClasses = 'py-2 px-4';
	/** Provide classes to set the accordion item hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Provide classes to set the accordion item rounded styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (caret)
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = 'rotate-180';
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = '';

	// Props (regions)
	/** Provide arbitrary classes to the trigger button region. */
	export let regionControl: CssClasses = '';
	/** Provide arbitrary classes to the content panel region. */
	export let regionPanel: CssClasses = 'space-y-4';
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = '';

	// Local
	const active: Writable<string | null> = writable(null);

	// Context API
	setContext('bcu-accordion-active', active);
	setContext('bcu-accordion-autocollapse', autocollapse);
	setContext('bcu-accordion-duration', duration);
	setContext('bcu-accordion-padding', padding);
	setContext('bcu-accordion-hover', hover);
	setContext('bcu-accordion-rounded', rounded);
	setContext('bcu-accordion-caretOpen', caretOpen);
	setContext('bcu-accordion-caretClosed', caretClosed);
	setContext('bcu-accordion-regionControl', regionControl);
	setContext('bcu-accordion-regionPanel', regionPanel);
	setContext('bcu-accordion-regionCaret', regionCaret);

	// Reactive
	$: classesBase = `${spacing} ${$$props.class ?? ''}`;
</script>

<!-- @component The Accordion parent element. -->

<div class="bcu-accordion bcu-card {classesBase} {variant}" data-testid="bcu-accordion">
	<slot />
</div>
