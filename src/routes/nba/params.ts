import { z } from 'zod';

const dateNow = new Date().toISOString().split('T')[0];

export const searchParamsSchema = z.object({
	date: z.coerce.string().date().default(dateNow)
});

export type SearchParamsSchema = z.infer<typeof searchParamsSchema>;
