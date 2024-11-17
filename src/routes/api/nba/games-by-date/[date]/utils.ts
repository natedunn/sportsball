import type { LoadEvent } from '@sveltejs/kit';
import type { NbaScoreboardResponse } from '$lib/schema/external/nba-scoreboard';
import type { RouteParams } from './$types';

import { queryOptions } from '@tanstack/svelte-query';
import nbaConfig from '$config/nba-teams';

export const fetchData = async ({ params }: { params: RouteParams }) => {
	const data = (await fetch(
		`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${params.date}`,
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	).then((res) => res.json())) as NbaScoreboardResponse;

	if (data && data.events) {
		const games = data.events.map((event) => {
			const homeTeam = event.competitions[0].competitors.find((c) => c.homeAway === 'home');

			const awayTeam = event.competitions[0].competitors.find((c) => c.homeAway === 'away');

			if (!homeTeam || !awayTeam || !event.status || !event.uid) {
				throw new Error('Invalid data');
			}

			return {
				id: event.id,
				uid: event.uid,
				state: event.status.type.state,
				time: {
					start: event.competitions[0].startDate,
					detail: event.status.type.detail
				},
				away: {
					id: awayTeam.team.id,
					uid: awayTeam.team.uid,
					name: awayTeam.team.name,
					score: awayTeam.score,
					logo: awayTeam.team.logo,
					primaryColor: awayTeam.team.color,
					darkColor: nbaConfig.find((x) => x.teamId === awayTeam.team.uid)?.darkColor ?? '000000',
					lightColor: nbaConfig.find((x) => x.teamId === awayTeam.team.uid)?.lightColor ?? '000000',
					seasonRecord:
						awayTeam.records?.find((record) => record.type === 'total')?.summary ?? 'N/A'
				},
				home: {
					id: homeTeam.team.id,
					uid: homeTeam.team.uid,
					name: homeTeam.team?.name,
					score: homeTeam.score,
					logo: homeTeam.team?.logo,
					primaryColor: homeTeam.team.color,
					darkColor: nbaConfig.find((x) => x.teamId === homeTeam.team.uid)?.darkColor ?? '000000',
					lightColor: nbaConfig.find((x) => x.teamId === homeTeam.team.uid)?.lightColor ?? '000000',
					seasonRecord:
						homeTeam.records?.find((record) => record.type === 'total')?.summary ?? 'N/A'
				}
			};
		});
		return games;
	}

	return [];
};

export type GamesByDateResponse = Awaited<ReturnType<typeof fetchData>>;

export const gamesByDateQueryOptions = (date: string, _fetch: LoadEvent['fetch']) => {
	return queryOptions({
		queryKey: ['nbaGamesByDate', date],
		queryFn: async () => {
			return (await _fetch(`/api/nba/games-by-date/${date}`).then((res) =>
				res.json()
			)) as GamesByDateResponse;
		},
		refetchInterval: 10 * 1000
	});
};
