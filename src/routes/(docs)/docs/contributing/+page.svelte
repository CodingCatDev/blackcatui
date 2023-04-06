<script lang="ts">
	// Core
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header">
		<div class="flex flex-col gap-10">
			<h1>Contributing</h1>
			<p>
				Thank you for your interest in contributing to BlackCatUI. We ask that you please review the
				sections below in full before submitting your first pull request.
			</p>

			<aside class="bcu-alert variant-filled-primary inline-block">
				First and foremost this project stems completely from Skeleton and won't be updated as
				often, as it serves as CodingCat.dev's main package. With that said if you are looking to
				contribute to something greater than BlackCatUI please see <a
					class="!text-token"
					href="https://www.skeleton.dev/docs/contributing">Skeleton Contributing</a
				>
			</aside>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<!-- Resources -->
			<section class="space-y-4">
				<h2>OpenSource Guides</h2>
				<div class="bcu-card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
					<div class="space-y-4">
						<h3 data-bcu-toc-ignore>How to Contribute</h3>
						<p>
							New to open source? Read this helpful guide covering the basic concepts and best
							practices.
						</p>
					</div>
					<a
						class="bcu-button variant-filled-tertiary place-self-center"
						href="https://github.com/firstcontributions/first-contributions"
						target="_blank"
						rel="noreferrer"
					>
						<div class="flex gap-1 justify-between w-full">
							Read Guide
							<Icon src={ArrowTopRightOnSquare} class="w-6" />
						</div>
					</a>
				</div>

				<div class="bcu-card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
					<div class="space-y-4">
						<h3 data-bcu-toc-ignore>First Contributions</h3>
						<p>Need a guided tour? Follow this step-by-step guide explaining the process.</p>
					</div>
					<a
						class="bcu-button variant-filled-tertiary place-self-center"
						href="https://github.com/firstcontributions/first-contributions"
						target="_blank"
						rel="noreferrer"
					>
						<div class="flex gap-1 justify-between w-full">
							Read Guide
							<Icon src={ArrowTopRightOnSquare} class="w-6" />
						</div>
					</a>
				</div>
			</section>

			<hr />

			<section class="space-y-4">
				<h2>Guides</h2>
				<!-- Basics -->
				<div class="bcu-card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
					<div class="space-y-4">
						<h3 data-bcu-toc-ignore>Requirements</h3>
						<p>
							Ready to contribute to Skeleton? Read our requirements and recommended workflow
							process.
						</p>
					</div>
					<a
						class="bcu-button variant-filled-primary place-self-center"
						href="/docs/contributing/requirements"
					>
						Read Guide
					</a>
				</div>
				<!-- Style Guide -->
				<div class="bcu-card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
					<div class="space-y-4">
						<h3 data-bcu-toc-ignore>Style Guide</h3>
						<p>
							Review recommended conventions for writing code, naming properties, and handling CSS
							styling.
						</p>
					</div>
					<a
						class="bcu-button variant-filled-primary place-self-center"
						href="/docs/contributing/style-guide"
					>
						Read Guide
					</a>
				</div>
				<!-- Docs Guide -->
				<div class="bcu-card variant-glass p-4 grid grid-cols-[1fr_auto] gap-4">
					<div class="space-y-4">
						<h3 data-bcu-toc-ignore>Documentation Guide</h3>
						<p>
							Good documentation makes life easier for everyone involved, view our recommendations.
						</p>
					</div>
					<a
						class="bcu-button variant-filled-primary place-self-center"
						href="/docs/contributing/documentation"
					>
						Read Guide
					</a>
				</div>
			</section>

			<hr />

			<section class="space-y-4">
				<h2>Videos</h2>
				<!-- Testing (video) -->
				Coming Soon...
			</section>
		</section>
	</svelte:fragment>
</DocsLayout>
