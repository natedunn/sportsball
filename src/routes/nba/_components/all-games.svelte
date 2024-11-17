<script lang="ts">
	import type { GamesByDate } from '../_api/games-by-date';

	let { games }: { games: GamesByDate } = $props();
</script>

<div>
	{#each games as game}
		<div>{game.id}</div>
	{/each}
</div>
