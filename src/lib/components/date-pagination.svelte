<script lang="ts">
	import type { ClassValue } from 'tailwind-variants';

	import { cn } from '$lib/utils';
	import { moveDate } from '$lib/utils/date';

	import { buttonVariants } from './ui/button';

	let { class: className = '', date }: { class?: ClassValue; date: string } = $props();

	let buttonClasses = cn(buttonVariants({ variant: 'outline', size: 'sm' }));

	let nextDay = $derived(moveDate(date, 'next'));
	let prevDay = $derived(moveDate(date, 'prev'));
	let todayDay = $derived(moveDate(date, 'today'));
</script>

<div class={cn('flex gap-2', className)}>
	<a class={buttonClasses} href={`/nba?date=${prevDay}`}>Previous</a>
	<a class={buttonClasses} href={`/nba?date=${todayDay}`}>Today</a>
	<a class={buttonClasses} href={`/nba?date=${nextDay}`}>Next</a>
</div>
