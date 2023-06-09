<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	// Components
	import DocsThemer from '../../DocsThemer/DocsThemer.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
</script>

<section class="page-container">
	<header class="space-y-4">
		<h1>Theme Generator</h1>
		<p>
			Toggle the "Enable Preview" option to begin creating a new theme. The entire documentation
			site will update as you progress. You can navigate to different sections without losing your
			settings as long as you do not refresh the page. Disabling the preview will reset back to your
			original theme.
		</p>
	</header>

	<hr />

	<!-- Generator (new) -->
	<DocsThemer />

	<hr />

	<!-- Instructions -->
	<section class="space-y-4">
		<h2>Importing Your Theme</h2>
		<p>
			Copy and paste your theme CSS into <code>/src/theme.postcss</code>, then import the theme into
			your root layout in
			<code>/src/routes/+layout.svelte</code> instead of a premade Skeleton theme. Keep the order as
			shown.
		</p>
		<CodeBlock
			language="ts"
			code={`
// Your custom Skeleton theme:
import '../theme.postcss';\n
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';\n
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						`}
		/>
	</section>

	<hr />

	<!-- Extras -->
	<section class="space-y-4">
		<h2>Advanced Color Curation</h2>
		<p>
			Looking for deeper customization? We recommend using <a
				href="https://tailwind.simeongriggs.dev/blue/3B82F6"
				target="_blank"
				rel="noreferrer">Palette Generator</a
			>. This includes support for hue, saturation, and lightness adjustments. Pair this with the
			<a
				href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba"
				target="_blank"
				rel="noreferrer">Hex-To-RGB extension</a
			>
			to convert each Hex color value to RGB in bulk with VS Code.
		</p>
	</section>
</section>
