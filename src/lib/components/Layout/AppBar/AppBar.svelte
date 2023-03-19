<script lang="ts">
	// Slots
	/**
	 * @slot bcu-app-bar-lead - Provides content on the left end of the bar, e.g. a logo.
	 * @slot bcu-app-bar-trail - Provides content on the right end of the bar, e.g. navigation elements.
	 * @slot bcu-app-bar-headline - Provides secondary row for headlines
	 */

	// Types
	import type { CssClasses } from '$lib';

	// Props (base)
	/** Provide classes to set background color. */
	export let background: CssClasses = 'bg-surface-100-800-token';
	/** Provide classes to set border styles. */
	export let border: CssClasses = '';
	/** Provide classes to set padding. */
	export let padding: CssClasses = 'p-4';
	/** Provide classes to define a box shadow. */
	export let shadow: CssClasses = '';
	/** Provide classes to set the vertical spacing between rows. */
	export let spacing: CssClasses = 'space-y-4';
	/** Provide classes to set grid columns for the main row. */
	export let gridColumns: CssClasses = 'grid-cols-[auto_1fr_auto]';
	/** Provide classes to set gap spacing for the main row. */
	export let gap: CssClasses = 'gap-4';

	// Props (regions)
	/** Provide arbitrary classes to style the top (main) row. */
	export let regionRowMain: CssClasses = '';
	/** Provide arbitrary classes to style the bottom (headline) row. */
	export let regionRowHeadline: CssClasses = '';

	// Props (slots)
	/** Classes to apply to the lead slot container element */
	export let slotLead: CssClasses = '';
	/** Classes to apply to the default slot container element */
	export let slotDefault: CssClasses = '';
	/** Classes to apply to the trail slot container element */
	export let slotTrail: CssClasses = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'flex flex-col';
	// ---
	const cRowMain = 'grid items-center';
	const cRowHeadline = '';
	// ---
	const cSlotLead = 'flex-none flex justify-between items-center';
	const cSlotDefault = 'flex-auto';
	const cSlotTrail = 'flex-none flex items-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${
		$$props.class ?? ''
	}`;
	$: classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
	$: classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
	$: classesSlotLead = `${cSlotLead} ${slotLead}`;
	$: classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
	$: classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
</script>

<div
	class="app-bar {classesBase}"
	data-testid="app-bar"
	role="toolbar"
	aria-label={label}
	aria-labelledby={labelledby}
>
	<!-- Row: Main -->
	<div class="bcu-app-bar-row-main {classesRowMain}">
		<!-- Slot: lead -->
		{#if $$slots['bcu-app-bar-lead']}
			<div class="bcu-app-bar-lead {classesSlotLead}"><slot name="bcu-app-bar-lead" /></div>
		{/if}
		<!-- Slot: default -->
		<div class="bcu-app-bar-default {classesSlotDefault}"><slot /></div>
		<!-- Slot: trail -->
		{#if $$slots['bcu-app-bar-trail']}
			<div class="bcu-app-bar-trail {classesSlotTrail}"><slot name="bcu-app-bar-trail" /></div>
		{/if}
	</div>
	<!-- Row: Headline -->
	{#if $$slots['bcu-app-bar-headline']}
		<div class="bcu-app-bar-row-headline {classesRowHeadline}">
			<slot name="bcu-app-bar-headline" />
		</div>
	{/if}
</div>
