<script lang="ts">
	// Slots
	/**
	 * @slot bcu-app-shell-header - Insert fixed header content, such as BlackCatUI's App Bar component.
	 * @slot bcu-app-shell-sidebar-left - Hidden when empty. Allows you to set fixed left sidebar content.
	 * @slot bcu-app-shell-sidebar-right - Hidden when empty. Allows you to set fixed right sidebar content.
	 * @slot bcu-app-shell-page-header - Insert content that resides above your page content. Great for global alerts.
	 * @slot bcu-app-shell-page-footer - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot bcu-app-shell-footer - Insert fixed footer content. Not recommended for most layouts.
	 */

	// Types
	import type { CssClasses } from '$lib';

	// Props (regions)
	/** Apply arbitrary clases to the entire `#page` region. */
	export let regionPage: CssClasses = '';
	/** Apply arbitrary clases to the `header` slot container element */
	export let slotHeader: CssClasses = 'z-10';
	/** Apply arbitrary clases to the `sidebarLeft` slot container element */
	export let slotSidebarLeft: CssClasses = 'w-auto';
	/** Apply arbitrary clases to the `sidebarRight` slot container element */
	export let slotSidebarRight: CssClasses = 'w-auto';
	/** Apply arbitrary clases to the `pageHeader` slot container element */
	export let slotPageHeader: CssClasses = '';
	/** Apply arbitrary clases to the `pageContent` slot container element */
	export let slotPageContent: CssClasses = '';
	/** Apply arbitrary clases to the `pageFooter` slot container element */
	export let slotPageFooter: CssClasses = '';
	/** Apply arbitrary clases to the `footer` slot container element */
	export let slotFooter: CssClasses = '';

	// Base Classes
	const cBaseAppShell = 'w-full h-full flex flex-col overflow-hidden';
	const cContentArea = 'w-full h-full flex overflow-hidden';
	const cPage = 'flex-1 overflow-x-hidden flex flex-col';
	const cSidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto';
	const cSidebarRight = 'flex-none overflow-x-hidden overflow-y-auto';

	// Reactive Classes
	$: classesBase = `${cBaseAppShell} ${$$props.class ?? ''}`;
	$: classesheader = `${slotHeader}`;
	$: classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
	$: classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
	$: classesPageHeader = `${slotPageHeader}`;
	$: classesPageContent = `${slotPageContent}`;
	$: classesPageFooter = `${slotPageFooter}`;
	$: classesFooter = `${slotFooter}`;
</script>

<div id="bcu-app-shell" class={classesBase} data-testid="bcu-app-shell">
	<!-- Slot: Header -->
	{#if $$slots['bcu-app-shell-header']}
		<header id="shell-header" class="flex-none {classesheader}">
			<slot name="bcu-app-shell-header" />
		</header>
	{/if}

	<!-- Content Area -->
	<div class="flex-auto {cContentArea}">
		<!-- Slot: Sidebar (left) -->
		{#if $$slots['bcu-app-shell-sidebar-left']}
			<aside id="bcu-app-shell-sidebar-left" class={classesSidebarLeft}>
				<slot name="bcu-app-shell-sidebar-left" />
			</aside>
		{/if}

		<!-- Page -->
		<div id="bcu-app-shell-page" class="{regionPage} {cPage}" on:scroll>
			<!-- Slot: Page Header -->
			{#if $$slots['bcu-app-shell-page-header']}
				<header id="bcu-app-shell-page-header" class="flex-none {classesPageHeader}">
					<slot name="bcu-app-shell-page-header">(slot:header)</slot>
				</header>
			{/if}

			<!-- Slot: Page Content (default) -->
			<main id="bcu-app-shell-page-content" class="flex-auto {classesPageContent}"><slot /></main>

			<!-- Slot: Page Footer -->
			{#if $$slots['bcu-app-shell-page-footer']}
				<footer id="bcu-app-shell-page-footer" class="flex-none {classesPageFooter}">
					<slot name="bcu-app-shell-page-footer">(slot:footer)</slot>
				</footer>
			{/if}
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if $$slots['bcu-app-shell-sidebar-right']}
			<aside id="bcu-app-shell-sidebar-right" class={classesSidebarRight}>
				<slot name="bcu-app-shell-sidebar-right" />
			</aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if $$slots['bcu-app-shell-footer']}
		<footer id="bcu-app-shell-footer" class="flex-none {classesFooter}">
			<slot name="bcu-app-shell-footer" />
		</footer>
	{/if}
</div>
