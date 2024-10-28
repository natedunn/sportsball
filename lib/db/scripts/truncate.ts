import { confirm } from '@inquirer/prompts';
import { sql } from 'drizzle-orm';

import { httpDb } from '@/lib/db';

export const truncate = async () => {
	const answer = await confirm({
		message: 'Are you sure you want to truncate all tables?',
	});

	if (!answer) {
		console.log('❌ Truncating all tables cancelled');
		process.exit(0);
	}

	console.log('⏳ Truncating tables...');

	const start = Date.now();

	const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public';
    `;

	const result = await httpDb.execute(query);
	const tables = result.rows;

	for (const table of tables) {
		const query = sql.raw(`TRUNCATE TABLE ${table.table_name} CASCADE;`);
		await httpDb.execute(query);
	}

	const end = Date.now();

	console.log('✅ Truncating completed in', end - start, 'ms');

	process.exit(0);
};

truncate().catch((err) => {
	console.error('❌ Truncating failed');
	console.error(err);
	process.exit(1);
});
