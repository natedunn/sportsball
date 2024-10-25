import type { NbaScoreboardResponse } from "@/lib/schema/external/nba-scoreboard";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
	const data = (await fetch(
		"https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
		{
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate,
			},
		}
	).then((res) => res.json())) as NbaScoreboardResponse;

	if (data && data.events) {
		const games = data.events.map((event) => {
			const homeTeam = event.competitions?.[0].competitors?.find(
				(c) => c.homeAway === "home"
			);

			const awayTeam = event.competitions?.[0].competitors?.find(
				(c) => c.homeAway === "away"
			);

			return {
				away: {
					name: awayTeam?.team?.name,
					score: awayTeam?.score,
					logo: awayTeam?.team?.logo,
				},
				home: {
					name: homeTeam?.team?.name,
					score: homeTeam?.score,
					logo: homeTeam?.team?.logo,
				},
			};
		});
		return NextResponse.json(games);
	}

	return NextResponse.json({ error: "No data found" }, { status: 404 });
}
