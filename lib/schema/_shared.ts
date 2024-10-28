import type { z } from "zod";

type InferSchema<T> = T extends z.ZodType ? z.infer<T> : never;

// Generic type for CRUDS operations
export type SchemaObject<T extends Record<string, z.ZodType>> = {
	[K in keyof T as Capitalize<K & string>]: InferSchema<T[K]>;
};

// Columns that will *always* be handled by the DB, so there is no need to edit
// them
export const immutableColumns = {
	createdAt: true,
	updatedAt: true,
} as const;

export const inaccessibleColumns = {
	autoId: true,
} as const;
