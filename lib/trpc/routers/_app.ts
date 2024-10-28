import { TRPCClientErrorLike } from "@trpc/client";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { router } from "@/lib/trpc/trpc";
import { nbaRouter } from "./nba";
import { nflRouter } from "./nfl";

export const appRouter = router({
	nba: nbaRouter,
	nfl: nflRouter,
});

export type AppRouter = typeof appRouter;

export type TRPCClientError = TRPCClientErrorLike<AppRouter>;
export type API = {
	input: inferRouterInputs<AppRouter>;
	output: inferRouterOutputs<AppRouter>;
};
