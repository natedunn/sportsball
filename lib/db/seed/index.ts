import { seedNbaTeams } from "./nba-team";

export const seeder = async () => {
	try {
		await seedNbaTeams();
	} catch (error) {
		console.error(error);
		throw new Error("Seed error...");
	}
};
