<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { BookOpen, Film, Tv } from '@steeze-ui/heroicons';
	import { Gamedeveloper } from '@steeze-ui/simple-icons';

	// Core
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	import DocsLayout from '../../DocsLayout/DocsLayout.svelte';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	import { variants } from '../../DocsPreview/options';
	let variant = 'variant-filled';

	// Current Component
	import Accordion from '$lib/components/Layout/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Layout/Accordion/AccordionItem.svelte';
	const loremIpsum =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.';
</script>

<DocsLayout>
	<svelte:fragment slot="bcu-docs-header" />
	<svelte:fragment slot="bcu-docs-detail">
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2>Code Block</h2>
				<DocsPreview>
					<svelte:fragment slot="bcu-previewer-preview">
						<Accordion autocollapse class="p-4" {variant}>
							<AccordionItem open>
								<svelte:fragment slot="bcu-lead">
									<Icon src={BookOpen} theme="solid" class="w-8" />
								</svelte:fragment>
								<svelte:fragment slot="bcu-summary"><p class="font-bold">Books</p></svelte:fragment>
								<svelte:fragment slot="bcu-content">
									<p>This is the content panel for the <strong>books</strong> item.</p>
									<p>{loremIpsum}</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="bcu-lead">
									<Icon src={Film} theme="solid" class="w-8" />
								</svelte:fragment>
								<svelte:fragment slot="bcu-summary"><p class="font-bold">Movies</p></svelte:fragment
								>
								<svelte:fragment slot="bcu-content">
									<p>This is the content panel for the <strong>movies</strong> item.</p>
									<p>{loremIpsum}</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="bcu-lead">
									<Icon src={Tv} theme="solid" class="w-8" />
								</svelte:fragment>
								<svelte:fragment slot="bcu-summary"
									><p class="font-bold">Television</p></svelte:fragment
								>
								<svelte:fragment slot="bcu-content">
									<p>This is the content panel for the <strong>television</strong> item.</p>
									<p>{loremIpsum}</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="bcu-lead">
									<Icon src={Gamedeveloper} theme="solid" class="w-8" />
								</svelte:fragment>
								<svelte:fragment slot="bcu-summary"><p class="font-bold">Games</p></svelte:fragment>
								<svelte:fragment slot="bcu-content">
									<p>This is the content panel for the <strong>games</strong> item.</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi
										quibusdam odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam,
										nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
									</p>
								</svelte:fragment>
							</AccordionItem>
						</Accordion>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-footer">
						<div class="flex justify-center gap-4">
							<select bind:value={variant} class="select w-auto">
								{#each variants as vSet}
									<optgroup label={vSet.label}>
										{#each vSet.list as v}
											<option value={v}>{v}</option>
										{/each}
									</optgroup>
								{/each}
							</select>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="bcu-previewer-source">
						<CodeBlock
							language="html"
							code={`
<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="bcu-lead">(icon)</svelte:fragment>
		<svelte:fragment slot="bcu-summary">(summary)</svelte:fragment>
		<svelte:fragment slot="bcu-content">(content)</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="bcu-lead">(icon)</svelte:fragment>
		<svelte:fragment slot="bcu-summary">(summary)</svelte:fragment>
		<svelte:fragment slot="bcu-content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>
				`}
						/>
					</svelte:fragment>
				</DocsPreview>
			</div>
		</section>
	</svelte:fragment>
</DocsLayout>
