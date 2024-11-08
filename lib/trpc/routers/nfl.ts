import { router } from "@/lib/trpc/trpc";
import { noAuthProcedure } from "../procedures";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

import nbaConfig from "@/config/nba-teams";
import { NflScoreboardResponse } from "@/lib/schema/external/nfl-scoreboard";

export const nflRouter = router({
	allGames: noAuthProcedure
		.input(
			z.object({
				date: z.string(),
			})
		)
		.query(async ({ input }) => {
			const date = input?.date;

			const data = (await fetch(
				`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${date}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					next: {
						revalidate: 10,
					},
				}
			).then((res) => res.json())) as NflScoreboardResponse;

			if (data && data.events) {
				const games = data.events.map((event) => {
					const homeTeam = event.competitions[0].competitors.find(
						(c) => c.homeAway === "home"
					);

					const awayTeam = event.competitions[0].competitors.find(
						(c) => c.homeAway === "away"
					);

					if (!homeTeam || !awayTeam || !event.status || !event.uid) {
						throw new TRPCError({
							code: "BAD_REQUEST",
							message: "Invalid data",
						});
					}

					return {
						uid: event.uid,
						state: event.status.type.state,
						time: {
							start: event.competitions[0].startDate,
							detail: event.status.type.detail,
						},
						away: {
							id: awayTeam.team.uid,
							name: awayTeam.team.name,
							score: awayTeam.score,
							logo: awayTeam.team.logo,
							primaryColor: awayTeam.team.color,
							darkColor:
								nbaConfig.find((x) => x.teamId === awayTeam.team.uid)
									?.darkColor ?? "000000",
							lightColor:
								nbaConfig.find((x) => x.teamId === awayTeam.team.uid)
									?.lightColor ?? "000000",
							seasonRecord:
								awayTeam.records?.find((record) => record.type === "total")
									?.summary ?? "N/A",
						},
						home: {
							id: homeTeam.team.uid,
							name: homeTeam.team?.name,
							score: homeTeam.score,
							logo: homeTeam.team?.logo,
							primaryColor: homeTeam.team.color,
							darkColor:
								nbaConfig.find((x) => x.teamId === homeTeam.team.uid)
									?.darkColor ?? "000000",
							lightColor:
								nbaConfig.find((x) => x.teamId === homeTeam.team.uid)
									?.lightColor ?? "000000",
							seasonRecord:
								homeTeam.records?.find((record) => record.type === "total")
									?.summary ?? "N/A",
						},
					};
				});
				return games;
			}

			return null;
		}),
});
