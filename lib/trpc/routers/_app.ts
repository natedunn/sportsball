import { TRPCClientErrorLike } from "@trpc/client";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { router } from "@/lib/trpc/trpc";
import { nbaRouter } from "./nba";

export const appRouter = router({
	nba: nbaRouter,
});

export type AppRouter = typeof appRouter;

export type TRPCClientError = TRPCClientErrorLike<AppRouter>;
export type API = {
	input: inferRouterInputs<AppRouter>;
	output: inferRouterOutputs<AppRouter>;
};
