import type { RequestHandler } from './$types';

import { json } from '@sveltejs/kit';
import { ENDPOINT_NBA_SCOREBOARD } from '$env/static/private';

import { fetchData } from './utils';

export const GET: RequestHandler = async ({ params }) => {
	// Delay
	// await new Promise((resolve) => setTimeout(resolve, 5000));

	return json(await fetchData({ endpoint: ENDPOINT_NBA_SCOREBOARD, params }));
};
