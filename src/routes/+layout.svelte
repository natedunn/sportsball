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
	<div class="flex h-screen flex-col">
		<nav class="border-b border-border bg-background py-2">
			<div class="container flex items-center justify-between">
				<a class="group inline-flex justify-center gap-2 px-2 py-2" href="/">
					<span class="py-0.5 text-lg leading-none">◍</span>
					<span class="group-hocus:underline">Sportsball</span>
				</a>
				<div class="flex items-center gap-3">
					<a class="inline-flex px-2 py-2 hocus:underline" href="/nba"> NBA </a>
					<a
						class="pointer-events-none inline-flex px-2 py-2 text-muted-foreground hocus:underline"
						href="/nfl"
					>
						NFL (Coming soon)</a
					>
					<div class="text-muted-foreground/50">|</div>
					<ModeDropdown />
				</div>
			</div>
		</nav>
		<main class="flex-auto">
			{@render children()}
		</main>
		<footer class="mt-auto border-t border-border bg-background py-4">
			<div class="container">
				<div>
					<div class="inline">
						<span class="py-0.5 text-lg leading-none">◍</span>
						<span class="group-hocus:underline">Sportsball</span>
					</div>
					is a project by{` `}<a class="underline" href="https://github.com/natedunn">Nate Dunn</a>
				</div>
			</div>
		</footer>
	</div>
</QueryClientProvider>
