"use client";

import type { PropsWithChildren } from "react";

import { use, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import {
	httpBatchLink,
	unstable_httpBatchStreamLink as httpBatchStreamLink,
	splitLink,
} from "@trpc/client";
import superjson from "superjson";

import { api } from "@/lib/trpc/clients/client";
import { customLoggerLink, skipStream } from "@/lib/trpc/utils";

import { getBaseUrl } from "../utils/get-base-url";

type ClientProviderProps = PropsWithChildren<{
	headers: Promise<Headers>;
}>;

const makeQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * 1000,
			},
		},
	});
};

let clientQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
	if (typeof window === "undefined") {
		// Server: always make a new query client
		return makeQueryClient();
	} else {
		// Browser: make a new query client if we don't already have one
		if (!clientQueryClient) clientQueryClient = makeQueryClient();
		return clientQueryClient;
	}
};

export function TrpcProvider(props: ClientProviderProps) {
	const queryClient = getQueryClient();

	const h = use(props.headers);

	const options = {
		transformer: superjson,
		url: `${getBaseUrl()}/api/trpc`,
		headers() {
			const headers = new Map(h);
			headers.set("x-trpc-source", "nextjs-react");
			return Object.fromEntries(headers);
		},
	};

	const [trpcClient] = useState(() => {
		return api.createClient({
			links: [
				customLoggerLink(),
				splitLink({
					condition: skipStream,
					true: httpBatchLink(options),
					false: httpBatchStreamLink(options),
				}),
			],
		});
	});

	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryStreamedHydration>
					{props.children}
					<ReactQueryDevtools
						initialIsOpen={false}
						buttonPosition="bottom-left"
					/>
				</ReactQueryStreamedHydration>
			</QueryClientProvider>
		</api.Provider>
	);
}
