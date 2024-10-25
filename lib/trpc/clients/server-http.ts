'use server';

import type { AppRouter } from '@/lib/trpc/routers/_app';

import {
	createTRPCClient,
	httpBatchLink,
	unstable_httpBatchStreamLink as httpBatchStreamLink,
	splitLink,
} from '@trpc/react-query';
import * as headers from 'next/headers';
import superjson from 'superjson';

import { customLoggerLink, skipStream } from '@/lib/trpc/utils';
import { getBaseUrl } from '@/lib/utils/get-base-url';

const options = {
	transformer: superjson,
	url: `${getBaseUrl()}/api/trpc`,
	headers: () => {
		const h = new Map(headers.headers());
		h.delete('connection');
		h.delete('transfer-encoding');
		h.set('x-trpc-source', 'server');
		return Object.fromEntries(h.entries());
	},
};

export const api = createTRPCClient<AppRouter>({
	links: [
		customLoggerLink(),
		splitLink({
			condition: skipStream,
			true: httpBatchLink(options),
			false: httpBatchStreamLink(options),
		}),
	],
});
