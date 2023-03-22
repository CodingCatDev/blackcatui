import { DocsFeature, type DocsShellSettings } from './types';

export const docShellDefaults: DocsShellSettings = {
	// Heading
	feature: DocsFeature.Component,
	name: '(name)',
	description: '(description)',

	// Meta
	imports: [],
	types: [],
	stylesheetIncludes: [],
	stylesheets: [],
	package: {
		name: '@codingcatdev/blackcatui',
		url: 'https://www.npmjs.com/package/@codingcatdev/blackcatui'
	},
	source: undefined,
	aria: undefined,
	dependencies: [],

	// Docs
	components: [],
	restProps: undefined,
	parameters: [],
	classes: [],
	keyboard: []
};
