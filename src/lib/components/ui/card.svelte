<script lang="ts">
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils';

	type Props = {
		class?: ClassValue;
		children?: Snippet;
	};

	let { class: className = '', children }: Props = $props();
</script>

<div class="flex gap-2 rounded-xl border border-border bg-muted/30 p-2">
	<div
		class={cn(
			'relative flex w-full justify-between gap-2 overflow-hidden rounded-lg border border-border bg-card',
			className
		)}
	>
		{@render children?.()}
	</div>
</div>
