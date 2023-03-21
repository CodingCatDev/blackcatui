import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Drawer from '$lib/components/Navigation/Drawer/Drawer.svelte';
import { drawerStore } from '$lib/components/Navigation/Drawer/stores';

describe('Drawer.svelte', () => {
	it('Drawer hidden on load', async () => {
		const { getByTestId } = render(Drawer, {});
		// FIXME: open drawer and verify elements exist
		// drawerStore.open();
		// expect(getByTestId('drawer-backdrop')).toBeFalsy();
		// expect(getByTestId('drawer')).toBeFalsy();
	});
});
