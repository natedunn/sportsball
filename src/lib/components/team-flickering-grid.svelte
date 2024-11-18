<script lang="ts">
	import type { FlickeringGridProps } from '$lib/components/ui/flickering-grid.svelte';
	import type { ClassValue } from 'clsx';

	import FlickeringGrid from '$lib/components/ui/flickering-grid.svelte';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';

	interface Props {
		dark: string;
		light: string;
		grid?: FlickeringGridProps;
		className?: ClassValue;
	}

	let { dark, light, grid = {}, className }: Props = $props();

	// Compute the color based on the current mode
	let color = $derived(`#${$mode === 'dark' ? dark : light}`);

	// Extract grid props with defaults
	let squareSize = $derived(grid?.squareSize ?? 4);
	let gridGap = $derived(grid?.gridGap ?? 6);
	let maxOpacity = $derived(grid?.maxOpacity ?? 0.7);
	let flickerChance = $derived(grid?.flickerChance ?? 0.1);
	let height = $derived(grid?.height ?? 130);
	let width = $derived(grid?.width ?? 130);
</script>

<FlickeringGrid
	class={cn('absolute inset-0 z-0', className)}
	{color}
	{squareSize}
	{gridGap}
	{maxOpacity}
	{flickerChance}
	{height}
	{width}
/>
