import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import AppBar from '$lib/components/Layout/AppBar/AppBar.svelte';

describe('AppBar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppBar);
		expect(getByTestId('bcu-app-bar')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppBar, {
			props: {
				background: 'bg-primary-500',
				border: 'border border-secondary-500',
				padding: 'p-4',
				shadow: 'shadow',
				spacing: 'space-x-2',
				// Slots
				slotLead: 'bg-red-500',
				slotCenter: 'bg-green-500',
				slotTrail: 'bg-blue-500',
				// a11y
				label: 'TestAppShell',
				labelledby: 'TestLabelAppShell'
			}
		});
		expect(getByTestId('bcu-app-bar')).toBeTruthy();
	});
});
