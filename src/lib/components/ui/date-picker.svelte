<script lang="ts">
	import type { DateValue } from '@internationalized/date';

	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import { Calendar } from '$lib/components/ui/calendar/index';
	import * as Popover from '$lib/components/ui/popover/index';
	import { cn } from '$lib/utils';
	import CalendarIcon from 'lucide-svelte/icons/calendar';

	type Props = {
		onOpen?: (e: MouseEvent) => void;
		onChange?: (value: DateValue | undefined) => void;
		isOpen?: boolean;
		value: DateValue | undefined;
	};

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	// let value = $state<DateValue | undefined>();
	let contentRef = $state<HTMLElement | null>(null);

	let {
		onOpen,
		onChange,
		isOpen = $bindable(false),
		value = $bindable(undefined)
	}: Props = $props();

	$effect(() => {
		onChange?.(value);
	});
</script>

<Popover.Root bind:open={isOpen}>
	<Popover.Trigger
		class={cn(
			buttonVariants({
				variant: 'outline',
				class: 'justify-start text-left font-normal',
				size: 'sm'
			}),
			!value && 'text-muted-foreground'
		)}
		onclick={(e) => {
			onOpen?.(e);
		}}
	>
		<CalendarIcon />
		{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
	</Popover.Trigger>
	<Popover.Content bind:ref={contentRef} class="w-auto p-0">
		<Calendar type="single" bind:value />
	</Popover.Content>
</Popover.Root>
