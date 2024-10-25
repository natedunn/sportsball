import type { NextRequest } from "next/server";

import { getAuth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

type AuthObject = ReturnType<typeof getAuth>;

type CreateContextOptions = {
	auth: AuthObject;
};

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		auth: opts.auth,
		db,
	};
};

export const createTRPCContext = async (opts: { req: NextRequest }) => {
	const auth = getAuth(opts.req);
	return {
		...createInnerTRPCContext({
			auth,
		}),
		req: opts.req,
		headers: opts && Object.fromEntries(opts.req.headers),
	};
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
