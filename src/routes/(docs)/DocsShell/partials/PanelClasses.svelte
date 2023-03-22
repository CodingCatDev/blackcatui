<script lang="ts">
	// Types
	import type { DocsShellSettings } from '../types';
	// Components
	import Table from '$lib/components/DataDisplay/Table/Table.svelte';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Local
	const source = {
		head: ['Keys', 'Values', 'Description'],
		body: pageData.classes ?? []
	};

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="bcu-doc-shell-classes {classesBase}">
	<Table {source} />
</div>
