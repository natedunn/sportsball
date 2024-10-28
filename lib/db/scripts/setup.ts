import { sql } from 'drizzle-orm';

import { httpDb } from '..';

export async function setupGlobalUpdateTrigger() {
	// Create the trigger function
	await httpDb.execute(sql`
    CREATE OR REPLACE FUNCTION update_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);

	// Create the function to add the trigger to all tables
	await httpDb.execute(sql`
    CREATE OR REPLACE FUNCTION add_updated_at_trigger_to_all_tables()
    RETURNS void AS $$
    DECLARE
        tbl text;
    BEGIN
        FOR tbl IN
            SELECT tables.table_name
            FROM information_schema.tables
            WHERE tables.table_schema = 'public'
              AND tables.table_type = 'BASE TABLE'
        LOOP
            EXECUTE format('
                DROP TRIGGER IF EXISTS update_updated_at_trigger ON %I;
                CREATE TRIGGER update_updated_at_trigger
                BEFORE UPDATE ON %I
                FOR EACH ROW
                EXECUTE FUNCTION update_updated_at();
            ', tbl, tbl);
        END LOOP;
    END;
    $$ LANGUAGE plpgsql;
  `);

	// Execute the function to add the trigger to all tables
	await httpDb.execute(sql`SELECT add_updated_at_trigger_to_all_tables();`);
}
