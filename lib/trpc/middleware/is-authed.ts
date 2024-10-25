import { TRPCError } from "@trpc/server";

import { t } from "@/lib/trpc/trpc";

export const isAuthed = t.middleware(async ({ ctx, next }) => {
	if (!ctx.auth.userId) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Not authenticated",
		});
	}

	return next({
		ctx: {
			...ctx,
			auth: ctx.auth,
		},
	});
});
