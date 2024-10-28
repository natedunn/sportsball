"use client";

import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { api } from "@/lib/trpc/clients/client";
import { Points } from "./points";
import { Competitor } from "./competitor";
import { parseCustomDateFormat, playDateFormat } from "@/lib/utils/date";

export const AllGames = () => {
	const { apiFormat } = useTimestamp();

	const { data } = api.nfl.allGames.useQuery(
		{
			date: apiFormat,
		},
		{
			refetchInterval: 15000,
		}
	);

	return (
		<div className="flex flex-col gap-4">
			{data?.map((game) => (
				<div
					key={game?.uid}
					className="flex gap-2 p-2 border border-border rounded-xl bg-muted/30"
				>
					<div className="overflow-hidden relative flex gap-2 bg-card rounded-lg w-full border border-border justify-between">
						<Competitor team={game.away} homeAway="away" />
						<div className="flex items-center flex-col justify-center gap-2">
							{(game.state === "in" || game.state === "post") && (
								<Points
									home={game.home.score}
									away={game.away.score}
									state={game.state}
								/>
							)}
							{game.time.detail && (
								<span className="text-muted-foreground">
									{game.time.detail.endsWith("EDT")
										? playDateFormat(parseCustomDateFormat(game.time.detail))
										: game.time.detail}
								</span>
							)}
						</div>
						<Competitor team={game.home} homeAway="home" />
					</div>
				</div>
			))}
		</div>
	);
};
