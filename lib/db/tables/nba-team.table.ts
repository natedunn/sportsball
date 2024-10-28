import { pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultColumns } from "../_shared";

export const nbaTeam = pgTable("nba_team", {
	...defaultColumns(),
	name: varchar().notNull(),
	teamId: varchar().notNull().unique(),
	primaryColor: varchar().notNull(),
	slug: varchar().notNull().unique(),
	darkColor: varchar().notNull(),
	lightColor: varchar().notNull(),
});
