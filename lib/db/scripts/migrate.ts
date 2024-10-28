import { confirm } from '@inquirer/prompts';
import { migrate } from 'drizzle-orm/neon-http/migrator';

import { httpDb } from '@/lib/db';

import { setupGlobalUpdateTrigger } from './setup';

const runMigrate = async () => {
	const answer = await confirm({
		message: 'Are you sure you want to run migrations?',
	});

	if (!answer) {
		console.log('❌ Migrations cancelled');
		process.exit(0);
	}
	console.log('⏳ Running migrations...');
	const start = Date.now();

	await setupGlobalUpdateTrigger();
	await migrate(httpDb, { migrationsFolder: './migrations' });

	const end = Date.now();
	console.log('✅ Migrations completed in', end - start, 'ms');
	process.exit(0);
};

runMigrate().catch((err) => {
	console.error('❌ Migration failed');
	console.error(err);
	process.exit(1);
});
