import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

import { createTRPCContext } from '@/lib/trpc/context';
import { appRouter } from '@/lib/trpc/routers/_app';

// function replaceHostname(url: string, newHostname: string): string {
// 	try {
// 		const parsedUrl = new URL(url);
// 		parsedUrl.host = newHostname;
// 		// Remove the port if it exists
// 		if (parsedUrl.port) {
// 			parsedUrl.port = '';
// 		}
// 		return parsedUrl.toString();
// 	} catch (error) {
// 		console.error('Error parsing URL:', error);
// 		return url;
// 	}
// }

const handler = (req: NextRequest) => {
	// console.log('>>>>>tRPC handler', req.url);

	// const newUrl = replaceHostname(req.url, 'kino.local');

	// const newReq = new NextRequest(newUrl, {
	// 	method: req.method,
	// 	headers: req.headers,
	// 	body: req.body,
	// });

	// console.log('>>>>newReq', newReq.url);

	return fetchRequestHandler({
		endpoint: '/api/trpc',
		// endpoint: `${getBaseUrl()}/api/trpc`,
		router: appRouter,
		req: req,
		createContext: () => createTRPCContext({ req }),
		onError: ({ error }) => {
			console.log('Error in tRPC handler (edge)');
			console.error(error);
		},
	});
};

export { handler as GET, handler as POST };
