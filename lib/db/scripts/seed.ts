import "dotenv/config";

import { seeder } from "../seed";

const seed = async () => {
	console.log("⏳ Seeding database...");
	const start = Date.now();

	await seeder();

	const end = Date.now();
	console.log("✅ Seeding completed in", end - start, "ms");
	process.exit(0);
};

seed().catch((err) => {
	console.error("❌ Seeding failed");
	console.error(err);
	process.exit(1);
});
