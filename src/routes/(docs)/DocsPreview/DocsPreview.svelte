<script lang="ts">
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
						<path
							fill-rule="evenodd"
							d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</RadioItem>
				<RadioItem bind:group={tabView} name="view" value="code" title="Code">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
							clip-rule="evenodd"
						/>
					</svg>
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
					class="btn {swatches ? 'variant-filled' : 'variant-soft'}"
					on:click={toggleSwatches}
					title="Backgrounds"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
							clip-rule="evenodd"
						/>
						<path
							d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z"
						/>
					</svg>
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
