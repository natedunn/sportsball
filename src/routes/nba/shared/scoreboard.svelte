<script lang="ts">
	import type { GamesByDateResponse as GamesByDate } from '$routes/api/nba/games-by-date/[date]/utils';

	import Score from '$components/score.svelte';
	import Card from '$components/ui/card.svelte';
	import Competitor from '$lib/components/competitor.svelte';
	import { formatGameDate } from '$utils/date';

	type Props = {
		game: GamesByDate[0];
		showInfoLink?: boolean;
	};

	let { game, showInfoLink = false }: Props = $props();

	let homeTeam = $derived(game.home);
	let awayTeam = $derived(game.away);

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
					awayScore={Number(awayTeam.score)}
					homeScore={Number(homeTeam.score)}
					gameState={game.state}
				/>
			{/if}
		</div>
		<div class="flex items-center justify-center gap-2">
			{#if !!game.time.detail}
				<span class="text-muted-foreground">
					{game.state === 'pre' && game.time.start
						? `Starts ${formatGameDate(new Date(game.time.start), true)}`
						: game.time.detail}
				</span>
			{/if}
			{#if showInfoLink}
				<span class="text-muted-foreground">|</span>
				<a
					href={`/nba/game/${game.id}`}
					class="inline-flex items-center gap-2 hocus:text-foreground hocus:underline"
				>
					<span>Game info</span>
				</a>
			{/if}
		</div>
	</div>
	{#if homeTeam}
		{@const team = homeTeam}
		<Competitor homeAway="home" {classes} {team} />
	{/if}
</Card>
