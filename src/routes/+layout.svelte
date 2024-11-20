<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';

	import ModeDropdown from '$components/mode-dropdown.svelte';

	let { children } = $props();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<ModeWatcher />

	<nav class="border-b border-border bg-background">
		<div class="container flex items-center justify-between">
			<a class="group inline-flex justify-center gap-2 px-2 py-2" href="/">
				<span class="py-0.5 text-lg leading-none">◍</span>
				<span class="group-hocus:underline">Sportsball</span>
			</a>
			<div class="flex items-center gap-3">
				<a class="inline-flex px-2 py-2 hocus:underline" href="/nba"> NBA </a>
				<a class="inline-flex px-2 py-2 hocus:underline" href="/nfl"> NFL </a>
				<div class="text-muted-foreground/50">|</div>
				<ModeDropdown />
			</div>
		</div>
	</nav>
	<main class="container">
		{@render children()}
	</main>
</QueryClientProvider>
