<script lang="ts">
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils';

	type Props = {
		classNames?: {
			wrapper?: ClassValue;
			inner?: ClassValue;
		};
		children?: Snippet;
	};

	let { classNames, children }: Props = $props();
</script>

<div class={cn('flex gap-2 rounded-xl border border-border bg-muted/30 p-2', classNames?.wrapper)}>
	<div
		class={cn(
			'relative flex w-full justify-between gap-2 overflow-hidden rounded-lg border border-border bg-card',
			classNames?.inner
		)}
	>
		{@render children?.()}
	</div>
</div>
