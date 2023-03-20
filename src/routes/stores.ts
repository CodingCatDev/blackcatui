import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/components/Utilities/LocalStorageStore/LocalStorageStore';

// Svelte Writable Stores ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Local Storage Stores ---

// Persists select preset theme
export const storeTheme: Writable<string> = localStorageStore('bcu-theme', 'blackcatui');
