// This file defines the short path imports for the package (ex: @codingcatdev/blackcatui/*)

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;

// Svelte Components ---

// DataDisplay
export { default as Avatar } from './components/DataDisplay/Avatar/Avatar.svelte';
export { default as CodeBlock } from './components/DataDisplay/CodeBlock/CodeBlock.svelte';
export { default as List } from './components/DataDisplay/List/List.svelte';
export { default as Paginator } from './components/DataDisplay/Paginator/Paginator.svelte';
export { default as Table } from './components/DataDisplay/Table/Table.svelte';
export { default as TableOfContents } from './components/DataDisplay/TableOfContents/TableOfContents.svelte';

// Feedback
export { default as Alert } from './components/Feedback/Alert/Alert.svelte';
export { default as ConicGradient } from './components/Feedback/ConicGradient/ConicGradient.svelte';
export { default as ProgressBar } from './components/Feedback/ProgressBar/ProgressBar.svelte';
export { default as ProgressCircle } from './components/Feedback/ProgressCircle/ProgressCircle.svelte';

// Inputs
export { default as Autocomplete } from './components/Inputs/Autocomplete/Autocomplete.svelte';
export { default as Button } from './components/Inputs/Button/Button.svelte';
export { default as FileButton } from './components/Inputs/FileButton/FileButton.svelte';
export { default as FileDropzone } from './components/Inputs/FileDropzone/FileDropzone.svelte';
export { default as InputChip } from './components/Inputs/InputChip/InputChip.svelte';
export { default as RadioGroup } from './components/Inputs/Radio/RadioGroup.svelte';
export { default as RadioItem } from './components/Inputs/Radio/RadioItem.svelte';
export { default as RangeSlider } from './components/Inputs/RangeSlider/RangeSlider.svelte';
export { default as Switch } from './components/Inputs/Switch/Switch.svelte';

// Layout
export { default as Accordion } from './components/Layout/Accordion/Accordion.svelte';
export { default as AppBar } from './components/Layout/AppBar/AppBar.svelte';
export { default as AppRail } from './components/Layout/AppRail/AppRail.svelte';
export { default as AppShell } from './components/Layout/AppShell/AppShell.svelte';

// Navigation
export { default as Drawer } from './components/Navigation/Drawer/Drawer.svelte';
export { default as Stepper } from './components/Navigation/Stepper/Stepper.svelte';
export { default as Tab } from './components/Navigation/Tab/Tab.svelte';
export { default as TabGroup } from './components/Navigation/Tab/TabGroup.svelte';

// TODO: Maybe these should be sibling to components and types unified?

// Clipboard
export * from './components/Utilities/Clipboard/clipboard';

// DataTable
export * from './components/Utilities/DataTable/actions';
export * from './components/Utilities/DataTable/DataTable';
export * from './components/Utilities/DataTable/types';

// FocusTrap
export * from './components/Utilities/FocusTrap/focusTrap';

// LightSwitch
export { default as LightSwitch } from './components/Utilities/LightSwitch/LightSwitch.svelte';
export * from './components/Utilities/LightSwitch/lightswitch';

// LocalStorage
export * from './components/Utilities/LocalStorageStore/LocalStorageStore';

//Modal
export { default as Modal } from './components/Utilities/Modal/Modal.svelte';
export * from './components/Utilities/Modal/stores';
export * from './components/Utilities/Modal/types';

//Popup
export * from './components/Utilities/Popup/popup';
export * from './components/Utilities/Popup/types';
