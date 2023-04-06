<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun, Moon } from '@steeze-ui/heroicons';

	// Components
	import Avatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Breadcrumbs',
		description: 'Displays the current navigation hierarchy.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/breadcrumbs'],
		source: 'styles/tailwindcss/breadcrumbs.css',
		classes: [
			['<code>bcu-breadcrumb</code>', '-', 'Add to an <em>ol</em> tag element.'],
			[
				'<code>bcu-breadcrumb-nonresponsive</code>',
				'-',
				'Shows all crumbs on small mobile breakpoints.'
			],
			['<code>crumb</code>', '-', 'Apply to each crumb list item element.'],
			['<code>crumb-separator</code>', '-', 'Apply to each separator list item element.']
		]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="card p-4 text-token flex justify-center">
					<ol class="bcu-breadcrumb">
						<li class="crumb"><a href="/tailwindcss/breadcrumbs">Skeleton</a></li>
						<li class="crumb-separator" aria-hidden>&rsaquo;</li>
						<li class="crumb"><a href="/tailwindcss/breadcrumbs">Elements</a></li>
						<li class="crumb-separator" aria-hidden>&rsaquo;</li>
						<li>Breadcrumbs</li>
					</ol>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
				<CodeBlock
					language="html"
					code={`
<ol class="bcu-breadcrumb">
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">Skeleton</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">Elements</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Breadcrumbs</li>
</ol>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>

		<section class="space-y-4">
			<h2>Separators</h2>
			<!-- prettier-ignore -->
			<p>Replace the contents of the <code>.crumb-separator</code> element with an icon or any valid <a href="https://unicode-table.com/en/sets/arrow-symbols/#right-arrows" target="_blank" rel="noreferrer">unicode symbol</a>. For accessibility, use <code>aria-hidden</code> to hide this element from screen readers.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex justify-center">
						<ol class="bcu-breadcrumb">
							<li class="crumb"><a href="/tailwindcss/breadcrumbs">Home</a></li>
							<li class="crumb-separator" aria-hidden>/</li>
							<li class="crumb"><a href="/tailwindcss/breadcrumbs">Blog</a></li>
							<li class="crumb-separator" aria-hidden>/</li>
							<li>Article</li>
						</ol>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<ol class="bcu-breadcrumb">
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">Home</a></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">Blog</a></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li>Article</li>
</ol>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Icons</h2>
			<p>Add your icon before or after your anchor tag within the <code>.crumb</code> list item.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex justify-center">
						<ol class="bcu-breadcrumb mt-1">
							<li class="crumb">
								<a href="/tailwindcss/breadcrumbs">
									<Icon src={Sun} class="w-6" />
								</a>
							</li>
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
							<li class="crumb">
								<a href="/tailwindcss/breadcrumbs">
									<Icon src={Moon} class="w-6" />
								</a>
							</li>
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
							<li>Current</li>
						</ol>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<ol class="bcu-breadcrumb mt-1">
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">(icon)</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/tailwindcss/breadcrumbs">(icon)</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Current</li>
</ol>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Mixed Media</h2>
			<p>Mix and match buttons, avatars, and text.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex justify-center">
						<ol class="bcu-breadcrumb">
							<li class="crumb">
								<a
									href="/tailwindcss/breadcrumbs"
									class="bcu-button bcu-button-sm variant-soft-primary">Users</a
								>
							</li>
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
							<li class="crumb">
								<a href="/tailwindcss/breadcrumbs">
									<Avatar
										src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
										alt="Xena"
										class="bcu-avatar-xs"
									/>
								</a>
							</li>
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
							<li>Profile</li>
						</ol>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<ol class="bcu-breadcrumb">
	<li class="crumb"><a href="/tailwindcss/breadcrumbs" class="bcu-button bcu-button-sm variant-soft-primary">Users</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb">
		<a href="/tailwindcss/breadcrumbs"><Avatar src="https://i.pravatar.cc/?img=48" width="w-8" /></a>
	</li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Profile</li>
</ol>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Non-Responsive</h2>
			<p>
				Breadcrumbs are responsive by default and will auto-hide all but the last two crumb elements
				on small screens. If you wish to disable this behavior, replace <code>.bcu-breadcrumb</code>
				with <code>.bcu-breadcrumb-nonresponsive</code>.
			</p>
			<CodeBlock language="html" code={`<ol class="bcu-breadcrumb-nonresponsive">...</ol>`} />
		</section>
		<section class="space-y-4">
			<h2>Using #Each Loops</h2>
			<p>
				Use the following technique to ensure the <em>current</em> item is formatted properly and prevent
				an extra seperator at the end.
			</p>
			<CodeBlock
				language="ts"
				code={`
const myBreadcrumbs = [
	{ label: 'Foo', link: '/foo' },
	{ label: 'Bar', link: '/bar' },
	{ label: 'Fizz', link: '/fizz' },
	{ label: 'Buzz', link: '/buzz' }
];
			`}
			/>
			<CodeBlock
				language="html"
				code={`
<ol class="bcu-breadcrumb">
	{#each myBreadcrumbs as crumb, i}
		<!-- If crumb index is less than the breadcrumb length minus 1 -->
		{#if i < myBreadcrumbs.length - 1}
			<li class="crumb"><a href={crumb.link}>{crumb.label}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{:else}
			<li class="crumb">{crumb.label}</li>
		{/if}
	{/each}
</ol>
			`}
			/>
		</section>
	</section>
</DocsShell>
