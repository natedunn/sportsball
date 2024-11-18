<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { gamesByDateQO } from '$api/nba/games-by-date/[date]/utils';
	import DatePagination from '$components/date-pagination.svelte';
	import { formatDateToString } from '$utils/date';
	import { queryParamsState } from 'kit-query-params';

	import Scoreboard from './shared/scoreboard.svelte';

	const params = queryParamsState({
		schema: {
			date: 'string'
		},
		invalidate: ['nba', 'nbaGamesByDate']
	});

	let date = $derived(
		formatDateToString(params.date ?? new Date().toISOString().split('T')[0], 'YYYYMMDD')
	);

	const query = createQuery(() => gamesByDateQO({ date }));
</script>

<div class="flex flex-col gap-4 py-12">
	<h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Games for today</h1>
	<div class="flex flex-col flex-wrap items-center justify-between gap-4">
		<DatePagination {date} />
		{#if query.isLoading}
			<div class="flex flex-col items-center justify-center gap-4">
				<div class="text-gray-500">Loading games...</div>
			</div>
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
					<div class="text-gray-500">No games found</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
