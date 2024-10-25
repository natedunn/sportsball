import { router } from "@/lib/trpc/trpc";
import { noAuthProcedure } from "../procedures";
import type { NbaScoreboardResponse } from "@/lib/schema/external/nba-scoreboard";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const nbaRouter = router({
	allGames: noAuthProcedure
		.input(
			z.object({
				date: z.string(),
			})
		)
		.query(async ({ input }) => {
			const date = input?.date;

			const data = (await fetch(
				`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${date}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					next: {
						revalidate: 10,
					},
				}
			).then((res) => res.json())) as NbaScoreboardResponse;

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
							detail: event.status.type.detail,
						},
						away: {
							name: awayTeam.team?.name,
							score: awayTeam.score,
							logo: awayTeam.team?.logo,
							color: awayTeam.team?.color,
						},
						home: {
							name: homeTeam.team?.name,
							score: homeTeam.score,
							logo: homeTeam.team?.logo,
							color: homeTeam.team?.color,
						},
					};
				});
				return games;
			}

			return null;
		}),
});
