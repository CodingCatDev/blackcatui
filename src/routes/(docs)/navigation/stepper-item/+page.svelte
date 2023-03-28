<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldStepperItem from '$lib/components/Navigation/Stepper/StepperItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Stepper Item (Step)',
		description:
			'Present contents withen each Step of Stepper, used in <a href="/navigation/stepper">Stepper</a>',
		imports: ['StepperItem'],
		source: 'components/Stepper',
		components: [
			{
				label: 'StepperItem',
				sveld: sveldStepperItem,
				overrideProps: [
					'gap',
					'stepTerm',
					'justify',
					'buttonBack',
					'buttonBackLabel',
					'buttonNext',
					'buttonNextLabel',
					'buttonComplete',
					'buttonCompleteLabel'
				]
			}
		]
	};

	// Local
	let locked: boolean = true;

	function onNextHandler(e: any): void {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e: any): void {
		console.log('event:prev', e.detail);
	}
	function onStepHandler(e: any): void {
		console.log('event:step', e.detail);
	}
	function onCompleteHandler(e: any): void {
		console.log('event:complete', e.detail);
		alert('Complete!');
	}
</script>

<DocsShell {settings}>
	<section class="flex flex-col gap-4">
		<CodeBlock
			language="html"
			code={`
<Stepper>
	<StepperItem>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</StepperItem>
	<StepperItem>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</StepperItem>
	<!-- ... -->
</Stepper>
			`}
		/>
	</section></DocsShell
>
