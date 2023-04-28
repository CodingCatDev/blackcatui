<script lang="ts">
	// Slots
	/**
	 * @slot bcu-firebase-collection-loading - Loading of collection
	 */

	import type { CollectionReference, Firestore, Query } from 'firebase/firestore';
	import { collectionStore, sdk } from '../stores';

	export let ref: string | CollectionReference | Query;
	export let firestore: Firestore = $sdk?.firestore;
	export let startWith: any = undefined;

	let store = collectionStore(firestore, ref, startWith);
</script>

{#if $store !== undefined}
	<slot data={$store} ref={store.ref} count={$store?.length ?? 0} />
{:else}
	<slot name="bcu-firebase-collection-loading" />
{/if}
