import { pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultColumns } from "../_shared";

export const nbaTeam = pgTable("nba_team", {
	...defaultColumns(),
	name: varchar().notNull(),
	teamId: varchar().notNull(),
});
