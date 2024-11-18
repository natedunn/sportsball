import type { RequestHandler } from './$types';

import { json } from '@sveltejs/kit';

import { fetchData } from './utils';

export const GET: RequestHandler = async ({ params }) => {
	// Delay
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	return json(await fetchData({ params }));
};
