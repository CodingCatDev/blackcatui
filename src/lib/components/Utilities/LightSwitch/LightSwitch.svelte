<script lang="ts">
	import {
		modeCurrent,
		setModeUserPrefers,
		setModeCurrent,
		setInitialClassState
	} from './lightswitch';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun, Moon } from '@steeze-ui/heroicons';

	// Types
	import type { CssClasses } from '$lib';
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// Props
	/** Provide classes to set the light background color. */
	export let bgLight: CssClasses = 'bg-surface-50';
	/** Provide classes to set the dark background color. */
	export let bgDark: CssClasses = 'bg-surface-900';
	/** Provide classes to set the light SVG fill color. */
	export let fillLight: CssClasses = 'fill-surface-50';
	/** Provide classes to set the dark SVG fill color. */
	export let fillDark: CssClasses = 'fill-surface-900';
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'w-12';
	/** Provide classes to set height styles. Should be half of width. */
	export let height: CssClasses = 'h-6';
	/** Provide classes to set ring styles. */
	export let ring: CssClasses = 'ring-[1px] ring-surface-500/30';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-token';

	// Classes
	const cTransition = `transition-all duration-[200ms]`;
	const cTrack = 'cursor-pointer';
	const cThumb = 'aspect-square scale-[0.8] flex justify-center items-center';
	const cIcon = 'w-[90%] aspect-square';

	function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
	}

	// State
	$: trackBg = $modeCurrent === true ? bgLight : bgDark;
	$: thumbBg = $modeCurrent === true ? bgDark : bgLight;
	$: thumbPosition = $modeCurrent === true ? 'translate-x-[100%]' : '';
	$: iconFill = $modeCurrent === true ? fillLight : fillDark;
	// Reactive
	$: classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${
		$$props.class ?? ''
	}`;
	$: classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
	$: classesIcon = `${cIcon} ${iconFill}`;
</script>

<svelte:head>
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div
	class="lightswitch-track {classesTrack}"
	on:click={onToggleHandler}
	on:click
	on:keydown={onKeyDown}
	on:keydown
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
	aria-checked={$modeCurrent}
	title="Toggle {$modeCurrent === true ? 'Dark' : 'Light'} Mode"
	tabindex="0"
>
	<!-- Thumb -->
	<div class="lightswitch-thumb {classesThumb}">
		{#if $modeCurrent}
			<Icon src={Sun} theme="solid" class={classesIcon} />
		{:else}
			<Icon src={Moon} theme="solid" class={classesIcon} />
		{/if}
	</div>
</div>
