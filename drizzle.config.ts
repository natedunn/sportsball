import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	schema: "./lib/db/tables/index.ts",
	out: "./migrations",
	dialect: "postgresql",
	verbose: true,
});
