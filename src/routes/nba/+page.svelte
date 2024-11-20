<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { gamesByDateQO } from '$api/nba/games-by-date/[date]/utils';
	import DatePagination from '$components/date-pagination.svelte';
	import Card from '$components/ui/card.svelte';
	import { formatDate } from '$utils/date';
	import { queryParamsState } from 'kit-query-params';

	import Scoreboard from './shared/scoreboard.svelte';

	const params = queryParamsState({
		schema: {
			date: 'string'
		},
		invalidate: ['nba', 'nbaGamesByDate']
	});

	let date = $derived(params.date ?? formatDate(new Date(), 'YYYY-MM-DD'));

	const query = createQuery(() => gamesByDateQO({ date: formatDate(date, 'YYYYMMDD') }));
</script>

<div class="flex flex-col gap-8 pb-12 lg:pb-20">
	<div class="bg-gradient-to-b from-muted/70 to-transparent pt-12 dark:from-muted/30">
		<div class="flex flex-col items-center justify-between gap-2">
			<h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
				Daily NBA scores
			</h1>
			<p class="text-muted-foreground/50">View current, upcoming, and past games for the NBA.</p>
		</div>
	</div>
	<div class="container">
		<div class="flex flex-col gap-4">
			<div class="flex justify-center">
				<DatePagination {date} />
			</div>
			{#if query.isLoading}
				<Card
					classNames={{
						wrapper: 'text-2xl font-bold text-muted-foreground text-muted-foreground/50',
						inner: 'p-6 justify-center'
					}}
				>
					Loading games...
				</Card>
			{:else if query.isError}
				<div class="flex flex-col items-center justify-center gap-4">
					<div class="text-red-500">Error loading games</div>
					<div class="text-gray-500">{query.error.message}</div>
				</div>
			{:else}
				{@const games = query.data}
				{#if !!games && games.length > 0}
					<div class="flex w-full flex-col gap-4">
						{#each games as game (game.id)}
							<Scoreboard {game} />
						{/each}
					</div>
				{:else}
					<div class="flex flex-col items-center justify-center gap-4">
						<div class="mt-4 text-lg text-muted-foreground/50">No games scheduled</div>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>
