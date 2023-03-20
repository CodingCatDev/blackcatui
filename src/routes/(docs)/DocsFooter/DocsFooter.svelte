<script lang="ts">
	// Logo
	import AJAlt from '../DocsLogos/AJAlt.svelte';

	// Base Classes
	const cBase =
		'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRowOne =
		'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo =
		'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';
</script>

<div class="page-footer {cBase}">
	<div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
		<!-- Row 1 -->
		<section class={cRowOne}>
			<div
				class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start"
			>
				<AJAlt />
				<p class="!text-sm opacity-80">
					UI Toolkit for <a href="https://svelte.dev/">Svelte</a> +
					<a href="https://tailwindcss.com/">Tailwind CSS</a>.
				</p>
				<p class="!text-sm opacity-80">
					Originally based on <a href="https://www.skeleton.dev/">Skeleton</a>.
				</p>
			</div>
			<div class="hidden md:grid grid-cols-3 gap-8">
				<div class="space-y-6">
					<h6>Explore</h6>
					<ul class="space-y-3">
						<li><a href="/docs/introduction">Introduction</a></li>
						<li><a href="/docs/get-started">Get Started</a></li>
						<li><a href="/blog">Blog</a></li>
					</ul>
				</div>
				<div class="space-y-6">
					<h6>Project</h6>
					<ul class="space-y-3">
						<li>
							<a href="https://github.com/CodingCatDev" target="_blank" rel="noreferrer"
								>Github Organization</a
							>
						</li>
						<li>
							<a href="https://www.npmjs.com/org/codingcatdev" target="_blank" rel="noreferrer"
								>NPM Organization</a
							>
						</li>
						<li>
							<a
								href="https://www.npmjs.com/package/@codingcatdev/blackcatui"
								target="_blank"
								rel="noreferrer">NPM Package</a
							>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<hr class="opacity-20" />

		<!-- Row 2 -->
		<section class={cRowTwo}>
			<p class="text-xs">
				<a
					href="https://github.com/CodingCatDev/blackcatui/blob/master/LICENSE"
					target="_blank"
					rel="noreferrer"
				>
					MIT License
				</a>
				<span class="opacity-10 mx-2">|</span>
				<a href="https://codingcat.dev/" target="_blank" rel="noreferrer">CodingCat.dev</a>
			</p>
			<div class="flex space-x-4">
				<a
					class="btn variant-soft"
					href="https://github.com/CodingCatDev/blackcatui"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-github" />
					<span class="hidden md:inline-block ml-2">Github</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://discord.gg/vM2bagU"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-discord" />
					<span class="hidden md:inline-block ml-2">Discord</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://twitter.com/CodingCatDev"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-twitter" />
					<span class="hidden md:inline-block ml-2">Twitter</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://www.youtube.com/CodingCatDev"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-youtube" />
					<span class="hidden md:inline-block ml-2">YouTube</span>
				</a>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	a {
		@apply !no-underline;
	}
</style>
