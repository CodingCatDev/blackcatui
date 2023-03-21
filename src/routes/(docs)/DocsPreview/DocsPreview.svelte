<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { CodeBracket, Eye, Swatch } from '@steeze-ui/heroicons';

	import { slide } from 'svelte/transition';
	// Components
	import RadioGroup from '$lib/components/Inputs/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Inputs/Radio/RadioItem.svelte';
	// Settings
	import { backgrounds } from './options';

	// Slots
	/**
	 * @slot bcu-previewer-lead - Provides an area for icon like warning triangle
	 * @slot bcu-previewer-preview - Provides a vertical set of text information that fills the available width of the alert.
	 * @slot bcu-previewer-trail - Provides a trailing area to house interactive action buttons.
	 * @slot bcu-previewer-footer - Provides a trailing area to house interactive action buttons.
	 * @slot bcu-previewer-source - Provides a trailing area to house interactive action buttons.
	 */

	// Props
	/** Provide a label to replace the preview/code buttons. */
	export let label = '';
	/** Enable the mobile responsive settings */
	export let responsive = false;
	/** Force and append a custom color value. */
	export let background = 'primary-to-secondary';

	// Props (regions)
	/** Provide arbitrary classes to the header region. */
	export let regionHeader = '';
	/** Provide arbitrary classes to the preview viewport. */
	export let regionViewport = '';
	/** Provide arbitrary classes to the content region. */
	export let regionPreview = '';
	/** Provide arbitrary classes to the footer region. */
	export let regionFooter = '';
	/** Provide arbitrary classes to the source code region. */
	export let regionSource = '';

	// Classes
	const cBase =
		'shadow-2xl shadow-surface-500/10 dark:shadow-black/10 rounded-container-token overflow-hidden';
	const cHeader = 'bg-surface-200-700-token p-4 flex justify-between items-center gap-4';
	const cSwatches = 'variant-soft p-4 grid grid-cols-6 sm:grid-cols-12 gap-2';
	const cSwatchCell = 'ring-[1px] ring-surface-500/50 aspect-square rounded';
	const cViewport = 'p-4 md:p-10 space-y-4';
	const cContent = 'flex justify-center items-center mx-auto transition-[width] duration-200';
	const cFooter = 'variant-soft p-4';
	const cSource = 'bg-surface-100-800-token p-4 space-y-4';

	// Local
	let tabView: string = 'preview';
	let radioSize: string = 'full';
	let swatches = false;

	function toggleSwatches(): void {
		swatches = !swatches;
	}

	function swatchHandler(key: string): void {
		background = key;
	}

	// State
	$: resizableWidth = radioSize === 'mobile' ? 'w-[320px]' : 'w-full';
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${regionHeader}`;
	$: classesSwatches = `${cSwatches}`;
	$: classesViewport = `${cViewport} ${backgrounds[background]} ${regionViewport}`;
	$: classesPreview = `${cContent} ${resizableWidth} ${regionPreview}`;
	$: classesFooter = `${cFooter} ${regionFooter}`;
	$: classesSource = `${cSource} ${regionSource}`;
</script>

<div class="bcu-previewer {classesBase}">
	<!-- Header -->
	<header class="bcu-previewer-header {classesHeader}">
		{#if label}
			<span class="text-2xl font-bold capitalize">{label}</span>
		{:else}
			<!-- View Toggle -->
			<RadioGroup>
				<RadioItem bind:group={tabView} name="view" value="preview" title="Preview">
					<Icon src={Eye} theme="solid" class="w-6" />
				</RadioItem>
				<RadioItem bind:group={tabView} name="view" value="code" title="Code">
					<Icon src={CodeBracket} theme="solid" class="w-6" />
				</RadioItem>
			</RadioGroup>
			<div class="flex justify-between gap-4">
				<!-- Responsive Settings -->
				{#if responsive}
					<RadioGroup class="hidden md:flex">
						<RadioItem bind:group={radioSize} name="size" value="mobile"
							><i class="fa-solid fa-mobile-screen text-sm" /></RadioItem
						>
						<RadioItem bind:group={radioSize} name="size" value="full"
							><i class="fa-solid fa-display text-sm" /></RadioItem
						>
					</RadioGroup>
				{/if}
				<!-- Toggle Swatches -->
				<button
					class="bcu-button {swatches ? 'variant-filled' : 'variant-soft'}"
					on:click={toggleSwatches}
					title="Backgrounds"
				>
					<Icon src={Swatch} theme="solid" class="w-6" />
				</button>
			</div>
		{/if}
	</header>
	{#if tabView === 'preview'}
		<!-- Swatches -->
		{#if swatches}
			<div class="previewer-swatches {classesSwatches}" transition:slide|local={{ duration: 200 }}>
				{#each Object.entries(backgrounds) as [k, v], i}
					<!-- prettier-ignore -->
					<button type="button" class="{cSwatchCell} {v}" on:click={() => { swatchHandler(k) }} title={k}>
						{#if i === 0}<i class="fa-regular fa-circle-xmark text-xl"></i>{/if}
					</button>
				{/each}
			</div>
		{/if}
		<!-- Viewport -->
		<div class="bcu-previewer-viewport {classesViewport}">
			<!-- Slot: Lead -->
			{#if $$slots['bcu-previewer-lead']}<div class="bcu-previewer-lead">
					<slot name="bcu-previewer-lead" />
				</div>{/if}
			<!-- Slot: Preview -->
			<div class="bcu-previewer-preview {classesPreview}">
				<slot name="bcu-previewer-preview">(preview)</slot>
			</div>
			<!-- Slot: Trail -->
			{#if $$slots['bcu-previewer-trail']}<div class="bcu-previewer-trail">
					<slot name="bcu-previewer-trail" />
				</div>{/if}
		</div>
		{#if $$slots['bcu-previewer-footer']}<footer class="bcu-previewer-footer {classesFooter}">
				<slot name="bcu-previewer-footer" />
			</footer>{/if}
	{:else if tabView === 'code'}
		<!-- Source -->
		<div class="bcu-previewer-source {classesSource}">
			<slot name="bcu-previewer-source">(source)</slot>
		</div>
	{/if}
</div>
