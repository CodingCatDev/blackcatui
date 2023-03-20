<script lang="ts">
	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled-error';

	// Current Component
	import Avatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte';
	const message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus.';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2>Image Avatars</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="flex gap-8">
							<Avatar
								{variant}
								src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
								alt="Bill Clinton"
								class="avatar-xs"
							/>
							<Avatar
								{variant}
								src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
								alt="Bill Clinton"
								class="avatar-sm"
							/>
							<Avatar
								{variant}
								src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
								alt="Bill Clinton"
							/>
							<Avatar
								{variant}
								src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
								alt="Bill Clinton"
								class="avatar-lg"
							/>
							<Avatar
								{variant}
								src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
								alt="Bill Clinton"
								class="avatar-xl"
							/>
						</div>
					</svelte:fragment>

					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock
							language="html"
							code={`
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="avatar-xs"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="avatar-sm"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="avatar-lg"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="avatar-xl"
/>
				`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</div>
			<div class="flex flex-col gap-4">
				<h2>Letter Avatars</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<div class="flex gap-8">
							<Avatar {variant} class="avatar-xs">
								<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
							</Avatar>
							<Avatar {variant} class="avatar-sm">
								<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
							</Avatar>
							<Avatar {variant}>
								<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
							</Avatar>
							<Avatar {variant} class="avatar-lg">
								<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
							</Avatar>
							<Avatar {variant} class="avatar-xl">
								<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
							</Avatar>
						</div>
					</svelte:fragment>

					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock
							language="html"
							code={`
<Avatar {variant} class="avatar-xs">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="avatar-sm">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant}>
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="avatar-lg">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="avatar-xl">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
				`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</div>
		</section>
	</svelte:fragment>
	<svelte:fragment slot="bcu-docs-aside">Show list here</svelte:fragment>
</DocsLayout>
