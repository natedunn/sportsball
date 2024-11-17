import type { SearchParamsSchema } from '../params';
import type { GamesByDateResponse } from '../../api/nba/games-by-date/[date]/utils';

export const gamesByDate = async ({ date }: { date: SearchParamsSchema['date'] }) => {
	return (await fetch(`/api/nba/games-by-date/${date}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as GamesByDateResponse;
};

export type GamesByDate = Awaited<ReturnType<typeof gamesByDate>>;
