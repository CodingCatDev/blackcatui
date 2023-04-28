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
export { drawerStore } from './components/Navigation/Drawer/stores';
export type { DrawerSettings } from './components/Navigation/Drawer/types';

export { default as Stepper } from './components/Navigation/Stepper/Stepper.svelte';
export { default as Tab } from './components/Navigation/Tab/Tab.svelte';
export { default as TabGroup } from './components/Navigation/Tab/TabGroup.svelte';

// TODO: Maybe these should be sibling to components and types unified?

// Clipboard
export { clipboard } from './components/Utilities/Clipboard/clipboard';

// DataTable
export { tableInteraction, tableA11y } from './components/Utilities/DataTable/actions';
export { createDataTableStore, dataTableHandler } from './components/Utilities/DataTable/DataTable';
export type { DataTableModel, DataTableOptions } from './components/Utilities/DataTable/types';

// FocusTrap
export { focusTrap } from './components/Utilities/FocusTrap/focusTrap';

// LightSwitch
export { default as LightSwitch } from './components/Utilities/LightSwitch/LightSwitch.svelte';
export { modeOsPrefers, modeUserPrefers, modeCurrent, getModeOsPrefers, getModeUserPrefers, getModeAutoPrefers, setModeUserPrefers, setModeCurrent, setInitialClassState, autoModeWatcher } from './components/Utilities/LightSwitch/lightswitch';

// LocalStorage
export { localStorageStore } from './components/Utilities/LocalStorageStore/LocalStorageStore';

//Modal
export { default as Modal } from './components/Utilities/Modal/Modal.svelte';
export { modalStore } from './components/Utilities/Modal/stores';
export type { ModalComponent, ModalSettings } from './components/Utilities/Modal/types';

//Toast
export { default as Toast } from './components/Feedback/Toast/Toast.svelte';
export { toastStore } from './components/Feedback/Toast/stores';
export type { ToastSettings } from './components/Feedback/Toast/types';

//Popup
export { storePopup, popup } from './components/Utilities/Popup/popup';
export type { PopupSettings } from './components/Utilities/Popup/types';

//Firebase
export { default as FirebaseApp } from './components/Firebase/App/FirebaseApp.svelte';
export { default as FirebaseUser } from './components/Firebase/Auth/FirebaseUser.svelte';
export { default as FirebaseCollection } from './components/Firebase/Firestore/FirebaseCollection.svelte';
export { default as FirebaseDoc } from './components/Firebase/Firestore/FirebaseDoc.svelte';
export { docStore, userStore, collectionStore } from './components/Firebase/stores';