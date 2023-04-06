<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
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
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
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
		</div>
	</svelte:fragment>
</DocsLayout>
