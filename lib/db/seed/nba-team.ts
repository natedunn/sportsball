import { httpDb } from "@/lib/db";
import { nbaTeam } from "@/lib/db/tables/nba-team.table";
import { NBATeamsResponse } from "@/lib/schema/external/nba-teams";
import type { NbaTeamSchema } from "@/lib/schema/nbaTeamSchema.schema";

const generate = async () => {
	const nbaTeams: NbaTeamSchema["Seed"][] = [];

	const response = (await fetch(
		"https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams"
	).then((res) => res.json())) as NBATeamsResponse;

	const teams = response.sports?.[0].leagues?.[0].teams
		?.map((team) => team.team)
		.filter((team) => team !== undefined);

	if (!teams) {
		throw new Error("No teams found");
	}

	for (let i = 0; i < teams.length; i++) {
		nbaTeams.push({
			name: teams[i].name,
			teamId: teams[i].uid,
			slug: teams[i].slug,
			primaryColor: teams[i].color,
			darkColor: teams[i].color,
			lightColor: teams[i].color,
		});
	}
	return nbaTeams;
};

export const seedNbaTeams = async () => {
	const values = await generate();
	try {
		await httpDb.insert(nbaTeam).values(values);
		return values;
	} catch (error) {
		console.error(error);
		throw new Error("Seed error with FEEDBACK_BOARDS...");
	}
};
