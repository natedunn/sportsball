import "dotenv/config";

import { defineConfig } from "drizzle-kit";
import { env } from "@/lib/env/server";

export default defineConfig({
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	schema: "./lib/db/tables/*.ts",
	out: "./migrations",
	dialect: "postgresql",
	verbose: true,
});
