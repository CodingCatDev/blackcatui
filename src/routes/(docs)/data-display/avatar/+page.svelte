<script lang="ts">
	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	let variant = 'variant-filled-error';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';

	// Current Component
	import Avatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte';
	import sveldAvatar from '$lib/components/DataDisplay/Avatar/Avatar.svelte?raw&sveld';

	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Avatar',
		description: 'Display user avatars with an image or initials.',
		imports: ['Avatar'],
		source: 'components/DataDisplay/Avatar',
		components: [{ sveld: sveldAvatar }]
	};
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-10">
		<div class="flex flex-col gap-4">
			<h2>Image Avatars</h2>
			<DocsPreview>
				<svelte:fragment slot="bcu-previewer-preview">
					<div class="flex flex-col md:flex-row gap-2 md:gap-2">
						<Avatar
							{variant}
							src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
							alt="Bill Clinton"
							class="bcu-avatar-xs"
						/>
						<Avatar
							{variant}
							src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
							alt="Bill Clinton"
							class="bcu-avatar-sm"
						/>
						<Avatar
							{variant}
							src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
							alt="Bill Clinton"
						/>
						<Avatar
							{variant}
							src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
							alt="Bill Clinton"
							class="bcu-avatar-lg"
						/>
						<Avatar
							{variant}
							src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
							alt="Bill Clinton"
							class="bcu-avatar-xl"
						/>
					</div>
				</svelte:fragment>

				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<Avatar
	{variant}
	src="https://media.codingcat.dev/image/upload/c_thumb,h_200,w_200/main-codingcatdev-photo/xena-blackcatui-avatar.jpg"
	alt="Bill Clinton"
	class="bcu-avatar-xs"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="bcu-avatar-sm"
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
	class="bcu-avatar-lg"
/>
<Avatar
	{variant}
	src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"
	alt="Bill Clinton"
	class="bcu-avatar-xl"
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
					<div class="flex flex-col md:flex-row gap-2 md:gap-2">
						<Avatar {variant} class="bcu-avatar-xs">
							<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
						</Avatar>
						<Avatar {variant} class="bcu-avatar-sm">
							<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
						</Avatar>
						<Avatar {variant}>
							<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
						</Avatar>
						<Avatar {variant} class="bcu-avatar-lg">
							<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
						</Avatar>
						<Avatar {variant} class="bcu-avatar-xl">
							<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
						</Avatar>
					</div>
				</svelte:fragment>

				<svelte:fragment slot="bcu-previewer-source">
					<CodeBlock
						language="html"
						code={`
<Avatar {variant} class="bcu-avatar-xs">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="bcu-avatar-sm">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant}>
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="bcu-avatar-lg">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
<Avatar {variant} class="bcu-avatar-xl">
	<svelte:fragment slot="bcu-avatar-message">AJ</svelte:fragment>
</Avatar>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
	</section>
</DocsShell>
