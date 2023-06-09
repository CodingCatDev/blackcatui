<script lang="ts">
	// Slots
	/**
	 * @slot bcu-app-rail-lead - Provides content at the top of the rail, e.g. a logo.
	 * @slot bcu-app-rail-trail - Provides content at the bottom of the rail, e.g. account.
	 */

	// Types
	import type { CssClasses } from '$lib';

	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Props
	/** Provide a writable store to maintain navigation selection.
	 * @type {Writeable(any)}
	 */
	export let selected: Writable<any> = writable(undefined);
	/** Provide classes to set the background color. */
	export let background: CssClasses = 'bg-surface-100-800-token';
	/** Provide classes to set the background color. */
	export let border: CssClasses = '';
	/** Provide classes to set the tile active tile background. */
	export let active: CssClasses = 'bg-primary-active-token';
	/** Provide classes to set the tile hover background color. */
	export let hover: CssClasses = 'bg-primary-hover-token';
	/** Provide classes to set the width. */
	export let width: CssClasses = 'w-[70px] sm:w-20';
	/** Provide classes to set the height. */
	export let height: CssClasses = 'h-full';
	/** Provide a class to set the grid gap. */
	export let gap: CssClasses = 'gap-0';

	// Props (regions)
	/** Provide arbitrary classes to the lead region. */
	export let regionLead: CssClasses = '';
	/** Provide arbitrary classes to the default region. */
	export let regionDefault: CssClasses = '';
	/** Provide arbitrary classes to the trail region. */
	export let regionTrail: CssClasses = '';

	// Context
	setContext('selected', selected);
	setContext('active', active);
	setContext('hover', hover);

	// Base Classes
	const cBase = 'grid grid-rows-[auto_1fr_auto] overflow-y-auto';

	// Reactive
	$: classesBase = `${cBase} ${background} ${border} ${width} ${height} ${gap} ${
		$$props.class || ''
	}`;
</script>

<!-- @component A vertical navigation rail component. -->

<div class="bcu-app-rail {classesBase}">
	<!-- Slot: lead -->
	<div class="bcu-app-rail-lead {regionLead}"><slot name="bcu-app-rail-lead" /></div>
	<!-- Slot: Default -->
	<div class="bcu-app-rail-default {regionDefault}"><slot /></div>
	<!-- Slot: lead -->
	<div class="bcu-app-rail-trail {regionTrail}"><slot name="bcu-app-rail-trail" /></div>
</div>
