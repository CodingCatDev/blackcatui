<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// Types
	import type { CssClasses } from '$lib';

	// Props (settings)
	/** Query selector for the scrollable page element. */
	export let scrollParent: string = '#bcu-app-shell-page';
	/** Query selector for the element to scan for headings. */
	export let target: string = '#bcu-app-shell-page';
	/** Query selector for the allowed headings. From H2-H6. */
	export let allowedHeadings: string = 'h2, h3';
	/** Set the label text. */
	export let label: string = 'On This Page';

	// Props (styles)
	/** Set the component width style. */
	export let width: CssClasses = 'w-[240px]';
	/** Set the vertical spacing styles. */
	export let spacing: CssClasses = 'space-y-4';
	/** Set the row text color styles. */
	export let text: CssClasses = 'text-surface-600-300-token';
	/** Set the row hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Set the active row styles */
	export let active: CssClasses = 'bg-primary-active-token !text-on-primary-token';
	/** Set the row border radius styles. */
	export let rounded: CssClasses = 'rounded-token';

	// Props Regions
	/** Provide arbitrary styles for the label element. */
	export let regionLabel: CssClasses = 'font-bold';
	/** Provide arbitrary styles for the list element. */
	export let regionList: CssClasses = '';

	// Classes
	const cLabel: string = 'p-4 pt-0';
	const cList: string = 'list-none space-y-1';
	const cListItem: string = 'px-4 py-2 cursor-pointer';

	// Local
	let elemScrollParent: HTMLElement | null;
	let allowedHeadingsList: any = [];
	let filteredHeadingsList: HTMLElement[] = [];
	let activeHeaderId: string;

	function queryAllowedHeadingsList() {
		const elemTarget = document.querySelector(target);
		allowedHeadingsList = elemTarget?.querySelectorAll(allowedHeadings);
	}

	function generateHeadingList(): void {
		// Select only relevant headings
		allowedHeadingsList?.forEach((elem: HTMLElement) => {
			// Skip if `data-toc-ignore` attribute set
			if (elem.hasAttribute('data-toc-ignore')) return;
			// Generate a unique ID if none present
			if (!elem.id) {
				let newId = elem.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elem.id = `${newId}`;
			}
			// Implement permalink if none present
			if (!elem.querySelector('.permalink')) {
				elem.innerHTML += `<a href="#${elem.id}" class="permalink"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
</svg>
</a>`;
			}
			// Generate headings whitelist
			filteredHeadingsList.push(elem);
			// Debug
			// elem.style.backgroundColor = 'limegreen';
		});
		// Update Headings list
		filteredHeadingsList = [...filteredHeadingsList];
	}

	// Sets the indentation amount per heading
	function setHeadingClasses(headingElem: HTMLElement): string {
		if (headingElem.tagName === 'H3') return 'ml-3';
		if (headingElem.tagName === 'H4') return 'ml-6';
		if (headingElem.tagName === 'H5') return 'ml-9';
		if (headingElem.tagName === 'H6') return 'ml-12';
		return '';
	}

	// Scrolls to the selected heading
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	function scrollToHeading(headingElem: HTMLElement): void {
		const elemTarget: any = document.querySelector(`#${headingElem.id}`);
		elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	function pageScrollHandler(): void {
		const headingSizeThreadshold = 40; // px
		// List of visible headings
		let visibleHeadings: HTMLElement[] = [];
		// Loop each allowed heading from the target element
		allowedHeadingsList?.forEach((header: HTMLElement) => {
			const scrollableTop = elemScrollParent?.getBoundingClientRect().top || 0;
			const headerBoundTop = header.getBoundingClientRect().top;
			const offsetTop = headerBoundTop - scrollableTop + headingSizeThreadshold;
			// If heading visible, add to visibleHeadings
			if (offsetTop >= 0) visibleHeadings.push(header);
		});
		// Set the top-most header as the active ID
		activeHeaderId = visibleHeadings[0]?.id;
	}

	// Lifecycle
	onMount(() => {
		queryAllowedHeadingsList();
		generateHeadingList();
		// Add Scrollable Parent Listener
		elemScrollParent = document.querySelector(scrollParent);
		elemScrollParent?.addEventListener('scroll', pageScrollHandler);
		// Set initial active heading on load
		pageScrollHandler();
	});
	onDestroy(() => {
		elemScrollParent?.removeEventListener('scroll', pageScrollHandler);
	});

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

{#if filteredHeadingsList.length > 0}
	<div class="toc {classesBase}" transition:fade|local={{ duration: 100 }}>
		<nav class="toc-list {classesList}">
			<div class="toc-label {classesLabel}">{label}</div>
			{#each filteredHeadingsList as headingElem, i}
				<!-- prettier-ignore -->
				<li
					class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)} {headingElem.id === activeHeaderId ? active : ''}"
					on:click={() => { scrollToHeading(headingElem); }}
					on:click
					on:keypress
				>
					<!-- {headingElem.innerText} -->
					{headingElem.firstChild?.nodeValue}
				</li>
			{/each}
		</nav>
	</div>
{/if}
