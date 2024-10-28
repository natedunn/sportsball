import { confirm } from '@inquirer/prompts';
import { sql } from 'drizzle-orm';

import { httpDb } from '@/lib/db';

export const dropTables = async () => {
	const answer = await confirm({
		message: 'Are you sure you want to drop all tables?',
	});

	if (!answer) {
		console.log('❌ Dropping all tables cancelled');
		process.exit(0);
	}

	console.log('⏳ Dropping all tables in database...');

	const start = Date.now();

	const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE';
    `;

	const result = await httpDb.execute(query);
	const tables = result.rows;

	for (const table of tables) {
		const query = sql.raw(`DROP TABLE ${table.table_name} CASCADE;`);
		await httpDb.execute(query);
	}

	const end = Date.now();

	console.log('✅ Dropped all tables in', end - start, 'ms');

	process.exit(0);
};

dropTables().catch((err) => {
	console.error('❌ Dropping all tables failed');
	console.error(err);
	process.exit(1);
});
