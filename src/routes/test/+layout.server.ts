import type { LayoutServerLoad } from './$types';

import { validateSearchParams } from '$lib/utils/params';
import { z } from 'zod';

export const load: LayoutServerLoad = async (ctx) => {
	const num = ctx.url.searchParams.get('num');

	validateSearchParams(
		ctx.url.searchParams,
		z.object({
			num: z.coerce.number().min(1).max(100).default(1)
		})
	);

	const date = new Date().toISOString();

	return {
		message: `Hello from layout server! ${date}`,
		test: Number(num) + Math.random()
	};
};
