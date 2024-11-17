<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();

	let loading = $state(false);

	async function randomNumber() {
		const num = Math.floor(Math.random() * 10);
		loading = true;

		// Fake wait time
		await new Promise((resolve) => setTimeout(resolve, 500));

		goto(`/test/thing?num=${num}`).then(() => {
			loading = false;
		});
	}
</script>

<div>
	<h1>This is a page inside a layout: {data.test}</h1>
	<Button onclick={randomNumber}>
		{#if loading}
			Loading...
		{:else}
			Update number
		{/if}
	</Button>
</div>
