"use client";

import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { api } from "@/lib/trpc/clients/client";
import { Points } from "./Points";
import { Competitor } from "./Competitor";

export const AllGames = () => {
	const { apiFormat } = useTimestamp();

	const { data } = api.nba.allGames.useQuery(
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
					<div className="overflow-hidden relative flex gap-2 bg-card rounded-lg w-full border dark:border-neutral-700 border-neutral-300 justify-between">
						<Competitor team={game.away} homeAway="away" />
						<div className="flex items-center flex-col justify-center gap-2">
							{(game.state === "in" || game.state === "post") && (
								<Points
									home={game.home.score}
									away={game.away.score}
									state={game.state}
								/>
							)}
							<span className="text-muted-foreground">{game.time.detail}</span>
						</div>
						<Competitor team={game.home} homeAway="home" />
					</div>
				</div>
			))}
		</div>
	);
};
