"use client";

import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { api } from "@/lib/trpc/clients/client";
import { Points } from "./points";
import { Competitor } from "./competitor";
import { detailToDate, formatGameDate } from "@/lib/utils/date";
import { Empty } from "@phosphor-icons/react";
import React, { PropsWithChildren, useEffect } from "react";
import { AlertCircle, Loader, LucideIcon } from "lucide-react";

const Message = ({
	children,
	icon: Icon,
}: PropsWithChildren<{ icon: LucideIcon }>) => (
	<div className="rounded-lg bg-card border-border/50 border p-6">
		<div className="flex items-center gap-4 justify-center">
			<Icon size={32} className="text-muted-foreground/50" />
			<span className="text-2xl font-bold text-muted-foreground/50">
				{children}
			</span>
		</div>
	</div>
);

export const AllGames = () => {
	const { apiFormat } = useTimestamp();

	const { data, isLoading, isError, error } = api.nba.allGames.useQuery(
		{
			date: apiFormat,
		},
		{
			refetchInterval: 15000,
		}
	);

	useEffect(() => {
		console.log("error", error);
	}, [error]);

	return (
		<div className="flex flex-col gap-4">
			{isError ? (
				<Message icon={AlertCircle}>Error: {error.data?.code}</Message>
			) : null}
			{isLoading ? (
				<Message icon={Loader}>Loading games...</Message>
			) : data && data.length > 0 ? (
				data.map((game) => (
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
										{game.state === "pre"
											? formatGameDate(detailToDate(game.time.detail), true)
											: game.time.detail}
									</span>
								)}
							</div>
							<Competitor team={game.home} homeAway="home" />
						</div>
					</div>
				))
			) : !isError ? (
				<Message icon={Empty}>No games scheduled</Message>
			) : null}
		</div>
	);
};
