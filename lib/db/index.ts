import type { NeonQueryFunction } from "@neondatabase/serverless";

import { neon, Pool } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle } from "drizzle-orm/neon-serverless";

import { env } from "@/lib/env/server";

import * as tables from "./tables";

// Serverless
const connection = new Pool({ connectionString: env.DATABASE_URL });
export const db = drizzle(connection, {
	schema: tables,
});

// HTTP
const sql: NeonQueryFunction<boolean, boolean> = neon(env.DATABASE_URL);
export const httpDb = drizzleHttp(sql);
