<script lang="ts">
	import type { ClassValue } from 'tailwind-variants';

	import { parseDate } from '@internationalized/date';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { formatDate, moveDate } from '$lib/utils/date';
	import ArrowDown from 'lucide-svelte/icons/arrow-down';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	import { buttonVariants } from './ui/button';
	import DatePicker from './ui/date-picker.svelte';

	let { class: className = '', date }: { class?: ClassValue; date: string } = $props();

	let datePickerOpen = $state(false);
	let buttonClasses = $state(
		cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex items-center gap-2')
	);

	let prevDay = $derived(moveDate(date, 'prev'));
	let todayDay = $derived(moveDate(date, 'today'));
	let nextDay = $derived(moveDate(date, 'next'));

	let datePickerValue = $derived.by(() => {
		if (!date || date === formatDate(new Date(), 'YYYY-MM-DD')) {
			return undefined;
		}
		return parseDate(date);
	});
</script>

<div class={cn('flex gap-2', className)}>
	<a class={buttonClasses} href={`/nba?date=${prevDay}`} draggable="false">
		<ArrowLeft class="h-4 w-4" />
		Previous
	</a>
	<DatePicker
		bind:isOpen={datePickerOpen}
		value={datePickerValue}
		onChange={(e) => {
			if (!e) return;
			goto(`/nba?date=${formatDate(e.toString(), 'YYYY-MM-DD')}`);
			datePickerOpen = false;
		}}
	/>
	<a class={buttonClasses} href={`/nba?date=${todayDay}`} draggable="false">
		<ArrowDown class="h-4 w-4" />
		Today</a
	>
	<a class={buttonClasses} href={`/nba?date=${nextDay}`} draggable="false"
		>Next
		<ArrowRight class="h-4 w-4" />
	</a>
</div>
