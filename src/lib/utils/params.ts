import type { ZodError } from 'zod';

import { error as throwError } from '@sveltejs/kit';

type Primitive = 'string' | 'number' | 'date' | 'boolean' | `<${string}>`;
export type Schema = {
	[key: string]: Primitive | Schema | [Schema] | [Primitive];
};

export const urlSearchParamsToObject = (params: URLSearchParams): Record<string, string> => {
	const result: Record<string, string> = {};

	params.forEach((value, key) => {
		result[key] = value;
	});

	return result;
};

export const validateSearchParams = <T>(
	params: URLSearchParams | Record<string, string>,
	schema: {
		parse(data: unknown): T;
		safeParse(data: unknown): { success: boolean; data?: T; error?: ZodError<T> };
	},
	errorCallback?: (error: ZodError<T>) => void
) => {
	const { data, success, error } = schema.safeParse(
		typeof params === 'object' ? params : urlSearchParamsToObject(params)
	);

	if (!success) {
		if (errorCallback) {
			errorCallback(error!);
		} else {
			throwError(500, {
				message: error!.errors.map((e) => e.message).join(', ')
			});
		}
	}

	return data;
};
