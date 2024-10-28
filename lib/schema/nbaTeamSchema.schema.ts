import type { Refine } from "drizzle-zod";
import type { SchemaObject } from "./_shared";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { nbaTeam } from "@/lib/db/tables/nba-team.table";

import { immutableColumns } from "./_shared";

const refineSchema = {} satisfies Refine<typeof nbaTeam, "select">;

export const nbaTeamSchema = {
	create: createInsertSchema(nbaTeam, refineSchema).pick(immutableColumns),
	read: createSelectSchema(nbaTeam, refineSchema),
	update: createInsertSchema(nbaTeam, refineSchema).pick(immutableColumns),
	delete: createInsertSchema(nbaTeam, refineSchema).pick({ id: true }),
	seed: createInsertSchema(nbaTeam, refineSchema),
};

export type NbaTeamSchema = SchemaObject<typeof nbaTeamSchema>;
