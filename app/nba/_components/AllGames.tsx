"use client";

import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { api } from "@/lib/trpc/clients/client";
import Image from "next/image";
import { Points } from "./Points";

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
					<div className="flex gap-2 bg-card rounded-lg w-full border dark:border-neutral-700 border-neutral-300 justify-between">
						<div className="flex flex-col gap-2 items-center p-4 md:min-w-[120px]">
							{game.away.logo && game.away.name && (
								<Image
									className="w-8 sm:w-10 md:w-12"
									src={game.away.logo}
									alt={game.away.name}
									width={48}
									height={48}
								/>
							)}
							{game.away.name}
						</div>
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
						<div className="flex flex-col gap-2 items-center p-4 md:min-w-[120px]">
							{game.home.logo && game.home.name && (
								<Image
									className="w-8 sm:w-10 md:w-12"
									src={game.home.logo}
									alt={game.home.name}
									width={50}
									height={50}
								/>
							)}
							{game.home.name}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
