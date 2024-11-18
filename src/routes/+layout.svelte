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
	<div class="container">
		<ModeWatcher />
		<div>
			<ModeDropdown />
			{@render children()}
		</div>
	</div>
</QueryClientProvider>
