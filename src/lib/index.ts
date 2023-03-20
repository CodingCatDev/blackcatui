// This file defines the short path imports for the package (ex: @codingcatdev/blackcatui/*)

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;

// Svelte Components ---

// DataDisplay
export { default as Avatar } from './components/DataDisplay/Avatar/Avatar.svelte';
export { default as CodeBlock } from './components/DataDisplay/CodeBlock/CodeBlock.svelte';

// Feedback
export { default as Alert } from './components/Feedback/Alert/Alert.svelte';

// Inputs
export { default as Button } from './components/Inputs/Button/Button.svelte';
export { default as RadioGroup } from './components/Inputs/Radio/RadioGroup.svelte';
export { default as RadioItem } from './components/Inputs/Radio/RadioItem.svelte';

// Layout
export { default as AppBar } from './components/Layout/AppBar/AppBar.svelte';
export { default as AppShell } from './components/Layout/AppShell/AppShell.svelte';

// TODO: Maybe these should be sibling to components
export * from './components/Utilities/Clipboard/clipboard';
export * from './components/Utilities/LocalStorageStore/LocalStorageStore';
