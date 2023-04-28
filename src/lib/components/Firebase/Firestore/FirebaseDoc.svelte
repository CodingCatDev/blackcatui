<script lang="ts">
	// Slots
	/**
	 * @slot bcu-firebase-doc-loading - Loading of doc
	 */

	import type { DocumentReference, Firestore } from 'firebase/firestore';
	import { docStore, sdk } from '../stores';

	// TODO figure out how to make generics work
	// code below will not work without mandatory startWith value
	export let ref: string | DocumentReference;
	export let firestore: Firestore = $sdk?.firestore;
	export let startWith: any = undefined;

	let store = docStore(firestore, ref, startWith);
</script>

{#if $store !== undefined}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="bcu-firebase-doc-loading" />
{/if}
