<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Types
	import type { CssClasses } from '$lib';

	// Actions
	import { focusTrap } from '$lib/components/Utilities/FocusTrap/focusTrap';

	// Drawer Utils
	import type { DrawerSettings } from '$lib/components/Navigation/Drawer/types';
	import { drawerStore } from '$lib/components/Navigation/Drawer/stores';

	// Props
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	export let position: 'left' | 'top' | 'right' | 'bottom' = 'right';
	/** Define the Svelte transition animation duration. */
	export let duration = 200;

	// Props (backdrop)
	/** Backdrop - Provide classes to set the backdrop background color */
	export let bgBackdrop: CssClasses = 'bg-surface-backdrop-token';
	/** Backdrop - Provide classes to set the blur style. */
	export let blur: CssClasses = 'backdrop-blur-xs';
	/** Drawer - Provide classes to set padding. */
	export let padding: CssClasses = '';

	// Props (drawer)
	/** Drawer - Provide classes to set the drawer background color. */
	export let bgDrawer: CssClasses = 'bg-surface-100-800-token';
	/** Drawer - Provide classes to set border color. */
	export let border: CssClasses = '';
	/** Drawer - Provide classes to set border radius. */
	export let rounded: CssClasses = '';
	/** Drawer - Provide classes to set the box shadow. */
	export let shadow: CssClasses = 'shadow-xl';
	/** Drawer - Provide classes to override the width. */
	export let width: CssClasses = '';
	/** Drawer - Provide classes to override the height. */
	export let height: CssClasses = '';
	/** Provide a class to override the z-index */
	export let zIndex: CssClasses = 'z-40';

	// Props (regions)
	/** Provide arbitrary classes to the backdrop region. */
	export let regionBackdrop: CssClasses = '';
	/** Provide arbitrary classes to the drawer region. */
	export let regionDrawer: CssClasses = '';

	// Props (a11y)
	/** Provide an ID of the element labeling the drawer. */
	export let labelledby = '';
	/** Provide an ID of the element describing the drawer. */
	export let describedby = '';

	// Presets
	// prettier-ignore
	const presets = {
		top: { alignment: 'items-start', width: 'w-full', height: 'h-[50%]', rounded: 'rounded-bl-container-token rounded-br-container-token' },
		bottom: { alignment: 'items-end', width: 'w-full', height: ' h-[50%]', rounded: 'rounded-tl-container-token rounded-tr-container-token' },
		left: { alignment: 'justify-start', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tr-container-token rounded-br-container-token' },
		right: { alignment: 'justify-end', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tl-container-token rounded-bl-container-token' }
	};

	// Classes
	const cBackdrop = 'fixed top-0 left-0 right-0 bottom-0 flex';
	const cDrawer = 'ox-border overflow-y-auto transition-transform';

	// Local
	let elemBackdrop: HTMLElement;
	let elemDrawer: HTMLElement;
	let drawerWidth = 0;
	let anim = { x: 0, y: 0 };

	// Record a record of default props on init
	// NOTE: these must stay in sync with the props implemented above.
	// prettier-ignore
	const propDefaults = {
		position, duration,
		bgBackdrop, blur, padding,
		bgDrawer, border, rounded, shadow,
		width, height,
		labelledby, describedby,
		regionBackdrop, regionDrawer
	};

	// Override provided props, else restore prop defaults
	// NOTE: these must stay in sync with the props implemented above.
	function applyPropSettings(settings: DrawerSettings): void {
		position = settings.position || propDefaults.position;
		duration = settings.duration || propDefaults.duration;
		// Backdrop
		bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
		blur = settings.blur || propDefaults.blur;
		padding = settings.padding || propDefaults.padding;
		// Drawer
		bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
		border = settings.border || propDefaults.border;
		rounded = settings.rounded || propDefaults.rounded;
		shadow = settings.shadow || propDefaults.shadow;
		width = settings.width || propDefaults.width;
		height = settings.height || propDefaults.height;
		// Regions
		regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
		regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
		// A11y
		labelledby = settings.labelledby || propDefaults.labelledby;
		describedby = settings.describedby || propDefaults.describedby;
	}

	function applyAnimationSettings(): void {
		if (window === undefined) return;
		// prettier-ignore
		switch (position) {
			case 'top':    anim = { x: 0, y: -window.innerWidth }; break;
			case 'bottom': anim = { x: 0, y: window.innerWidth }; break;
			case 'left':   anim = { x: -window.innerHeight, y: 0 }; break;
			case 'right':  anim = { x: window.innerHeight, y: 0 }; break;
			default: console.error('Error: unknown position property value.'); break;
		}
	}

	// Input Handlers
	function onBackdropInteraction(event: any): void {
		if (event.target === elemBackdrop) drawerStore.close();
		/** @event {{ event }} backdrop - Fires on backdrop interaction.  */
		dispatch('backdrop', event);
	}
	function onKeydownWindow(event: any): void {
		if (!$drawerStore) return;
		if (event.code === 'Escape') drawerStore.close();
	}

	// Swipping
	let swipe = {
		moving: false,
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0
	};

	function handleSwipeStart(event: TouchEvent | MouseEvent) {
		swipe.moving = true;
		if (event instanceof TouchEvent && event?.touches) {
			swipe.startX = event.touches[0].clientX;
			swipe.startY = event.touches[0].clientY;
		} else if (event instanceof MouseEvent) {
			console.log(event.movementX);
			swipe.startX = event.clientX;
			swipe.startY = event.clientY;
		}
	}
	// function handleMouseMove(event: MouseEvent) {
	// 	if (swipe.moving) {
	// 		const rect = elemDrawer.getBoundingClientRect();
	// 		const moveLeft = rect.left + event.movementX;
	// 		elemDrawer.style.left = `${moveLeft}px`;
	// 		// top += event.movementY;
	// 	}
	// }
	function handleSwipeEnd(event: TouchEvent | MouseEvent) {
		swipe.moving = false;
		console.log(swipe);

		if (event instanceof TouchEvent && event?.touches) {
			swipe.endX = event.changedTouches[0].clientX;
			swipe.endY = event.changedTouches[0].clientY;
		} else if (event instanceof MouseEvent) {
			swipe.endX = event.clientX;
			swipe.endY = event.clientY;
		}

		const deltaX = swipe.endX - swipe.startX;
		const deltaY = swipe.endY - swipe.startY;

		if (position === 'right' && deltaX > 0) {
			// swipe right
			drawerStore.close();
		} else if (position === 'left' && deltaX < 0) {
			// swipe left
			drawerStore.close();
		}
		if (position === 'bottom' && deltaY > 0) {
			// swipe right
			drawerStore.close();
		} else if (position === 'top' && deltaY < 0) {
			// swipe left
			drawerStore.close();
		}
	}

	// Drawer Subscription
	drawerStore.subscribe((settings: DrawerSettings) => {
		if (settings.open !== true) return;
		applyPropSettings(settings);
		applyAnimationSettings();
	});

	// Dynamic Styles
	$: classesPosition = presets[position].alignment;
	$: classesWidth = width ? width : presets[position].width;
	$: classesHeight = height ? height : presets[position].height;
	$: classesRounded = rounded ? rounded : presets[position].rounded;
	// Reactive
	$: classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${
		$$props.class ?? ''
	}`;
	$: classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $drawerStore.open === true}
	<!-- Backdrop -->
	<div
		bind:this={elemBackdrop}
		class="bcu-drawer-backdrop {classesBackdrop}"
		data-testid="bcu-drawer-backdrop"
		on:mousedown={onBackdropInteraction}
		on:touchstart={onBackdropInteraction}
		on:keypress
		transition:fade|local={{ duration }}
		use:focusTrap={true}
	>
		<!-- Drawer -->
		<div
			bind:this={elemDrawer}
			bind:clientWidth={drawerWidth}
			on:touchstart|passive={handleSwipeStart}
			on:touchend|passive={handleSwipeEnd}
			on:mousedown={handleSwipeStart}
			on:mouseup={handleSwipeEnd}
			class="bcu-drawer {classesDrawer}"
			data-testid="bcu-drawer"
			role="dialog"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			transition:fly|local={{ x: anim.x, y: anim.y, duration }}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
