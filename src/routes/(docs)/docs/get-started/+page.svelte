<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import { themes } from '../themes';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { ExclamationTriangle } from '@steeze-ui/heroicons';

	// Local
	let activeTheme = themes[0];
	$: activeThemeStylesheet = `import '@codingcatdev/blackcatui/themes/theme-${activeTheme.file}.css';`;

	// Copy Theme Import to Clipboard
	function setActiveTheme(theme: any): void {
		activeTheme = theme;
	}
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<div class="flex flex-col gap-10">
			<!-- Install -->
			<section class="flex flex-col gap-10">
				<div class="flex flex-col gap-4">
					<header class="space-y-4">
						<h1>Get Started</h1>
						<p>
							Please be aware that BlackCatUI currently only supports Svelte applications built
							using SvelteKit. We recommend at least moderate experience with
							<a rel="noreferrer" href="https://svelte.dev/tutorial/basics">Svelte</a>
							,
							<a rel="noreferrer" href="https://learn.svelte.dev/tutorial/welcome-to-svelte">
								SvelteKit
							</a>
							, and
							<a rel="noreferrer" href="https://tailwindcss.com/docs/utility-first">
								Tailwind CSS
							</a>
							before your proceed.
						</p>
					</header>
					<hr />
					<section class="space-y-4">
						<h2>Install BlackCatUI</h2>
					</section>
					<p>
						If you have an existing SvelteKit application, skip to installing the BlackCatUI package
						from NPM. Otherwise let's begin by creating a new
						<a rel="noreferrer" href="https://kit.svelte.dev/docs/creating-a-project"
							>SvelteKit project</a
						>.
					</p>
				</div>
				<CodeBlock
					language="console"
					code={`
npm create svelte@latest my-blackcatui-app
cd my-blackcatui-app
npm install
				`}
				/>
				<p>
					Install the
					<a rel="noreferrer" href="https://www.npmjs.com/package/@codingcatdev/blackcatui">
						BlackCatUI package
					</a>
					from NPM.
				</p>
				<CodeBlock
					language="console"
					code={`
npm i @codingcatdev/blackcatui --save-dev
				`}
				/>
			</section>

			<!-- Tailwind -->
			<section class="flex flex-col gap-10">
				<div class="space-y-4">
					<p>
						<a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer"
							>Svelte-Add</a
						> makes it easy to setup Tailwind in your project. Run the following commands in your terminal.
					</p>
					<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
					<!-- prettier-ignore -->
					<p>Then open your global stylesheet in <code>/src/app.postcss</code> and remove the following three <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> introduced by Svelte-Add. These are redundant as BlackCatUI automatically handles these in our stylesheets for you.</p>
					<div class="space-y-[1px]">
						<del>@tailwind base;</del>
						<del>@tailwind components;</del>
						<del>@tailwind utilities;</del>
					</div>
				</div>
				<p>
					Apply these following three changes to your <code>tailwind.config.cjs</code>, found in the
					root of your project.
				</p>
				<CodeBlock
					language="js"
					code={`
/** @type {import('tailwindcss').Config} */
module.exports = {
// 1. Apply the dark mode class setting:
darkMode: 'class',
content: [
	'./src/**/*.{html,js,svelte,ts}',
	// 2. Append the path for the BlackCatUI NPM package and files:
	require('path').join(require.resolve(
		'@codingcatdev/blackcatui'),
		'../**/*.{html,js,svelte,ts}'
	)
],
theme: {
	extend: {},
},
plugins: [
	// 3. Append the BlackCatUI plugin to the end of this list
	...require('@codingcatdev/blackcatui/tailwind/blackcatui.cjs')()
]
}
		`}
				/>
				<aside class="bcu-alert variant-ghost-warning">
					<Icon src={ExclamationTriangle} theme="solid" class="w-12" />

					<div class="bcu-alert-message">
						BlackCatUI's Tailwind plugin cannot operate alongside plugins from other UI libraries,
						such as <strong>Flowbite</strong> or
						<strong>Daisy</strong>. All three plugins modify similar settings, which means they will
						conflict.
					</div>
				</aside>
				<p>
					Note that your app will default to light mode. To manually set dark mode, append the
					following class to the HTML element within <code>/src/app.html</code>.
				</p>
				<CodeBlock language="html" code={`<html class="dark">`} />
				<p>
					If you wish to be able to toggle dark mode, review the <a href="/utilities/lightswitches"
						>Lightswitch</a
					> utility features when you complete this setup process.
				</p>
			</section>

			<!-- Stylesheet -->
			<section class="space-y-4">
				<h2>Stylesheets</h2>
				<p>
					Ensure the following stylesheets are added to your root layout in <code
						>src/routes/+layout.svelte</code
					>.
				</p>
				<aside class="bcu-alert variant-ghost-warning">
					<Icon src={ExclamationTriangle} theme="solid" class="w-12" />
					<div class="bcu-alert-message">
						<p>
							The order shown is critical to ensure these work as expected. Please be careful when
							adding or modifying these!
						</p>
					</div>
				</aside>
				<CodeBlock
					language="ts"
					code={`
// Your selected BlackCatUI theme:
import '@codingcatdev/blackcatui/themes/theme-blackcatui.css';\n
// This contains the bulk of BlackCatUI required styles:
import '@codingcatdev/blackcatui/styles/all.css';\n
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						`}
				/>

				<p>
					A highly recommended approach is to use postcss and import all of your code in <code
						>src/app.postcss</code
					> like the below example.
				</p>

				<CodeBlock
					language="css"
					code={`
@import './styles/googleio-theme.css';
@import '@codingcatdev/blackcatui/dist/styles/all.css';
@import './styles/app.css';
@import './styles/nav-list.css';
					`}
				/>

				<p>
					This way you only need a single import in your <code>src/routes/+layout.svelte</code> like
					below.
				</p>

				<CodeBlock
					language="ts"
					code={`
//Style
import '../app.postcss';
				`}
				/>
				<p>
					Allowing for you to use directives like <code>@layer components</code>
				</p>
			</section>

			<section class="flex flex-col gap-10">
				<p>
					BlackCatUI themes <a
						href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
						target="_blank"
						rel="noreferrer">integrate with Tailwind</a
					>
					and support
					<a
						href="https://tailwindcss.com/docs/background-color#changing-the-opacity"
						target="_blank"
						rel="noreferrer">color opacity</a
					>,
					<a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer"
						>dark mode</a
					>, and our powerful <a href="/docs/tokens">design tokens system</a>.
				</p>

				<p>
					If you wish to use another preset theme, select it from the list below to reveal the
					import statement. Import it in your root layout in <code>/src/routes/+layout.svelte</code
					>. Take care to replace any existing theme.
				</p>

				<!-- Presets -->
				<div class="bcu-card variant-glass p-4 space-y-4">
					<nav class="grid grid-cols-1 md:grid-cols-3 gap-5">
						{#each themes as preset}
							<div
								class="bcu-card p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4 hover:scale-105 transition-transform"
								style:background={preset.surface}
								class:scale-105={preset.file === activeTheme.file}
								on:click={() => {
									setActiveTheme(preset);
								}}
								on:keydown={() => {
									setActiveTheme(preset);
								}}
							>
								<p class="text-center font-bold !text-lg" data-toc-ignore>{preset.name}</p>
								<ul class="flex justify-center items-center -space-x-1">
									{#each preset.colors as color}
										<li class="aspect-square w-4 xl:w-5 rounded-full" style:background={color} />
									{/each}
								</ul>
							</div>
						{/each}
					</nav>
					<CodeBlock language="ts" code={activeThemeStylesheet} />
				</div>

				<!-- Theme Customization -->
				<div class="bcu-card variant-glass p-4">
					<div
						class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
					>
						<p>Learn how extend preset themes, customize backgrounds, and add custom fonts.</p>
						<a class="bcu-button variant-filled-primary" href="/docs/themes">Themes &rarr;</a>
					</div>
				</div>

				<!-- Generator -->
				<div class="bcu-card variant-glass p-4">
					<div
						class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
					>
						<p>Interested in creating your own custom theme? Try the BlackCatUI theme generator.</p>
						<a class="bcu-button variant-filled-primary" href="/docs/theme-generator"
							>Generator &rarr;</a
						>
					</div>
				</div>
			</section>
		</div>
	</svelte:fragment>
</DocsLayout>
