<script lang="ts">
	import DocsShell from '../../DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '../../DocsShell/types';
	import DocsPreview from '../../DocsPreview/DocsPreview.svelte';
	// Components
	import Stepper from '$lib/components/Navigation/Stepper/Stepper.svelte';
	import StepperItem from '$lib/components/Navigation/Stepper/StepperItem.svelte';
	import Switch from '$lib/components/Inputs/Switch/Switch.svelte';
	import CodeBlock from '$lib/components/DataDisplay/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldStepper from '$lib/components/Navigation/Stepper/Stepper.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Stepper',
		description:
			'Divide and present content in sequenced steps, utilizes <a href="/navigation/stepper-item">Stepper Item</a>',
		imports: ['Stepper', 'StepperItem'],
		source: 'components/Stepper',
		components: [{ label: 'Stepper', sveld: sveldStepper }]
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
		<DocsPreview>
			<svelte:fragment slot="bcu-previewer-preview">
				<div class="w-full p-4 bcu-card text-token">
					<Stepper
						on:next={onNextHandler}
						on:back={onBackHandler}
						on:step={onStepHandler}
						on:complete={onCompleteHandler}
					>
						<StepperItem>
							<svelte:fragment slot="bcu-stepper-item-header">Get Started!</svelte:fragment>
							<p>
								This example Stepper will teach you how to use this component. Tap <u>next</u> to proceed
								to the next step.
							</p>
						</StepperItem>
						<StepperItem>
							<svelte:fragment slot="bcu-stepper-item-header">Going Back.</svelte:fragment>
							<p>
								The current step progress will be tracked at the top. Tap <u>back</u> to return to the
								previous step.
							</p>
						</StepperItem>
						<StepperItem {locked}>
							<svelte:fragment slot="bcu-stepper-item-header">A Locked StepperItem.</svelte:fragment
							>
							<p>
								This StepperItem component uses the <code>locked</code> property to prevent progress.
								This is ideal for multi-step forms, such as registration. For now we'll simulate a successful
								validation condition using the toggle below.
							</p>
							<aside class="bcu-alert variant-ghost-warning">
								<div class="bcu-alert-message">
									<p>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u></p>
								</div>
								<div class="bcu-alert-actions">
									<Switch name="locked-state" bind:checked={locked} active="bg-warning-500" />
								</div>
							</aside>
						</StepperItem>
						<StepperItem>
							<svelte:fragment slot="bcu-stepper-item-header">Long Form Content.</svelte:fragment>
							<p>The steps will expand to fit content of any length.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
								vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum.
								Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus
								unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta
								repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
								corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel
								expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut
								nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab
								accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.
							</p>
						</StepperItem>
						<StepperItem>
							<svelte:fragment slot="bcu-stepper-item-header">Almost Done.</svelte:fragment>
							<p>
								A Complete button will appear on the last step. When the step is unlocked and the
								button pressed, an <code>on:complete</code> event will be fired. You can use this trigger
								to submit form data to a server.
							</p>
						</StepperItem>
					</Stepper>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bcu-previewer-source">
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
			</svelte:fragment>
		</DocsPreview>

		<p>
			Create a set of Steps within the Stepper, then use the <code>on:complete</code> event to
			detect when all steps are complete. Since horizontal space may be limited on small screens, we
			recommend no more than <em>five</em> steps at max.
		</p>
		<!-- Event Handlers -->
		<section class="space-y-4">
			<h2>Event Handlers</h2>
			<h3>Complete Event</h3>
			<CodeBlock
				language="ts"
				code={`function onCompleteHandler(e: Event): void { console.log('event:complete', e); }`}
			/>
			<CodeBlock language="html" code={`<Stepper on:complete={onCompleteHandler}>...</Stepper>`} />
			<h3>Next, StepperItem and Previous</h3>
			<p>
				Events are fired when the next or previous steps are pressed, step fires for both cases.
			</p>
			<CodeBlock
				language="ts"
				code={`function onStepHandler(e: {step: number, state: {current: number, total: number}}): void {
	console.log('event:step', e); 
}`}
			/>
			<CodeBlock
				language="html"
				code={`<Stepper on:next={onNextHandler} on:step={onStepHandler} on:back={onBackHandler}>...</Stepper>`}
			/>
			<blockquote>
				TIP: <code>e.state.current</code> contains the step shown to the user after navigation,
				<code>e.step</code> contains the step where navigation occured.
			</blockquote>
		</section>
		<!-- Locked State -->
		<section class="space-y-4">
			<h2>Locked State</h2>
			<p>
				Each StepperItem can have a <code>locked</code> property set, when set to <em>TRUE</em> this
				locks progression for that step. For example, you can lock a step until a form within it becomes
				valid.
			</p>
			<CodeBlock language="ts" code={`let lockedState: boolean = true;`} />
			<CodeBlock language="html" code={`<StepperItem locked={lockedState}>...</StepperItem>`} />
		</section>
		<!-- StepperItem Term -->
		<section class="space-y-4">
			<h2>StepperItem Term</h2>
			<p>
				Use the <code>stepTerm</code> property to override text shown in the animated section at the
				top of the Stepper, which is useful if you need i18n support for other languages.
			</p>
			<CodeBlock
				language="html"
				code={`
<!-- French: Marcher 1, Marcher 2, ... -->
<StepperItem stepTerm='Marcher'>...</StepperItem>\n
<!-- Spanish: Paso 1, Paso 2, ... -->
<StepperItem stepTerm='Paso'>...</StepperItem>
			`}
			/>
			<p>
				This can be overwritten per each StepperItem as well, which updates the <em>default</em> and
				<em>header</em> slot placeholder text.
			</p>
		</section>
	</section>
</DocsShell>
