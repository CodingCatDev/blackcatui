# BlackCatUI

The BlackCatUI Tailwind plugin provides a set of utility classes that adjust to your theme settings, while also providing Svelte specific components.

## Is this just a fork of Skeleton

BlackCatUI's core is based on [Skeleton](https://github.com/skeletonlabs/skeleton), the difference being that we try to provide everything as a Component. Below is a comparison of one of those differences

Skeleton's Tailwind CSS only for button

```svelte
{#if visible}
	<aside class="alert variant-ghost">
		<!-- Icon -->
		<div>(icon)</div>
		<!-- Message -->
		<div class="alert-message">
			<h3>(title)</h3>
			<p>{message}</p>
		</div>
		<!-- Actions -->
		<div class="alert-actions">(buttons)</div>
	</aside>
{/if}
```

BlackCatUI's Svelte component for button

```svelte
<Alert {visible} {variant} slotIcon="w-8">
	<!-- Message -->
	<svelte:fragment slot="bcu-alert-message">(message)</svelte:fragment>
</Alert>
```

We will continue to compare back to the core package and see if it makes more sense just to use Skeleton as a dependency for this project or if we manually pick and choose components.

## Component Grouping

Because everything should be a component we are trying to keep the groups closer to [MUI](https://mui.com/).
