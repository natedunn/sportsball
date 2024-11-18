<script lang="ts">
	import type { GamesByDateResponse as GamesByDate } from '$routes/api/nba/games-by-date/[date]/utils';

	import Score from '$components/score.svelte';
	import Card from '$components/ui/card.svelte';
	import Competitor from '$lib/components/competitor.svelte';

	type Props = {
		game: GamesByDate[0];
	};

	let { game }: Props = $props();

	let homeTeam = $state(game.home);
	let awayTeam = $state(game.away);

	let classes = $state({
		wrapper: 'p-4 md:min-w-[130px]'
	});
</script>

<Card>
	{#if awayTeam}
		{@const team = awayTeam}
		<Competitor homeAway="away" {classes} {team} />
	{/if}
	<div class="flex flex-col items-center justify-center gap-2">
		<div>
			{#if game.state === 'in' || game.state == 'post'}
				<Score
					score={{
						away: Number(awayTeam.score),
						home: Number(homeTeam.score)
					}}
					gameState={game.state}
				/>
			{/if}
		</div>
		<div class="flex items-center justify-center gap-2">
			{#if !!game.time.detail}
				<span class="text-muted-foreground">
					{game.time.detail}
				</span>
			{/if}
			<span class="text-muted-foreground">|</span>
			<a
				href={`/nba/game/${game.id}`}
				class="inline-flex items-center gap-2 hocus:text-foreground hocus:underline"
			>
				<span>Game info</span>
			</a>
		</div>
	</div>
	{#if homeTeam}
		{@const team = homeTeam}
		<Competitor homeAway="home" {classes} {team} />
	{/if}
</Card>
