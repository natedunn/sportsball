<script lang="ts">
	import type { GamesByDateResponse } from '../api/nba/games-by-date/[date]/utils';

	import { createQuery } from '@tanstack/svelte-query';
	import { formatDateToString, moveDate } from '$lib/utils/date';
	import { queryParamsState } from 'kit-query-params';

	import AllGames from './_components/all-games.svelte';

	const params = queryParamsState({
		schema: {
			date: 'string'
		},
		invalidate: ['nba', 'nbaGamesByDate']
	});

	let date = $derived(
		formatDateToString(params.date ?? new Date().toISOString().split('T')[0], 'YYYYMMDD')
	);
	let nextDay = $derived(moveDate(date, 'next'));
	let prevDay = $derived(moveDate(date, 'prev'));
	let todayDay = $derived(moveDate(date, 'today'));

	const query = createQuery(() => ({
		queryKey: ['nbaGamesByDate', date],
		queryFn: async () => {
			return (await fetch(`/api/nba/games-by-date/${date}`).then((res) =>
				res.json()
			)) as GamesByDateResponse;
		},
		refetchInterval: 10 * 1000
	}));
</script>

<div class="flex flex-col gap-4 py-12">
	<h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Games for today</h1>
	<div class="flex flex-col flex-wrap items-center justify-between gap-4">
		<div>
			<a href={`/nba?date=${prevDay}`}>Previous</a>
			<a href={`/nba?date=${todayDay}`}>Today</a>
			<a
				onclick={(e) => {
					console.log(e.currentTarget);
					e.currentTarget?.focus();
				}}
				href={`/nba?date=${nextDay}`}>Next</a
			>
		</div>
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
				<AllGames {games} />
			{:else}
				<div class="flex flex-col items-center justify-center gap-4">
					<div class="text-gray-500">No games found</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
