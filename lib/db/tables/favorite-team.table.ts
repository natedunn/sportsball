import { pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultColumns } from "../_shared";

export const favoriteTeam = pgTable("favorite_team", {
	...defaultColumns(),
	userId: varchar().notNull(),
	teamId: varchar().notNull(),
});
