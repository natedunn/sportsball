import { vercel } from "@t3-oss/env-core/presets";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	extends: [vercel()],
	client: {
		NEXT_PUBLIC_ROOT_DOMAIN: z.string().min(1),
		NEXT_PUBLIC_LOGGER_RESULT_LENGTH: z.coerce.number().int().min(0).optional(),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
		NEXT_PUBLIC_LOGGER_RESULT_LENGTH:
			process.env.NEXT_PUBLIC_LOGGER_RESULT_LENGTH,
	},
	isServer: typeof window === "undefined",
});
