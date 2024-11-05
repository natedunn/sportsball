import { Query } from "@upstash/query";
import { Redis } from "@upstash/redis";

import { env } from "@/lib/env/server";

export const redis = new Redis({
	url: env.UPSTASH_REDIS_REST_URL,
	token: env.UPSTASH_REDIS_REST_TOKEN,
});

export const query = new Query({
	redis: Redis.fromEnv({
		automaticDeserialization: false,
	}),
});
