<script lang="ts">
	// Slots
	/**
	 * @slot bcu-firebase-user-signedout - Only Visible when no user
	 */
	import type { Auth, User } from 'firebase/auth';
	import { sdk, userStore } from '../stores';

	export let auth: Auth = $sdk?.auth;

	const user = userStore(auth);
</script>

{#if $user}
	<slot user={$user} />
{:else}
	<slot name="bcu-firebase-user-signedout" />
{/if}
